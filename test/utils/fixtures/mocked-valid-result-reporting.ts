import type { ValidationReporting, ValidationResult } from "../../../src/types.js";

export const mockedValidResultReporting: {
  resource: string;
  result: ValidationResult[];
  reporting: ValidationReporting;
  logs?: {
    message: string;
    path: string;
  }[];
}[] = [
  {
    resource: "data[0]",
    result: [],
    reporting: {
      resource: "data[0]",
      status: "pass"
    }
  },
  {
    resource: "data[0]",
    result: [
      {
        type: "warning",
        path: "[0]",
        message:
          "The type `AnalysisNewsArticle` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution."
      }
    ],
    reporting: {
      resource: "data[0]",
      status: "pass",
      result: [
        {
          type: "warning",
          path: "[0]",
          message:
            "The type `AnalysisNewsArticle` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution."
        }
      ]
    },
    logs: [
      {
        message:
          "The type `AnalysisNewsArticle` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution.",
        path: "[0]"
      }
    ]
  },
  {
    resource: "data[0]",
    result: [
      {
        type: "warning",
        path: "[0].diversityPolicy[0]",
        message:
          "The property `diversityPolicy` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution."
      }
    ],
    reporting: {
      resource: "data[0]",
      status: "pass",
      result: [
        {
          type: "warning",
          path: "[0].diversityPolicy[0]",
          message:
            "The property `diversityPolicy` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution."
        }
      ]
    },
    logs: [
      {
        message:
          "The property `diversityPolicy` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution.",
        path: "[0].diversityPolicy[0]"
      }
    ]
  }
];
