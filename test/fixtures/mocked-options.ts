import type { SchemataValidatorOptions } from "../../src/types.js";

export const mockedOptions: SchemataValidatorOptions[] = [
  {},
  {
    paths: ["**/*.html"]
  },
  {
    paths: ["**/*.html"],
    dryRun: true
  },
  {
    dryRun: true
  }
];
