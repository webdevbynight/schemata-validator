export const mockedHtmlFilesWithInvalidJSONLDData = [
  `<!DOCTYPE html>
<html lang="en">
<head>
<title>Some document without Schema.org vocabulary</title>
<script type="application/ld+json">


</script>
</head>
<body></body>
</html>`,
  `<!DOCTYPE html>
<html lang="en">
<head>
<title>Some document with commented JSON-LD data only</title>
<script type="application/ld+json">
/*{
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
}*/
</script>
</head>
<body></body>
</html>`,
  `<!DOCTYPE html>
<html lang="en">
<head>
<title>Some document with partially commented JSON-LD data only</title>
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
}
</script>
</head>
<body></body>
</html>`,
  `<!DOCTYPE html>
<html lang="en">
<head>
<title>Some document with partially commented JSON-LD data only</title>
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
}
</script>
</head>
<body></body>
</html>`
];
