import type { SchemataValidatorOptions } from "../../../src/types.js";

export const mockedArgs: { args: string[]; expected: SchemataValidatorOptions }[] = [
  {
    args: [],
    expected: {}
  },
  {
    args: ["--files", "docs/index.html"],
    expected: { files: ["docs/index.html"] }
  },
  {
    args: ["-f", "docs/index.html"],
    expected: { files: ["docs/index.html"] }
  },
  {
    args: ["--paths", "docs", "--exclude", "build", "tmp"],
    expected: { paths: ["docs"], exclude: ["build", "tmp"] }
  },
  {
    args: ["-p", "docs", "--exclude", "build", "tmp"],
    expected: { paths: ["docs"], exclude: ["build", "tmp"] }
  },
  {
    args: ["--dry-run"],
    expected: { dryRun: true }
  },
  {
    args: ["-d"],
    expected: { dryRun: true }
  }
];
