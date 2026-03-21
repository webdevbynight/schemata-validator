import type { SchemaGraph } from "../../../src/types.js";

export const mockedValidSchemaGraphs: SchemaGraph[] = [
  {
    roots: [
      {
        type: "BreadcrumbList",
        sourceFormat: "jsonld",
        location: {
          jsonLDPath: "[0]"
        },
        properties: new Map([
          [
            "itemListElement",
            [
              {
                kind: "node",
                linkLocation: {
                  jsonLDPath: "[0].itemListElement"
                },
                node: {
                  type: "ListItem",
                  sourceFormat: "jsonld",
                  location: {
                    jsonLDPath: "[0].itemListElement[0]"
                  },
                  properties: new Map([
                    [
                      "position",
                      [
                        {
                          kind: "literal",
                          location: {
                            jsonLDPath: "[0].itemListElement[0].position[0]"
                          },
                          value: "1"
                        }
                      ]
                    ],
                    [
                      "item",
                      [
                        {
                          kind: "node",
                          linkLocation: {
                            jsonLDPath: "[0].itemListElement[0].item"
                          },
                          node: {
                            type: "Thing",
                            id: "https://example.com/product-1.html",
                            sourceFormat: "jsonld",
                            location: {
                              jsonLDPath: "[0].itemListElement[0].item[0]"
                            },
                            properties: new Map([
                              [
                                "name",
                                [
                                  {
                                    kind: "literal",
                                    location: {
                                      jsonLDPath: "[0].itemListElement[0].item[0].name[0]"
                                    },
                                    value: "Product 1"
                                  }
                                ]
                              ]
                            ])
                          }
                        }
                      ]
                    ]
                  ])
                }
              },
              {
                kind: "node",
                linkLocation: {
                  jsonLDPath: "[0].itemListElement"
                },
                node: {
                  type: "ListItem",
                  sourceFormat: "jsonld",
                  location: {
                    jsonLDPath: "[0].itemListElement[1]"
                  },
                  properties: new Map([
                    [
                      "position",
                      [
                        {
                          kind: "literal",
                          location: {
                            jsonLDPath: "[0].itemListElement[1].position[0]"
                          },
                          value: "2"
                        }
                      ]
                    ],
                    [
                      "item",
                      [
                        {
                          kind: "node",
                          linkLocation: {
                            jsonLDPath: "[0].itemListElement[1].item"
                          },
                          node: {
                            type: "Thing",
                            id: "https://example.com/product-2.html",
                            sourceFormat: "jsonld",
                            location: {
                              jsonLDPath: "[0].itemListElement[1].item[0]"
                            },
                            properties: new Map([
                              [
                                "name",
                                [
                                  {
                                    kind: "literal",
                                    location: {
                                      jsonLDPath: "[0].itemListElement[1].item[0].name[0]"
                                    },
                                    value: "Product 2"
                                  }
                                ]
                              ]
                            ])
                          }
                        }
                      ]
                    ]
                  ])
                }
              },
              {
                kind: "node",
                linkLocation: {
                  jsonLDPath: "[0].itemListElement"
                },
                node: {
                  type: "ListItem",
                  sourceFormat: "jsonld",
                  location: {
                    jsonLDPath: "[0].itemListElement[2]"
                  },
                  properties: new Map([
                    [
                      "position",
                      [
                        {
                          kind: "literal",
                          location: {
                            jsonLDPath: "[0].itemListElement[2].position[0]"
                          },
                          value: "3"
                        }
                      ]
                    ],
                    [
                      "item",
                      [
                        {
                          kind: "node",
                          linkLocation: {
                            jsonLDPath: "[0].itemListElement[2].item"
                          },
                          node: {
                            type: "Thing",
                            id: "https://example.com/product-3.html",
                            sourceFormat: "jsonld",
                            location: {
                              jsonLDPath: "[0].itemListElement[2].item[0]"
                            },
                            properties: new Map([
                              [
                                "name",
                                [
                                  {
                                    kind: "literal",
                                    location: {
                                      jsonLDPath: "[0].itemListElement[2].item[0].name[0]"
                                    },
                                    value: "Product 3"
                                  }
                                ]
                              ]
                            ])
                          }
                        }
                      ]
                    ]
                  ])
                }
              }
            ]
          ]
        ])
      }
    ]
  },
  {
    roots: [
      {
        type: "Thing",
        sourceFormat: "jsonld",
        location: { jsonLDPath: "[0]" },
        properties: new Map([
          [
            "name",
            [
              {
                kind: "literal",
                location: { jsonLDPath: "[0].name[0]" },
                value: "Schema.org Ontology"
              }
            ]
          ],
          [
            "subjectOf",
            [
              {
                kind: "node",
                linkLocation: { jsonLDPath: "[0].subjectOf[0]" },
                node: {
                  type: "Book",
                  sourceFormat: "jsonld",
                  location: { jsonLDPath: "[0].subjectOf[0]" },
                  properties: new Map([
                    [
                      "name",
                      [
                        {
                          kind: "literal",
                          location: { jsonLDPath: "[0].subjectOf[0].name[0]" },
                          value: "The Complete History of Schema.org"
                        }
                      ]
                    ]
                  ])
                }
              }
            ]
          ]
        ])
      }
    ]
  }
];
