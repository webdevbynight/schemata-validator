import type { SchemaGraph, ValidationResult } from "../../../src/types.js";

export const mockedValidSchemaGraphsWithWarnings: {
  schemaGraph: SchemaGraph;
  expectedResult: ValidationResult[];
}[] = [
  {
    schemaGraph: {
      roots: [
        {
          type: "ConferenceEvent",
          sourceFormat: "jsonld",
          location: { jsonLDPath: "[0]" },
          properties: new Map([
            [
              "name",
              [
                {
                  kind: "literal",
                  location: { jsonLDPath: "[0].name[0]" },
                  value: "Web Dev Event"
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
          "The type `ConferenceEvent` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution."
      }
    ]
  },
  {
    schemaGraph: {
      roots: [
        {
          type: "Product",
          sourceFormat: "jsonld",
          location: { jsonLDPath: "[0]" },
          properties: new Map([
            [
              "name",
              [
                {
                  kind: "literal",
                  location: { jsonLDPath: "[0].name[0]" },
                  value: "Wine"
                }
              ]
            ],
            [
              "hasAdultConsideration",
              [
                {
                  kind: "literal",
                  location: { jsonLDPath: "[0].hasAdultConsideration[0]" },
                  value: "AlcoholConsideration"
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
        path: "[0].hasAdultConsideration[0]",
        message:
          "The property `hasAdultConsideration` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution."
      }
    ]
  },
  {
    schemaGraph: {
      roots: [
        {
          type: "ConferenceEvent",
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
                  location: { startLine: 9, startColumn: 10 },
                  value: "Web Dev Event"
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
          "The type `ConferenceEvent` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution."
      }
    ]
  },
  {
    schemaGraph: {
      roots: [
        {
          type: "Product",
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
                  value: "Wine"
                }
              ]
            ],
            [
              "hasAdultConsideration",
              [
                {
                  kind: "literal",
                  location: { startLine: 10, startColumn: 38 },
                  value: "AlcoholConsideration"
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
          "The property `hasAdultConsideration` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution."
      }
    ]
  }
];
