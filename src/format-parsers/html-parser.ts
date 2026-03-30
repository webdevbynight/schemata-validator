import type { DefaultTreeAdapterMap } from "parse5";
import type { SchemaGraph, SchemaNode, SchemaValue } from "../types.js";

import { parse as parse5 } from "parse5";

import { JSONLDParser } from "./json-ld-parser.js";

import { SCHEMA_ORG_URL_PATTERN } from "../constants.js";

export class HTMLParser {
  private readonly html: string;

  /**
   * Constructs an instance of the HTMLParser class.
   * @param html - The HTML document.
   */
  constructor(html: string) {
    this.html = html;
  }

  /**
   * Sets the absolute URI, prepending the fake base URI if the URI is relative.
   * @access private
   * @param uri - The URI to parse.
   * @return The absolute URI if the URI is provided, `undefined` otherwise.
   */
  private setAbsoluteURI(uri: string | undefined): string | undefined {
    if (typeof uri === "string") {
      const fakeBaseURI = "https://example.com";
      return uri.startsWith("http")
        ? uri
        : uri.startsWith("/")
          ? fakeBaseURI + uri
          : `${fakeBaseURI}/${uri}`;
    }
    return undefined;
  }

  /**
   * Gets nodes having the `itemscope` attribute.
   * @access private
   * @param node - The current node to inspect.
   * @return An array of nodes with microdata item scope.
   */
  private getNodesWithMicrodataItem(
    node: DefaultTreeAdapterMap["childNode"]
  ): (DefaultTreeAdapterMap["element"] | DefaultTreeAdapterMap["template"])[] {
    const nodesWithItemScope: (
      | DefaultTreeAdapterMap["element"]
      | DefaultTreeAdapterMap["template"]
    )[] = [];
    if ("tagName" in node) {
      if ("attrs" in node && node.attrs.some(attr => attr.name === "itemscope")) {
        nodesWithItemScope.push(node);
      } else {
        const { childNodes } = node;
        for (const childNode of childNodes) {
          nodesWithItemScope.push(...this.getNodesWithMicrodataItem(childNode));
        }
      }
    }
    return nodesWithItemScope;
  }

  /**
   * Get properties from the child nodes.
   * @access private
   * @param childNodes - The child nodes to inspect.
   * @return A map of properties and their values.
   */
  private getPropertiesFromChildNodes(
    childNodes: DefaultTreeAdapterMap["childNode"][]
  ): Map<string, SchemaValue[]> {
    const properties = new Map<string, SchemaValue[]>();
    for (const childNode of childNodes) {
      if (!("tagName" in childNode)) continue;
      const { attrs } = childNode;
      const itemprop = attrs.find(attr => attr.name === "itemprop");
      if (itemprop) {
        const keys = new Set(itemprop.value.split(" "));
        for (const key of keys) {
          const itempropLocation = childNode.sourceCodeLocation?.attrs?.itemprop;
          const location = {
            startLine: itempropLocation?.startLine ?? 0,
            startColumn: itempropLocation?.startCol ?? 0
          };
          const values = properties.get(key) ?? [];
          values.push(this.setSchemaValue(childNode, location));
          properties.set(key, values);
        }
      } else {
        const nestedProperties = this.getPropertiesFromChildNodes(childNode.childNodes);
        for (const [key, values] of nestedProperties) {
          const existingKeys = properties.get(key) ?? [];
          properties.set(key, [...existingKeys, ...values]);
        }
      }
    }
    return properties;
  }

  /**
   * Extracts text content from the child nodes.
   * @access private
   * @param nodes - An array of nodes.
   * @returns The text contents, concatenated and trimmed of any leading or trailing whitespace, any consecutive whitespace sequences being replaced by a single space character.
   */
  private extractTextContent(nodes: DefaultTreeAdapterMap["childNode"][]): string {
    return nodes
      .map(node =>
        "value" in node
          ? node.value
          : "childNodes" in node &&
              !node.attrs.some(
                attr =>
                  attr.name === "itemscope" || attr.name === "itemtype" || attr.name === "itemprop"
              )
            ? this.extractTextContent(node.childNodes)
            : ""
      )
      .join("")
      .replace(/\n+\s+/g, " ")
      .trim();
  }

  /**
   * Sets the schema value.
   *
   * In case no value is found (e.g.: all the child nodes are elements), a schema node is set.
   * @access private
   * @param node - The node from which to extract the value.
   * @param location - The `itemprop` location.
   * @return The schema value.
   */
  private setSchemaValue(
    node: DefaultTreeAdapterMap["element"] | DefaultTreeAdapterMap["template"],
    location: { startLine: number; startColumn: number }
  ): SchemaValue {
    const { attrs, childNodes } = node;
    if (attrs.some(attr => attr.name === "itemscope")) {
      return {
        kind: "node",
        linkLocation: location,
        node: this.setSchemaNode(node)
      };
    }
    const value = attrs.some(attr => attr.name === "content")
      ? (attrs.find(attr => attr.name === "content")?.value ?? "")
      : childNodes.length
        ? this.extractTextContent(childNodes)
        : (this.setAbsoluteURI(attrs.find(attr => attr.name === "src")?.value) ?? "");
    if (value) {
      return {
        kind: "literal",
        location,
        value
      };
    }
    return {
      kind: "node",
      linkLocation: location,
      node: this.setSchemaNode(node, location)
    };
  }

  /**
   * Sets the schema node.
   * @access private
   * @param node - The object from the HTML node tree to use as a node.
   * @return The schema node.
   */
  private setSchemaNode(
    node: DefaultTreeAdapterMap["element"] | DefaultTreeAdapterMap["template"],
    fallbackLocation?: { startLine: number; startColumn: number }
  ): SchemaNode {
    const { attrs, childNodes } = node;
    const type =
      attrs.find(attr => attr.name === "itemtype")?.value.replace(SCHEMA_ORG_URL_PATTERN, "") ??
      "Thing";
    const startLine =
      node.sourceCodeLocation?.attrs?.itemtype?.startLine ?? fallbackLocation?.startLine ?? 0;
    const startColumn =
      node.sourceCodeLocation?.attrs?.itemtype?.startCol ?? fallbackLocation?.startColumn ?? 0;
    const itemidValue = attrs.find(attr => attr.name === "itemid")?.value.trim();
    const hrefValue = this.setAbsoluteURI(attrs.find(attr => attr.name === "href")?.value);
    const srcValue = this.setAbsoluteURI(attrs.find(attr => attr.name === "src")?.value);
    const id = itemidValue ?? hrefValue ?? srcValue ?? undefined;
    const schemaNode = id ? { type, id } : { type };
    const properties = this.getPropertiesFromChildNodes(childNodes);
    return {
      ...schemaNode,
      properties,
      sourceFormat: "microdata",
      location: {
        startLine,
        startColumn
      }
    };
  }

  /**
   * Parses the HTML document.
   *
   * @return The intermediate representation tree of the Schema.org vocabulary used by the HTML document.
   */
  parse(): SchemaGraph {
    const roots: SchemaNode[] = [];
    const jsonLDDataSet = this.html
      .replace(/<!-{2}.*?-{2}>/gms, "")
      .matchAll(/<script\s+type=["']?application\/ld\+json["']?>(?<jsonld>.*?)<\/script>/gms);
    for (const jsonLDData of jsonLDDataSet) {
      const jsonLD = jsonLDData.groups?.jsonld ?? "";
      const jsonLDParser = new JSONLDParser(jsonLD);
      if (jsonLD) roots.push(...jsonLDParser.parse().roots);
    }
    const htmlTree = parse5(this.html, { sourceCodeLocationInfo: true });
    const [_, rootNode] = htmlTree.childNodes;
    if (rootNode) {
      const nodes = this.getNodesWithMicrodataItem(rootNode);
      roots.push(...nodes.map(node => this.setSchemaNode(node)));
    }
    return {
      roots
    };
  }
}
