import type { SchemaGraph, ValidationResult } from "../../../src/types.js";

export const mockedValidSchemaGraphsWithWarnings: {
  schemaGraph: SchemaGraph;
  expectedResult: ValidationResult[];
}[] = [
  {
    schemaGraph: {
      roots: [
        {
          type: "AnalysisNewsArticle",
          sourceFormat: "jsonld",
          location: { jsonLDPath: "[0]" },
          properties: new Map([
            [
              "dateline",
              [
                {
                  kind: "literal",
                  location: { jsonLDPath: "[0].dateline[0]" },
                  value: "Paris, France"
                }
              ]
            ]
          ])
        }
      ]
    },
    expectedResult: [
      {
        type: "warning",
        path: "[0]",
        message:
          "The type `AnalysisNewsArticle` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution."
      }
    ]
  },
  {
    schemaGraph: {
      roots: [
        {
          type: "Organization",
          sourceFormat: "jsonld",
          location: { jsonLDPath: "[0]" },
          properties: new Map([
            [
              "name",
              [
                {
                  kind: "literal",
                  location: { jsonLDPath: "[0].name[0]" },
                  value: "The Organisation"
                }
              ]
            ],
            [
              "diversityPolicy",
              [
                {
                  kind: "literal",
                  location: { jsonLDPath: "[0].diversityPolicy[0]" },
                  value: "https://example.com/diversity-policy"
                }
              ]
            ]
          ])
        }
      ]
    },
    expectedResult: [
      {
        type: "warning",
        path: "[0].diversityPolicy[0]",
        message:
          "The property `diversityPolicy` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution."
      }
    ]
  },
  {
    schemaGraph: {
      roots: [
        {
          type: "AnalysisNewsArticle",
          sourceFormat: "microdata",
          location: {
            startLine: 8,
            startColumn: 24
          },
          properties: new Map([
            [
              "dateline",
              [
                {
                  kind: "literal",
                  location: { startLine: 9, startColumn: 10 },
                  value: "Paris, France"
                }
              ]
            ]
          ])
        }
      ]
    },
    expectedResult: [
      {
        type: "warning",
        location: {
          line: 8,
          column: 24
        },
        message:
          "The type `AnalysisNewsArticle` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution."
      }
    ]
  },
  {
    schemaGraph: {
      roots: [
        {
          type: "Organization",
          sourceFormat: "microdata",
          location: {
            startLine: 8,
            startColumn: 34
          },
          properties: new Map([
            [
              "name",
              [
                {
                  kind: "literal",
                  location: { startLine: 9, startColumn: 11 },
                  value: "The Organisation"
                }
              ]
            ],
            [
              "diversityPolicy",
              [
                {
                  kind: "literal",
                  location: { startLine: 10, startColumn: 38 },
                  value: "https://example.com/diversity-policy"
                }
              ]
            ]
          ])
        }
      ]
    },
    expectedResult: [
      {
        type: "warning",
        location: {
          line: 10,
          column: 38
        },
        message:
          "The property `diversityPolicy` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution."
      }
    ]
  }
];
