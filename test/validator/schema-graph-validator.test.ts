import { describe, expect, it } from "vitest";

import { SchemaGraphValidator } from "../../src/validator/schema-graph-validator.js";
import { mockedClassExtensions } from "./fixtures/mocked-class-extensions.js";
import { mockedInvalidSchemaGraphs } from "./fixtures/mocked-invalid-schema-graphs.js";
import { mockedValidSchemaGraphs } from "./fixtures/mocked-valid-schema-graphs.js";
import { mockedValidSchemaGraphsWithWarnings } from "./fixtures/mocked-valid-schema-graphs-with-warnings.js";

describe.each([
  ...mockedValidSchemaGraphs,
  ...mockedInvalidSchemaGraphs.map(schema => schema.schemaGraph)
])("with schema graph %$", schemaGraph => {
  const schemaGraphValidator = new SchemaGraphValidator(schemaGraph);
  it("should be an instance of SchemaGraphValidator", () => {
    expect(schemaGraphValidator).toBeInstanceOf(SchemaGraphValidator);
  });
  it("should instantiate the object", () => {
    expect(schemaGraphValidator).toHaveProperty("schemaGraph", schemaGraph);
  });
});
it.each(mockedClassExtensions)("should get all the classes %s extends", (className, expected) => {
  const schemaGraphValidator = new SchemaGraphValidator({ roots: [] });
  expect(schemaGraphValidator.getExtendedClasses(className)).toEqual(expected);
});
it.each(
  mockedValidSchemaGraphs
)("should return an empty array for schema graph %$", schemaGraph => {
  const schemaGraphValidator = new SchemaGraphValidator(schemaGraph);
  const result = schemaGraphValidator.validate();
  expect(result).toEqual([]);
});
it.each(mockedInvalidSchemaGraphs)("should return an array of errors for schema graph %$", ({
  schemaGraph,
  expectedResult
}) => {
  const schemaGraphValidator = new SchemaGraphValidator(schemaGraph);
  const result = schemaGraphValidator.validate();
  expect(result).toEqual(expectedResult);
});
it.each(
  mockedValidSchemaGraphsWithWarnings
)("should return an array of warnings for schema graph %$", ({ schemaGraph, expectedResult }) => {
  const schemaGraphValidator = new SchemaGraphValidator(schemaGraph);
  const result = schemaGraphValidator.validate();
  expect(result).toEqual(expectedResult);
});
