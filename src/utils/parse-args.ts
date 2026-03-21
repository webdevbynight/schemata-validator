import type { SchemataValidatorOptions } from "../types.js";

import { AVAILABLE_CLI_FLAGS } from "../constants.js";

/**
 * Parses the command-line arguments into an object of options.
 * @param args - The command-line arguments to parse.
 * @return An object of options.
 */
export const parseArgs = (args: string[]): SchemataValidatorOptions => {
  if (args.length) {
    const options: SchemataValidatorOptions = {};
    const flagMap = Object.entries(AVAILABLE_CLI_FLAGS)
      .filter(([key]) => key !== "version" && key !== "help")
      .reduce((map, [key, { flag, alias }]) => {
        if (flag) map.set(flag, key as keyof SchemataValidatorOptions);
        if (alias) map.set(alias, key as keyof SchemataValidatorOptions);
        return map;
      }, new Map<string, keyof SchemataValidatorOptions>());
    let currentKey: keyof SchemataValidatorOptions | null = null;
    for (const arg of args) {
      if (arg.startsWith("-")) {
        const isValidKey = flagMap.has(arg);
        if (isValidKey) {
          currentKey = flagMap.get(arg) ?? null;
          if (currentKey) {
            if (currentKey === "dryRun") options[currentKey] = true;
            else options[currentKey] = [];
          }
        }
      } else {
        if (currentKey && currentKey in options) {
          if (currentKey !== "dryRun") {
            const values = options[currentKey] ?? [];
            values.push(arg);
            options[currentKey] = values;
          }
        }
      }
    }
    return options;
  }
  return {};
};
