import type { SchemaGraph } from "../../../src/types.js";

export const mockedHTMLFiles: { input: string; expectedTree: SchemaGraph }[] = [
  {
    input: "",
    expectedTree: {
      roots: []
    }
  },
  {
    input: `<!DOCTYPE html>
<html lang="en">
<head>
<title>Some document without Schema.org vocabulary</title>
</head>
<body></body>
</html>`,
    expectedTree: {
      roots: []
    }
  },
  {
    input: `<!DOCTYPE html>
<html lang="en">
<head>
<title>Some document without Schema.org vocabulary</title>
<script type="application/ld+json">
{
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
}
</script>
</head>
<body></body>
</html>`,
    expectedTree: {
      roots: []
    }
  },
  {
    input: `<!DOCTYPE html>
<html lang="en">
<head>
<title>Some document with commented script element</title>
<!--<script type="application/ld+json">
{
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
}
</script>-->
</head>
<body></body>
</html>`,
    expectedTree: {
      roots: []
    }
  },
  {
    input: `<!DOCTYPE html>
<html lang="en">
<head>
<title>Some document with JSON-LD data only</title>
<script type="application/ld+json">
{
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
}
</script>
</head>
<body></body>
</html>`,
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
  },
  {
    input: `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Some document with microdata only and repeated itemprop values</title>
  </head>
  <body>
    <main id="content">
      <p id="breadcrumb" itemscope itemtype="https://schema.org/Product">
        <a href="category-1.html" itemprop="category" content="Category 1">Category 1 (non-selected for schema graph)</a>
        <a href="category-2.html" itemprop="category" content="Category 2">Category 2 (non-selected for schema graph)</a>
        <a href="category-3.html" itemprop="category" content="Category 3">Category 3 (non-selected for schema graph)</a>
      </p>
    </main>
  </body>
</html>`,
    expectedTree: {
      roots: [
        {
          type: "Product",
          sourceFormat: "microdata",
          location: {
            startLine: 8,
            startColumn: 36
          },
          properties: new Map([
            [
              "category",
              [
                {
                  kind: "literal",
                  location: {
                    startLine: 9,
                    startColumn: 35
                  },
                  value: "Category 1"
                },
                {
                  kind: "literal",
                  location: {
                    startLine: 10,
                    startColumn: 35
                  },
                  value: "Category 2"
                },
                {
                  kind: "literal",
                  location: {
                    startLine: 11,
                    startColumn: 35
                  },
                  value: "Category 3"
                }
              ]
            ]
          ])
        }
      ]
    }
  },
  {
    input: `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Some document with microdata only and repeated itemprop values</title>
  </head>
  <body>
    <main id="content">
      <p id="breadcrumb" itemscope itemtype="https://schema.org/Product">
        <a href="category-1.html" itemprop="category">Category 1</a>
        <a href="category-2.html" itemprop="category">Category 2</a>
        <a href="category-3.html" itemprop="category">Category 3</a>
      </p>
    </main>
  </body>
</html>`,
    expectedTree: {
      roots: [
        {
          type: "Product",
          sourceFormat: "microdata",
          location: {
            startLine: 8,
            startColumn: 36
          },
          properties: new Map([
            [
              "category",
              [
                {
                  kind: "literal",
                  location: {
                    startLine: 9,
                    startColumn: 35
                  },
                  value: "Category 1"
                },
                {
                  kind: "literal",
                  location: {
                    startLine: 10,
                    startColumn: 35
                  },
                  value: "Category 2"
                },
                {
                  kind: "literal",
                  location: {
                    startLine: 11,
                    startColumn: 35
                  },
                  value: "Category 3"
                }
              ]
            ]
          ])
        }
      ]
    }
  },
  {
    input: `<!DOCTYPE html>
<html lang="en">
<head>
<title>Some document with microdata only and repeated itemprop values</title>
</head>
<body>
  <main id="content" itemscope itemtype="https://schema.org/Product">
    <nav id="breadcrumb">
      <ul>
        <li><a href="category-1.html" itemprop="category" content="Category 1">Category 1 (non-selected for schema graph)</a></li>
        <li><a href="category-2.html" itemprop="category" content="Category 2">Category 2 (non-selected for schema graph)</a></li>
        <li><a href="category-3.html" itemprop="category" content="Category 3">Category 3 (non-selected for schema graph)</a></li>
      </ul>
    </nav>
  </main>
</body>
</html>`,
    expectedTree: {
      roots: [
        {
          type: "Product",
          sourceFormat: "microdata",
          location: {
            startLine: 7,
            startColumn: 32
          },
          properties: new Map([
            [
              "category",
              [
                {
                  kind: "literal",
                  location: {
                    startLine: 10,
                    startColumn: 39
                  },
                  value: "Category 1"
                },
                {
                  kind: "literal",
                  location: {
                    startLine: 11,
                    startColumn: 39
                  },
                  value: "Category 2"
                },
                {
                  kind: "literal",
                  location: {
                    startLine: 12,
                    startColumn: 39
                  },
                  value: "Category 3"
                }
              ]
            ]
          ])
        }
      ]
    }
  },
  {
    input: `<!DOCTYPE html>
<html lang="en">
<head>
<title>Some document with microdata only</title>
</head>
<body>
  <nav id="breadcrumb">
    <ul itemscope itemtype="https://schema.org/BreadcrumbList">
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a href="product-1.html" itemprop="item"><span itemprop="name">Product 1</span></a>
        <meta itemprop="position" content="1">
      </li>
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a href="product-2.html" itemprop="item"><span itemprop="name">Product 2</span></a>
        <meta itemprop="position" content="2">
      </li>
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a href="product-3.html" itemprop="item"><span itemprop="name">Product 3</span></a>
        <meta itemprop="position" content="3">
      </li>
    </ul>
  </nav>
</body>
</html>`,
    expectedTree: {
      roots: [
        {
          type: "BreadcrumbList",
          sourceFormat: "microdata",
          location: {
            startLine: 8,
            startColumn: 19
          },
          properties: new Map([
            [
              "itemListElement",
              [
                {
                  kind: "node",
                  linkLocation: {
                    startLine: 9,
                    startColumn: 11
                  },
                  node: {
                    type: "ListItem",
                    sourceFormat: "microdata",
                    location: {
                      startLine: 9,
                      startColumn: 48
                    },
                    properties: new Map([
                      [
                        "item",
                        [
                          {
                            kind: "node",
                            linkLocation: {
                              startLine: 10,
                              startColumn: 34
                            },
                            node: {
                              type: "Thing",
                              id: "https://example.com/product-1.html",
                              sourceFormat: "microdata",
                              location: {
                                startLine: 10,
                                startColumn: 34
                              },
                              properties: new Map([
                                [
                                  "name",
                                  [
                                    {
                                      kind: "literal",
                                      location: {
                                        startLine: 10,
                                        startColumn: 56
                                      },
                                      value: "Product 1"
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
                              startLine: 11,
                              startColumn: 15
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
                    startLine: 13,
                    startColumn: 11
                  },
                  node: {
                    type: "ListItem",
                    sourceFormat: "microdata",
                    location: {
                      startLine: 13,
                      startColumn: 48
                    },
                    properties: new Map([
                      [
                        "item",
                        [
                          {
                            kind: "node",
                            linkLocation: {
                              startLine: 14,
                              startColumn: 34
                            },
                            node: {
                              type: "Thing",
                              id: "https://example.com/product-2.html",
                              sourceFormat: "microdata",
                              location: {
                                startLine: 14,
                                startColumn: 34
                              },
                              properties: new Map([
                                [
                                  "name",
                                  [
                                    {
                                      kind: "literal",
                                      location: {
                                        startLine: 14,
                                        startColumn: 56
                                      },
                                      value: "Product 2"
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
                              startLine: 15,
                              startColumn: 15
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
                    startLine: 17,
                    startColumn: 11
                  },
                  node: {
                    type: "ListItem",
                    sourceFormat: "microdata",
                    location: {
                      startLine: 17,
                      startColumn: 48
                    },
                    properties: new Map([
                      [
                        "item",
                        [
                          {
                            kind: "node",
                            linkLocation: {
                              startLine: 18,
                              startColumn: 34
                            },
                            node: {
                              type: "Thing",
                              id: "https://example.com/product-3.html",
                              sourceFormat: "microdata",
                              location: {
                                startLine: 18,
                                startColumn: 34
                              },
                              properties: new Map([
                                [
                                  "name",
                                  [
                                    {
                                      kind: "literal",
                                      location: {
                                        startLine: 18,
                                        startColumn: 56
                                      },
                                      value: "Product 3"
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
                              startLine: 19,
                              startColumn: 15
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
  },
  {
    input: `<!DOCTYPE html>
<html lang="en">
<head>
<title>Some document with microdata only</title>
</head>
<body>
  <main id="content" itemscope itemtype="https://schema.org/Product">
    <h1 itemprop="name">My product</h1>
    <div itemprop="description">
      <p>Some description.</p>
      <p>Another description.</p>
    </div>
  </main>
</body>
</html>`,
    expectedTree: {
      roots: [
        {
          type: "Product",
          sourceFormat: "microdata",
          location: {
            startLine: 7,
            startColumn: 32
          },
          properties: new Map([
            [
              "name",
              [
                {
                  kind: "literal",
                  location: {
                    startLine: 8,
                    startColumn: 9
                  },
                  value: "My product"
                }
              ]
            ],
            [
              "description",
              [
                {
                  kind: "literal",
                  location: {
                    startLine: 9,
                    startColumn: 10
                  },
                  value: "Some description. Another description."
                }
              ]
            ]
          ])
        }
      ]
    }
  }
];
