import type { SchemaGraph, ValidationResult } from "../../../src/types.js";

export const mockedInvalidSchemaGraphs: {
  schemaGraph: SchemaGraph;
  expectedResult: ValidationResult[];
}[] = [
  {
    schemaGraph: {
      roots: [
        {
          type: "FilAriane",
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
    expectedResult: [
      {
        type: "error",
        path: "[0]",
        message: "The type `FilAriane` does not exist in the Schema.org vocabulary."
      }
    ]
  },
  {
    schemaGraph: {
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
                    type: "listItem",
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
    expectedResult: [
      {
        type: "error",
        path: "[0].itemListElement[0]",
        message: "`listItem` is not a valid type for the property `itemListElement`."
      },
      {
        type: "error",
        path: "[0].itemListElement[0]",
        message: "The type `listItem` does not exist in the Schema.org vocabulary."
      }
    ]
  },
  {
    schemaGraph: {
      roots: [
        {
          type: "BreadcrumbList",
          sourceFormat: "jsonld",
          location: {
            jsonLDPath: "[0]"
          },
          properties: new Map([
            [
              "listItemElement",
              [
                {
                  kind: "node",
                  linkLocation: {
                    jsonLDPath: "[0].listItemElement"
                  },
                  node: {
                    type: "ListItem",
                    sourceFormat: "jsonld",
                    location: {
                      jsonLDPath: "[0].listItemElement[0]"
                    },
                    properties: new Map([
                      [
                        "position",
                        [
                          {
                            kind: "literal",
                            location: {
                              jsonLDPath: "[0].listItemElement[0].position[0]"
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
                              jsonLDPath: "[0].listItemElement[0].item"
                            },
                            node: {
                              type: "Thing",
                              id: "https://example.com/product-1.html",
                              sourceFormat: "jsonld",
                              location: {
                                jsonLDPath: "[0].listItemElement[0].item[0]"
                              },
                              properties: new Map([
                                [
                                  "name",
                                  [
                                    {
                                      kind: "literal",
                                      location: {
                                        jsonLDPath: "[0].listItemElement[0].item[0].name[0]"
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
                    jsonLDPath: "[0].listItemElement"
                  },
                  node: {
                    type: "ListItem",
                    sourceFormat: "jsonld",
                    location: {
                      jsonLDPath: "[0].listItemElement[1]"
                    },
                    properties: new Map([
                      [
                        "position",
                        [
                          {
                            kind: "literal",
                            location: {
                              jsonLDPath: "[0].listItemElement[1].position[0]"
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
                              jsonLDPath: "[0].listItemElement[1].item"
                            },
                            node: {
                              type: "Thing",
                              id: "https://example.com/product-2.html",
                              sourceFormat: "jsonld",
                              location: {
                                jsonLDPath: "[0].listItemElement[1].item[0]"
                              },
                              properties: new Map([
                                [
                                  "name",
                                  [
                                    {
                                      kind: "literal",
                                      location: {
                                        jsonLDPath: "[0].listItemElement[1].item[0].name[0]"
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
                    jsonLDPath: "[0].listItemElement"
                  },
                  node: {
                    type: "ListItem",
                    sourceFormat: "jsonld",
                    location: {
                      jsonLDPath: "[0].listItemElement[2]"
                    },
                    properties: new Map([
                      [
                        "position",
                        [
                          {
                            kind: "literal",
                            location: {
                              jsonLDPath: "[0].listItemElement[2].position[0]"
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
                              jsonLDPath: "[0].listItemElement[2].item"
                            },
                            node: {
                              type: "Thing",
                              id: "https://example.com/product-3.html",
                              sourceFormat: "jsonld",
                              location: {
                                jsonLDPath: "[0].listItemElement[2].item[0]"
                              },
                              properties: new Map([
                                [
                                  "name",
                                  [
                                    {
                                      kind: "literal",
                                      location: {
                                        jsonLDPath: "[0].listItemElement[2].item[0].name[0]"
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
    expectedResult: [
      {
        type: "error",
        path: "[0].listItemElement",
        message: "The property `listItemElement` does not exist in the Schema.org vocabulary."
      },
      {
        type: "error",
        path: "[0].listItemElement",
        message: "The property `listItemElement` does not exist in the Schema.org vocabulary."
      },
      {
        type: "error",
        path: "[0].listItemElement",
        message: "The property `listItemElement` does not exist in the Schema.org vocabulary."
      }
    ]
  },
  {
    schemaGraph: {
      roots: [
        {
          type: "Code",
          sourceFormat: "jsonld",
          location: { jsonLDPath: "[0]" },
          properties: new Map([
            [
              "creator",
              [
                {
                  kind: "node",
                  linkLocation: {
                    jsonLDPath: "[0].creator"
                  },
                  node: {
                    type: "Person",
                    sourceFormat: "jsonld",
                    location: { jsonLDPath: "[0].creator[0]" },
                    properties: new Map([
                      [
                        "name",
                        [
                          {
                            kind: "literal",
                            location: { jsonLDPath: "[0].creator[0].name[0]" },
                            value: "webdevbynight"
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
    expectedResult: [
      {
        type: "error",
        path: "[0]",
        message: "The type `Code` has been superseded: use `SoftwareSourceCode` instead."
      }
    ]
  },
  {
    schemaGraph: {
      roots: [
        {
          type: "SoftwareSourceCode",
          sourceFormat: "jsonld",
          location: { jsonLDPath: "[0]" },
          properties: new Map([
            [
              "runtime",
              [
                {
                  kind: "literal",
                  location: {
                    jsonLDPath: "[0].runtime[0]"
                  },
                  value: "Node.js 24"
                }
              ]
            ]
          ])
        }
      ]
    },
    expectedResult: [
      {
        type: "error",
        path: "[0].runtime[0]",
        message: "The property `runtime` has been superseded: use `runtimePlatform` instead."
      }
    ]
  },
  {
    schemaGraph: {
      roots: [
        {
          type: "Book",
          sourceFormat: "jsonld",
          location: { jsonLDPath: "[0]" },
          properties: new Map([
            [
              "name",
              [
                {
                  kind: "literal",
                  location: { jsonLDPath: "[0].name[0]" },
                  value: "Clean Code: A Handbook of Agile Software Craftsmanship"
                }
              ]
            ],
            [
              "author",
              [
                {
                  kind: "literal",
                  location: { jsonLDPath: "[0].author[0]" },
                  value: "Robert C. Martin"
                }
              ]
            ],
            [
              "isbn",
              [
                {
                  kind: "node",
                  linkLocation: { jsonLDPath: "[0].isbn[0]" },
                  node: {
                    type: "Person",
                    sourceFormat: "jsonld",
                    location: { jsonLDPath: "[0].isbn[0]" },
                    properties: new Map([
                      [
                        "name",
                        [
                          {
                            kind: "literal",
                            location: { jsonLDPath: "[0].isbn[0].name[0]" },
                            value: "Robert C. Martin"
                          }
                        ]
                      ]
                    ])
                  }
                }
              ]
            ],
            [
              "abridged",
              [
                {
                  kind: "literal",
                  location: { jsonLDPath: "[0].abridged[0]" },
                  value: "false"
                }
              ]
            ]
          ])
        }
      ]
    },
    expectedResult: [
      {
        type: "error",
        path: "[0].isbn[0]",
        message: "`Person` is not a valid type for the property `isbn`."
      }
    ]
  }
];
