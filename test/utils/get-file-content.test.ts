import fs from "node:fs";

import { expect, it, vi } from "vitest";

import { getFileContent } from "../../src/utils/get-file-content.js";
import { mockedCwd } from "./fixtures/mocked-cwd.js";

it("should throw an error if a file does not exist", () => {
  vi.spyOn(fs, "readFileSync").mockImplementation(() => {
    throw new Error("ENOENT: no such file or directory, open '/fake/path/non-existing-file.html'");
  });
  expect(() => getFileContent("/fake/path/non-existing-file.html")).toThrowError();
});
it("should return the content of the file", () => {
  vi.spyOn(fs, "readFileSync").mockReturnValue("test content");
  expect(getFileContent(`${mockedCwd}/index.html`)).toEqual("test content");
});
