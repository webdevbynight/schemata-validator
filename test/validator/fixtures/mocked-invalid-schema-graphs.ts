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
  },
  {
    schemaGraph: {
      roots: [
        {
          type: "FilAriane",
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
    },
    expectedResult: [
      {
        type: "error",
        location: {
          line: 8,
          column: 36
        },
        message: "The type `FilAriane` does not exist in the Schema.org vocabulary."
      }
    ]
  },
  {
    schemaGraph: {
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
                    type: "listItem",
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
    },
    expectedResult: [
      {
        type: "error",
        location: {
          line: 10,
          column: 13
        },
        message: "`listItem` is not a valid type for the property `itemListElement`."
      },
      {
        type: "error",
        location: {
          line: 10,
          column: 50
        },
        message: "The type `listItem` does not exist in the Schema.org vocabulary."
      }
    ]
  },
  {
    schemaGraph: {
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
              "listItemElement",
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
    },
    expectedResult: [
      {
        type: "error",
        location: {
          line: 10,
          column: 13
        },
        message: "The property `listItemElement` does not exist in the Schema.org vocabulary."
      },
      {
        type: "error",
        location: {
          line: 14,
          column: 13
        },
        message: "The property `listItemElement` does not exist in the Schema.org vocabulary."
      },
      {
        type: "error",
        location: {
          line: 18,
          column: 13
        },
        message: "The property `listItemElement` does not exist in the Schema.org vocabulary."
      }
    ]
  },
  {
    schemaGraph: {
      roots: [
        {
          type: "Code",
          sourceFormat: "microdata",
          location: {
            startLine: 8,
            startColumn: 18
          },
          properties: new Map([
            [
              "creator",
              [
                {
                  kind: "node",
                  linkLocation: {
                    startLine: 9,
                    startColumn: 22
                  },
                  node: {
                    type: "Person",
                    sourceFormat: "microdata",
                    location: {
                      startLine: 9,
                      startColumn: 51
                    },
                    properties: new Map([
                      [
                        "name",
                        [
                          {
                            kind: "literal",
                            location: {
                              startLine: 9,
                              startColumn: 94
                            },
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
        location: {
          line: 8,
          column: 18
        },
        message: "The type `Code` has been superseded: use `SoftwareSourceCode` instead."
      }
    ]
  },
  {
    schemaGraph: {
      roots: [
        {
          type: "SoftwareSourceCode",
          sourceFormat: "microdata",
          location: {
            startLine: 8,
            startColumn: 18
          },
          properties: new Map([
            [
              "runtime",
              [
                {
                  kind: "literal",
                  location: {
                    startLine: 9,
                    startColumn: 34
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
        location: {
          line: 9,
          column: 34
        },
        message: "The property `runtime` has been superseded: use `runtimePlatform` instead."
      }
    ]
  },
  {
    schemaGraph: {
      roots: [
        {
          type: "Book",
          sourceFormat: "microdata",
          location: {
            startLine: 8,
            startColumn: 24
          },
          properties: new Map([
            [
              "name",
              [
                {
                  kind: "literal",
                  location: {
                    startLine: 9,
                    startColumn: 11
                  },
                  value: "Clean Code: A Handbook of Agile Software Craftsmanship"
                }
              ]
            ],
            [
              "author",
              [
                {
                  kind: "literal",
                  location: {
                    startLine: 12,
                    startColumn: 13
                  },
                  value: "Robert C. Martin"
                }
              ]
            ],
            [
              "isbn",
              [
                {
                  kind: "node",
                  linkLocation: {
                    startLine: 14,
                    startColumn: 13
                  },
                  node: {
                    type: "Person",
                    sourceFormat: "microdata",
                    location: {
                      startLine: 14,
                      startColumn: 39
                    },
                    properties: new Map([
                      [
                        "name",
                        [
                          {
                            kind: "literal",
                            location: {
                              startLine: 14,
                              startColumn: 82
                            },
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
                  location: {
                    startLine: 16,
                    startColumn: 13
                  },
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
        location: {
          line: 14,
          column: 13
        },
        message: "`Person` is not a valid type for the property `isbn`."
      }
    ]
  }
];
