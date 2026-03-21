export type SchemataValidatorOptions = {
  data?: string[];
  files?: string[];
  paths?: string[];
  exclude?: string[];
  dryRun?: boolean;
};
export type JSONLDData = Record<string, unknown>;
type SourceLocation = {
  jsonLDPath?: string;
};
type LiteralSchemaValue = {
  kind: "literal";
  location: SourceLocation;
  value: string;
};
type NodeSchemaValue = {
  kind: "node";
  linkLocation: SourceLocation;
  node: SchemaNode;
};
export type SchemaValue = LiteralSchemaValue | NodeSchemaValue;
export type SchemaNode = {
  type: string;
  id?: string;
  sourceFormat: "jsonld" | "microdata";
  location: SourceLocation;
  properties: Map<string, SchemaValue[]>;
};
export type SchemaGraph = {
  roots: SchemaNode[];
};
export interface ClassDefinition {
  isPending: boolean;
  extends?: string[];
  supersededBy?: string;
}
export interface PropertyDefinition extends ClassDefinition {
  propertyOf?: string[];
  type?: string[];
}
export type ValidationResult = {
  type: "error" | "warning";
  path: string;
  message: string;
};
interface ValidationReportingCommonProperties {
  resource: string;
}
interface ValidationReportingFail extends ValidationReportingCommonProperties {
  status: "fail";
  result: ValidationResult[];
}
interface ValidationReportingPass extends ValidationReportingCommonProperties {
  status: "pass";
  result?: ValidationResult[];
}
export type ValidationReporting = ValidationReportingFail | ValidationReportingPass;
