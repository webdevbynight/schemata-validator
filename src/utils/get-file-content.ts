import fs from "node:fs";

/**
 * Gets the content of the file.
 * @param file - The file to get the content of.
 * @return The content of the file.
 */
export const getFileContent = (file: string): string => {
  return fs.readFileSync(file, "utf-8");
};
