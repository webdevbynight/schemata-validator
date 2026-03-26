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
  const reportedResource = resource.match(/\.html?$/)
    ? resource.replace(`${cwd()}/`, "")
    : resource;
  if (result.length) {
    const hasErrorMessages = result.some(resultItem => resultItem.type === "error");
    return {
      status: hasErrorMessages ? "fail" : "pass",
      resource: reportedResource,
      result
    };
  }
  return {
    status: "pass",
    resource: reportedResource
  };
};
