import type { ValidationReporting } from "../types.js";

import { WORKSPACE_NAME } from "../constants.js";

/**
 * Displays the reporting in the console.
 * @param reporting - The reporting to display.
 * @param timestamp - The timestamp of the reporting.
 */
export const displayReporting = (reporting: ValidationReporting, timestamp: number): void => {
  const { resource, status, result } = reporting;
  const statusIcon = status === "pass" ? "\u2714" : "\u2718";
  const statusColour = status === "pass" ? 32 : 31;
  const dateTime = Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC"
  }).format(timestamp);
  console.group(`[${dateTime}]`, `[${WORKSPACE_NAME}]`, resource);
  if (status === "fail") {
    console.info(
      `\x1b[1;${statusColour}m${statusIcon} ${status}\x1b[0m`,
      `(messages: ${reporting.result.length})`
    );
  } else {
    console.info(`\x1b[1;${statusColour}m${statusIcon} ${status}\x1b[0m`);
  }
  if (result) {
    for (const reportingMessage of result) {
      const { type, path, message } = reportingMessage;
      if (type === "error") {
        console.error("\x1b[1;31mError:\x1b[0m", message);
      } else console.warn("\x1b[1;33mWarning:\x1b[0m", message);
      console.info(path);
    }
  }
  console.groupEnd();
};
