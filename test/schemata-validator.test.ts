import fs from "node:fs";

import { afterEach, expect, it, vi } from "vitest";

import { SchemataValidator } from "../src/index.js";
import { displayReporting } from "../src/utils/display-reporting.js";
import { dryRunNotice } from "../src/utils/dry-run-notice.js";
import { getFilesToValidate } from "../src/utils/get-files-to-validate.js";
import { prepareReporting } from "../src/utils/prepare-reporting.js";
import { SchemaGraphValidator } from "../src/validator/schema-graph-validator.js";
import { mockedOptions } from "./fixtures/mocked-options.js";

vi.mock("../src/utils/dry-run-notice.js", () => ({ dryRunNotice: vi.fn() }));
vi.mock("../src/utils/get-files-to-validate.js", () => ({ getFilesToValidate: vi.fn() }));
vi.mock("../src/utils/prepare-reporting.js", () => ({ prepareReporting: vi.fn() }));
vi.mock("../src/utils/display-reporting.js", () => ({ displayReporting: vi.fn() }));
vi.mock("../src/validator/schema-graph-validator.js", () => {
  const MockClass = vi.fn();
  MockClass.prototype.validate = vi.fn().mockResolvedValue([]);
  return { SchemaGraphValidator: MockClass };
});

afterEach(() => {
  vi.clearAllMocks();
});

it("should be an instance of SchemataValidator", () => {
  const schemataValidator = new SchemataValidator();
  expect(schemataValidator).toBeInstanceOf(SchemataValidator);
});
it.each(mockedOptions)("should instantiate the object with $0", options => {
  const schemataValidator = new SchemataValidator(options);
  expect(schemataValidator).toHaveProperty("options", options);
});
it("should skip validation on dry-run mode", async () => {
  const schemataValidator = new SchemataValidator({ dryRun: true });
  await schemataValidator.validate();
  expect(schemataValidator).toHaveProperty("options", { dryRun: true });
  expect(dryRunNotice).toHaveBeenCalled();
  expect(getFilesToValidate).not.toHaveBeenCalled();
  expect(prepareReporting).not.toHaveBeenCalled();
});
it("should skip validation when there are no data nor files to validate", async () => {
  vi.mocked(getFilesToValidate).mockResolvedValue([]);
  const schemataValidator = new SchemataValidator({});
  await schemataValidator.validate();
  expect(SchemaGraphValidator).not.toHaveBeenCalled();
  expect(prepareReporting).not.toHaveBeenCalled();
});
it("should not call `getFilesToValidate` when `data` option is set", async () => {
  const schemataValidator = new SchemataValidator({
    data: ['{"@context":"https://schema.org"}']
  });
  await schemataValidator.validate();
  expect(getFilesToValidate).not.toHaveBeenCalled();
});
it("should call the schema graph validation when there are files to validate and no options set", async () => {
  vi.spyOn(fs, "readFileSync").mockReturnValue('{"@context":"https://schema.org"}');
  vi.mocked(getFilesToValidate).mockResolvedValue(["/fake/path/index.html"]);
  const schemataValidator = new SchemataValidator();
  await schemataValidator.validate();
  expect(dryRunNotice).not.toHaveBeenCalled();
  expect(SchemaGraphValidator).toHaveBeenCalled();
  expect(prepareReporting).toHaveBeenCalled();
});
it("should call the schema graph validation when `files` option is set", async () => {
  vi.spyOn(fs, "readFileSync").mockReturnValue('{"@context":"https://schema.org"}');
  vi.mocked(getFilesToValidate).mockResolvedValue(["/fake/path/selected.html"]);
  const schemataValidator = new SchemataValidator({ files: ["selected.html"] });
  await schemataValidator.validate();
  expect(dryRunNotice).not.toHaveBeenCalled();
  expect(SchemaGraphValidator).toHaveBeenCalled();
  expect(prepareReporting).toHaveBeenCalled();
});
it("should call `displayReporting` when `log` method is called", async () => {
  vi.spyOn(fs, "readFileSync").mockReturnValue('{"@context":"https://schema.org"}');
  vi.mocked(getFilesToValidate).mockResolvedValue(["/fake/path/index.html"]);
  const schemataValidator = new SchemataValidator();
  schemataValidator.log(await schemataValidator.validate());
  expect(displayReporting).toHaveBeenCalled();
});
