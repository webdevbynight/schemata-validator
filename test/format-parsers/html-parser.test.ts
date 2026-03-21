import { expect, it } from "vitest";

import { HTMLParser } from "../../src/format-parsers/html-parser.js";
import { mockedHTMLFiles } from "./fixtures/mocked-html-files.js";
import { mockedHtmlFilesWithInvalidJSONLDData } from "./fixtures/mocked-html-files-with-invalid-json-ld-data.js";

it.each(
  mockedHtmlFilesWithInvalidJSONLDData
)("should throw an error if the HTML file has invalid JSON-LD data", input => {
  expect(() => new HTMLParser(input).parse()).toThrowError();
});
it.each(mockedHTMLFiles)("should return the intermediate representation tree", ({
  input,
  expectedTree
}) => {
  expect(new HTMLParser(input).parse()).toEqual(expectedTree);
});
