export const TAB = " ".repeat(2);
export const WORKSPACE_NAME = "schemata-validator";
export const AVAILABLE_CLI_FLAGS = {
  files: {
    cliFlagName: "files",
    flag: "--files",
    alias: "-f",
    description: "Files to validate",
    type: "array"
  },
  paths: {
    cliFlagName: "paths",
    flag: "--paths",
    alias: "-p",
    description: "Folders to include for validation",
    type: "array"
  },
  exclude: {
    cliFlagName: "exclude",
    flag: "--exclude",
    alias: "-e",
    description: "Paths to skip",
    type: "array"
  },
  dryRun: {
    cliFlagName: "dryRun",
    flag: "--dry-run",
    alias: "-d",
    description: "Bypass validation",
    type: "boolean"
  },
  version: {
    cliFlagName: "version",
    flag: "--version",
    alias: "-v",
    description: "Show version number",
    type: "boolean"
  },
  help: {
    cliFlagName: "help",
    flag: "--help",
    alias: "-h",
    description: "Show help",
    type: "boolean"
  }
} as const;
