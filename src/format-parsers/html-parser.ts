import type { SchemaGraph, SchemaNode } from "../types.js";

import { JSONLDParser } from "./json-ld-parser.js";

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
    return {
      roots
    };
  }
}
