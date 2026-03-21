export const mockedInvalidJSONLDData = [
  "",
  `

`,
  `{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Page name",
  "description": "Some description"
  "publisher":
  {
    "@type": "Organization",
    "name": "The Organisation",
    "url": "https://example.com/"
  }
}`,
  `/*{
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
}*/`,
  `{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement":
  [
    {
      "@type": "ListItem",
      "position": 1,
      "item":
      {
        "@id": "https://example.com/product-1.html"/*,
        "name": "Product 1"*/
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item":
      {
        "@id": "https://example.com/product-2.html"/*,
        "name": "Product 2"*/
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item":
      {
        "@id": "https://example.com/product-3.html"/*,
        "name": "Product 3"*/
      }
    }
  ]
}`,
  `{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement":
  [
    {
      "@type": "ListItem",
      "position": 1,
      "item":
      {
        "@id": "https://example.com/product-1.html"
        // "name": "Product 1"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item":
      {
        "@id": "https://example.com/product-2.html"
        // "name": "Product 2"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item":
      {
        "@id": "https://example.com/product-3.html"
        // "name": "Product 3"
      }
    }
  ]
}`
];
