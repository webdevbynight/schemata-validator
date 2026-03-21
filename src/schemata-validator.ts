import type { SchemataValidatorOptions, ValidationReporting } from "./types.js";

import { HTMLParser } from "./format-parsers/html-parser.js";
import { JSONLDParser } from "./format-parsers/json-ld-parser.js";
import { displayReporting } from "./utils/display-reporting.js";
import { dryRunNotice } from "./utils/dry-run-notice.js";
import { getFileContent } from "./utils/get-file-content.js";
import { getFilesToValidate } from "./utils/get-files-to-validate.js";
import { prepareReporting } from "./utils/prepare-reporting.js";
import { SchemaGraphValidator } from "./validator/schema-graph-validator.js";

export class SchemataValidator {
  private readonly options: SchemataValidatorOptions = {};

  /**
   * Constructs an instance of the SchemataValidator class.
   * @param [options] - The options to use.
   */
  constructor(options?: SchemataValidatorOptions) {
    this.options = options ?? {};
  }

  /**
   * Validates the Schema.org vocabulary.
   * @return The validation reporting if not on dry-run mode, `undefined` otherwise.
   */
  async validate(): Promise<ValidationReporting[] | undefined> {
    try {
      const { dryRun } = this.options;
      if (dryRun) dryRunNotice();
      else {
        const { data } = this.options;
        const contents =
          data?.map((datum, index) => ({
            type: "data",
            resource: `data[${index}]`,
            source: datum
          })) ?? [];
        if (!data) {
          const filesToValidate = await getFilesToValidate(this.options);
          for (const file of filesToValidate) {
            const content = getFileContent(file);
            if (content) contents.push({ type: "file", resource: file, source: content });
          }
        }
        const reporting: ValidationReporting[] = [];
        for (const content of contents) {
          const { type, resource, source } = content;
          const contentSchemaGraph =
            type === "file" ? new HTMLParser(source).parse() : new JSONLDParser(source).parse();
          const schemaGraphValidator = new SchemaGraphValidator(contentSchemaGraph);
          const result = schemaGraphValidator.validate();
          reporting.push(prepareReporting(resource, result));
        }
        return reporting;
      }
    } catch (error) {
      console.error(
        "\x1b[1;31m%s %s\x1b[0m",
        "Failed to validate the Schema.org vocabulary.",
        error instanceof Error ? error.message : String(error)
      );
    }
  }

  /**
   * Logs the reporting in the console.
   * @param reporting - The reporting to log.
   */
  log(reporting: ValidationReporting[] | undefined): void {
    if (reporting) {
      for (const reportingItem of reporting) {
        displayReporting(reportingItem, Date.now());
      }
    }
  }
}
