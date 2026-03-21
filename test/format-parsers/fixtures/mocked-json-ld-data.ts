import type { SchemaGraph } from "../../../src/types.js";

export const mockedJSONLDData: { input: string; expectedTree: SchemaGraph }[] = [
  {
    input: `{
  "@context": {
    "name": "https://xmlns.com/foaf/0.1/name",
    "homepage": {
      "@id": "https://xmlns.com/foaf/0.1/workplaceHomepage",
      "@type": "@id"
    },
    "Person": "https://xmlns.com/foaf/0.1/Person"
  },
  "@id": "https://me.example.com",
  "@type": "Person",
  "name": "John Smith",
  "homepage": "https://www.example.com/"
}`,
    expectedTree: {
      roots: []
    }
  },
  {
    input: `{
  "@context": "https://schema.org/",
  "@type": "Thing",
  "name": "Schema.org Ontology",
  "subjectOf": {
    "@type": "Book",
    "name": "The Complete History of Schema.org"
  }
}`,
    expectedTree: {
      roots: [
        {
          type: "Thing",
          sourceFormat: "jsonld",
          location: {
            jsonLDPath: "[0]"
          },
          properties: new Map([
            [
              "name",
              [
                {
                  kind: "literal",
                  location: {
                    jsonLDPath: "[0].name[0]"
                  },
                  value: "Schema.org Ontology"
                }
              ]
            ],
            [
              "subjectOf",
              [
                {
                  kind: "node",
                  linkLocation: {
                    jsonLDPath: "[0].subjectOf[0]"
                  },
                  node: {
                    type: "Book",
                    sourceFormat: "jsonld",
                    location: {
                      jsonLDPath: "[0].subjectOf[0]"
                    },
                    properties: new Map([
                      [
                        "name",
                        [
                          {
                            kind: "literal",
                            location: {
                              jsonLDPath: "[0].subjectOf[0].name[0]"
                            },
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
  },
  {
    input: `{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement":
  [
    {
      "@type": "ListItem",
      "position": 1,
      "item":
      {
        "@id": "https://example.com/product-1.html",
        "name": "Product 1"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item":
      {
        "@id": "https://example.com/product-2.html",
        "name": "Product 2"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item":
      {
        "@id": "https://example.com/product-3.html",
        "name": "Product 3"
      }
    }
  ]
}`,
    expectedTree: {
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
                    jsonLDPath: "[0].itemListElement[0]"
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
                              jsonLDPath: "[0].itemListElement[0].item[0]"
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
                    jsonLDPath: "[0].itemListElement[1]"
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
                              jsonLDPath: "[0].itemListElement[1].item[0]"
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
                    jsonLDPath: "[0].itemListElement[2]"
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
                              jsonLDPath: "[0].itemListElement[2].item[0]"
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
    }
  }
];
