import type { JSONLDData, SchemaGraph, SchemaNode, SchemaValue } from "../types.js";

export class JSONLDParser {
  private readonly jsonLD: string;

  /**
   * Constructs an instance of the JSONLDParser class.
   * @param jsonLD - The JSON-LD data
   */
  constructor(jsonLD: string) {
    this.jsonLD = jsonLD;
  }

  /**
   * Sets the schema value.
   * @param value - The value from the JSON-LD to use as a value.
   * @param index - The index of the value in its property array.
   * @param parentPath - The JSON-LD path of the parent property.
   * @return The schema value.
   */
  setSchemaValue = (value: unknown, index: number, parentPath: string): SchemaValue => {
    const parentPathWithIndex = `${parentPath}[${index}]`;
    if (typeof value === "object" && value !== null) {
      if ("@value" in value) {
        const nestedValue = value["@value"];
        return {
          kind: "literal",
          location: {
            jsonLDPath: parentPathWithIndex
          },
          value: String(nestedValue)
        };
      }
      return {
        kind: "node",
        linkLocation: {
          jsonLDPath: parentPathWithIndex
        },
        node: this.setSchemaNode(value as JSONLDData, index, parentPath)
      };
    }
    return {
      kind: "literal",
      location: {
        jsonLDPath: parentPathWithIndex
      },
      value: String(value)
    };
  };

  /**
   * Sets the schema node.
   * @param node - The object from the JSON-LD to use as a node.
   * @param index - The index of the node in its parent array.
   * @param [parentPath] - The JSON-LD path of the parent property (the string is empty for root nodes).
   * @return The schema node.
   */
  setSchemaNode = (node: JSONLDData, index: number, parentPath = ""): SchemaNode => {
    const nodePath = `${parentPath}[${index}]`;
    const type = typeof node["@type"] === "string" ? node["@type"] : "Thing";
    const id = typeof node["@id"] === "string" ? node["@id"] : undefined;
    const schemaNode = id ? { type, id } : { type };
    const properties = new Map<string, SchemaValue[]>();
    for (const [key, rawValues] of Object.entries(node)) {
      if (key.startsWith("@")) continue;
      const propertyPath = `${nodePath}.${key}`;
      const values = (Array.isArray(rawValues) ? (rawValues as unknown[]) : [rawValues]).map(
        (value, index) => this.setSchemaValue(value, index, propertyPath)
      );
      properties.set(key, values);
    }
    return {
      ...schemaNode,
      properties,
      sourceFormat: "jsonld",
      location: {
        jsonLDPath: nodePath
      }
    };
  };

  /**
   * Parses the JSON-LD data.
   *
   * Contexts other than Schema.org are skipped.
   *
   * Any commented parts of the JSON-LD are ignored.
   * @return The intermediate representation tree of the Schema.org vocabulary used by the JSON-LD data.
   */
  parse(): SchemaGraph {
    const parsedJSONLD: JSONLDData | JSONLDData[] = JSON.parse(this.jsonLD);
    const nodes = (Array.isArray(parsedJSONLD) ? parsedJSONLD : [parsedJSONLD])
      .filter(
        node =>
          "@context" in node &&
          typeof node["@context"] === "string" &&
          node["@context"].match(/^ht{2}ps?:\/{2}schema\.org\/?$/)
      )
      .map(node => node as JSONLDData);
    const roots: SchemaNode[] = nodes.flatMap((value, index) => this.setSchemaNode(value, index));
    return {
      roots
    };
  }
}
