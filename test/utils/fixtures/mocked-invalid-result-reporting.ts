import type { ValidationReporting, ValidationResult } from "../../../src/types.js";

export const mockedInvalidResultReporting: {
  resource: string;
  result: ValidationResult[];
  reporting: ValidationReporting;
  logs: {
    level: "Error" | "Warning";
    message: string;
    path?: string;
    location?: string;
  }[];
}[] = [
  {
    resource: "data[0]",
    result: [
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
    ],
    reporting: {
      resource: "data[0]",
      status: "fail",
      result: [
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
    logs: [
      {
        level: "Error",
        message: "The property `listItemElement` does not exist in the Schema.org vocabulary.",
        path: "[0].listItemElement"
      },
      {
        level: "Error",
        message: "The property `listItemElement` does not exist in the Schema.org vocabulary.",
        path: "[0].listItemElement"
      },
      {
        level: "Error",
        message: "The property `listItemElement` does not exist in the Schema.org vocabulary.",
        path: "[0].listItemElement"
      }
    ]
  },
  {
    resource: "data[0]",
    result: [
      {
        type: "error",
        path: "[0]",
        message: "The type `Code` has been superseded: use `SoftwareSourceCode` instead."
      }
    ],
    reporting: {
      resource: "data[0]",
      status: "fail",
      result: [
        {
          type: "error",
          path: "[0]",
          message: "The type `Code` has been superseded: use `SoftwareSourceCode` instead."
        }
      ]
    },
    logs: [
      {
        level: "Error",
        message: "The type `Code` has been superseded: use `SoftwareSourceCode` instead.",
        path: "[0]"
      }
    ]
  },
  {
    resource: "invalid.html",
    result: [
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
    ],
    reporting: {
      resource: "invalid.html",
      status: "fail",
      result: [
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
    logs: [
      {
        level: "Error",
        message: "The property `listItemElement` does not exist in the Schema.org vocabulary.",
        location: "line 10, column 13"
      },
      {
        level: "Error",
        message: "The property `listItemElement` does not exist in the Schema.org vocabulary.",
        location: "line 14, column 13"
      },
      {
        level: "Error",
        message: "The property `listItemElement` does not exist in the Schema.org vocabulary.",
        location: "line 18, column 13"
      }
    ]
  },
  {
    resource: "invalid.html",
    result: [
      {
        type: "error",
        location: {
          line: 8,
          column: 18
        },
        message: "The type `Code` has been superseded: use `SoftwareSourceCode` instead."
      }
    ],
    reporting: {
      resource: "invalid.html",
      status: "fail",
      result: [
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
    logs: [
      {
        level: "Error",
        message: "The type `Code` has been superseded: use `SoftwareSourceCode` instead.",
        location: "line 8, column 18"
      }
    ]
  }
];
