import type { SchemataValidatorOptions } from "../types.js";

import fs from "node:fs/promises";
import path from "node:path";
import { cwd } from "node:process";

import { browseFolders } from "./browse-folders.js";
import { patternToRegex } from "./pattern-to-regex.js";

/**
 * Gets the files to validate from the specified options.
 *
 * The `files` option takes precedence over the other options.
 * @param [options] - The options to use.
 * @return An array of the files to validate.
 */
export const getFilesToValidate = async (
  options: SchemataValidatorOptions = {}
): Promise<string[]> => {
  const { files, paths, exclude } = options;
  if (files) return files.map(file => path.resolve(cwd(), file));
  const excludeRegexps = (exclude ?? []).map(patternToRegex);
  const folders = (await browseFolders(cwd())).map(async folder => {
    const isFolderExcluded = [...excludeRegexps, /node_modules/].some(regex => regex.test(folder));
    if (isFolderExcluded || (paths && !paths.some(path => folder.startsWith(`${cwd()}/${path}`)))) {
      return [];
    }
    const files = await fs.readdir(folder);
    const filesToValidate: string[] = [];
    const extensions = [".html", ".htm"];
    for (const file of files) {
      const fileStat = await fs.stat(path.join(folder, file));
      const isFileExcluded = excludeRegexps.some(regex => regex.test(file));
      if (fileStat.isFile() && extensions.includes(path.extname(file)) && !isFileExcluded) {
        filesToValidate.push(path.join(folder, file));
      }
    }
    return filesToValidate;
  });
  return (await Promise.all(folders)).filter(folder => folder.length).flat();
};
