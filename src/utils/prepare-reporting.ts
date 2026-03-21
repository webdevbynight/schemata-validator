import type { ValidationReporting, ValidationResult } from "../types.js";

import { cwd } from "node:process";

/**
 * Prepares the reporting for the given file.
 * @param resource - The resource requested for validation.
 * @param result - The result of the validation.
 * @return The prepared reporting.
 */
export const prepareReporting = (
  resource: string,
  result: ValidationResult[]
): ValidationReporting => {
  const reporting: ValidationReporting = {
    status: "pass",
    resource: resource.endsWith(".html") ? resource.replace(`${cwd()}/`, "") : resource
  };
  if (result.length) {
    reporting.result = result;
    const hasErrorMessages = result.some(resultItem => resultItem.type === "error");
    if (hasErrorMessages) Object.assign(reporting, { status: "fail" });
    return reporting;
  }
  return reporting;
};
