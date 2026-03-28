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
  },
  {
    roots: [
      {
        type: "BreadcrumbList",
        sourceFormat: "microdata",
        location: {
          startLine: 8,
          startColumn: 36
        },
        properties: new Map([
          [
            "itemListElement",
            [
              {
                kind: "node",
                linkLocation: {
                  startLine: 10,
                  startColumn: 13
                },
                node: {
                  type: "ListItem",
                  sourceFormat: "microdata",
                  location: {
                    startLine: 10,
                    startColumn: 50
                  },
                  properties: new Map([
                    [
                      "item",
                      [
                        {
                          kind: "node",
                          linkLocation: {
                            startLine: 11,
                            startColumn: 37
                          },
                          node: {
                            type: "Thing",
                            id: "https://example.com/category-1.html",
                            sourceFormat: "microdata",
                            location: {
                              startLine: 11,
                              startColumn: 37
                            },
                            properties: new Map([
                              [
                                "name",
                                [
                                  {
                                    kind: "literal",
                                    location: {
                                      startLine: 11,
                                      startColumn: 59
                                    },
                                    value: "Category 1"
                                  }
                                ]
                              ]
                            ])
                          }
                        }
                      ]
                    ],
                    [
                      "position",
                      [
                        {
                          kind: "literal",
                          location: {
                            startLine: 12,
                            startColumn: 17
                          },
                          value: "1"
                        }
                      ]
                    ]
                  ])
                }
              },
              {
                kind: "node",
                linkLocation: {
                  startLine: 14,
                  startColumn: 13
                },
                node: {
                  type: "ListItem",
                  sourceFormat: "microdata",
                  location: {
                    startLine: 14,
                    startColumn: 50
                  },
                  properties: new Map([
                    [
                      "item",
                      [
                        {
                          kind: "node",
                          linkLocation: {
                            startLine: 15,
                            startColumn: 37
                          },
                          node: {
                            type: "Thing",
                            id: "https://example.com/category-2.html",
                            sourceFormat: "microdata",
                            location: {
                              startLine: 15,
                              startColumn: 37
                            },
                            properties: new Map([
                              [
                                "name",
                                [
                                  {
                                    kind: "literal",
                                    location: {
                                      startLine: 15,
                                      startColumn: 59
                                    },
                                    value: "Category 2"
                                  }
                                ]
                              ]
                            ])
                          }
                        }
                      ]
                    ],
                    [
                      "position",
                      [
                        {
                          kind: "literal",
                          location: {
                            startLine: 16,
                            startColumn: 17
                          },
                          value: "2"
                        }
                      ]
                    ]
                  ])
                }
              },
              {
                kind: "node",
                linkLocation: {
                  startLine: 18,
                  startColumn: 13
                },
                node: {
                  type: "ListItem",
                  sourceFormat: "microdata",
                  location: {
                    startLine: 18,
                    startColumn: 50
                  },
                  properties: new Map([
                    [
                      "item",
                      [
                        {
                          kind: "node",
                          linkLocation: {
                            startLine: 19,
                            startColumn: 37
                          },
                          node: {
                            type: "Thing",
                            id: "https://example.com/category-3.html",
                            sourceFormat: "microdata",
                            location: {
                              startLine: 19,
                              startColumn: 37
                            },
                            properties: new Map([
                              [
                                "name",
                                [
                                  {
                                    kind: "literal",
                                    location: {
                                      startLine: 19,
                                      startColumn: 59
                                    },
                                    value: "Category 3"
                                  }
                                ]
                              ]
                            ])
                          }
                        }
                      ]
                    ],
                    [
                      "position",
                      [
                        {
                          kind: "literal",
                          location: {
                            startLine: 20,
                            startColumn: 17
                          },
                          value: "3"
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
