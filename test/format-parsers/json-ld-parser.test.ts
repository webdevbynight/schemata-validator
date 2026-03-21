import { expect, it } from "vitest";

import { JSONLDParser } from "../../src/format-parsers/json-ld-parser.js";
import { mockedInvalidJSONLDData } from "./fixtures/mocked-invalid-json-ld-data.js";
import { mockedJSONLDData } from "./fixtures/mocked-json-ld-data.js";

it.each(
  mockedInvalidJSONLDData
)("should throw an error if the input is not a valid JSON-LD string", input => {
  expect(() => new JSONLDParser(input).parse()).toThrowError();
});
it.each(mockedJSONLDData)("should return the intermediate representation tree for data %$", ({
  input,
  expectedTree
}) => {
  expect(new JSONLDParser(input).parse()).toEqual(expectedTree);
});
