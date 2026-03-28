import type {
  ClassDefinition,
  PropertyDefinition,
  SchemaGraph,
  SchemaNode,
  SchemaValue,
  ValidationResult
} from "../types.js";

import classes from "../../data/classes.json" with { type: "json" };
import properties from "../../data/properties.json" with { type: "json" };

export class SchemaGraphValidator {
  private readonly schemaGraph: SchemaGraph;

  /**
   * Constructs an instance of the SchemaGraphValidator class.
   * @param schemaGraph - The schema graph to validate.
   */
  constructor(schemaGraph: SchemaGraph) {
    this.schemaGraph = schemaGraph;
  }

  /**
   * Gets the class definition from the type.
   * @param type - The type of the class.
   * @return The class definition if it exists, `null` otherwise.
   */
  private getClassDefinition(type: string): ClassDefinition | null {
    if (type in classes) return classes[type as keyof typeof classes];
    return null;
  }

  /**
   * Gets the property definition from the property.
   *
   * When the property is `id`, the definition is always returned.
   * @param property - The property.
   * @return The property definition if it exists, `null` otherwise.
   */
  private getPropertyDefinition(property: string): PropertyDefinition | null {
    if (property === "id") return { isPending: false };
    if (property in properties) return properties[property as keyof typeof properties];
    return null;
  }

  /**
   * Gets the extended classes from the type.
   * @param type - The type of the class.
   * @return An array of extended classes if they exist, `null` otherwise.
   */
  getExtendedClasses(type: string): string[] | null {
    const classesSet = new Set<string>();
    const classDefinition = this.getClassDefinition(type);
    if (classDefinition) {
      const { extends: extendsClasses } = classDefinition;
      if (extendsClasses) {
        for (const className of extendsClasses) {
          classesSet.add(className);
          const extendedClasses = this.getExtendedClasses(className);
          if (extendedClasses) {
            for (const extendedClass of extendedClasses) {
              classesSet.add(extendedClass);
            }
          }
        }
      }
      return [...classesSet];
    }
    return null;
  }

  /**
   * Validates the schema values.
   * @param property - The property name.
   * @param schemaValues - The schema values to validate.
   * @return An array of validation reports.
   */
  private validateValues(property: string, schemaValues: SchemaValue[]): ValidationResult[] {
    const result: ValidationResult[] = [];
    const propertyDefinition = this.getPropertyDefinition(property);
    for (const schemaValue of schemaValues) {
      const { kind } = schemaValue;
      const location = kind === "node" ? schemaValue.linkLocation : schemaValue.location;
      const { jsonLDPath, startLine: line, startColumn: column } = location;
      const htmlLocation = line && column ? { line, column } : undefined;
      if (propertyDefinition) {
        const { isPending, supersededBy } = propertyDefinition;
        if (supersededBy) {
          const validationResult: ValidationResult = {
            type: "error",
            message: `The property \`${property}\` has been superseded: use \`${supersededBy}\` instead.`
          };
          if (jsonLDPath) validationResult.path = jsonLDPath;
          if (htmlLocation) validationResult.location = htmlLocation;
          result.push(validationResult);
        }
        if (isPending) {
          const validationResult: ValidationResult = {
            type: "warning",
            message: `The property \`${property}\` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution.`
          };
          if (jsonLDPath) validationResult.path = jsonLDPath;
          if (htmlLocation) validationResult.location = htmlLocation;
          result.push(validationResult);
        }
        if (kind === "node") {
          const { node } = schemaValue;
          const { type } = node;
          const { type: typesInPropertyDefinition } = propertyDefinition;
          const extendsTypes = this.getExtendedClasses(type)?.some(className =>
            typesInPropertyDefinition?.includes(className)
          );
          if (!typesInPropertyDefinition?.includes(type) && !extendsTypes) {
            const validationResult: ValidationResult = {
              type: "error",
              message: `\`${type}\` is not a valid type for the property \`${property}\`.`
            };
            if (jsonLDPath) validationResult.path = jsonLDPath;
            if (htmlLocation) validationResult.location = htmlLocation;
            result.push(validationResult);
          }
          result.push(...this.validateNode(node));
        }
      } else {
        const validationResult: ValidationResult = {
          type: "error",
          message: `The property \`${property}\` does not exist in the Schema.org vocabulary.`
        };
        if (jsonLDPath) validationResult.path = jsonLDPath;
        if (htmlLocation) validationResult.location = htmlLocation;
        result.push(validationResult);
      }
    }
    return result;
  }

  /**
   * Validates the schema node.
   * @param node - The schema node to validate.
   * @return An array of validation reports.
   */
  private validateNode(node: SchemaNode): ValidationResult[] {
    const {
      type,
      location: { jsonLDPath, startLine: line, startColumn: column },
      properties
    } = node;
    const result: ValidationResult[] = [];
    const classDefinition = this.getClassDefinition(type);
    if (classDefinition) {
      const { isPending, supersededBy } = classDefinition;
      if (supersededBy) {
        const validationResult: ValidationResult = {
          type: "error",
          message: `The type \`${type}\` has been superseded: use \`${supersededBy}\` instead.`
        };
        if (jsonLDPath) validationResult.path = jsonLDPath;
        if (line && column) validationResult.location = { line, column };
        result.push(validationResult);
      }
      if (isPending) {
        const validationResult: ValidationResult = {
          type: "warning",
          message: `The type \`${type}\` is part of terms which are not yet part of the Schema.org vocabulary. Pending terms are subject to change and should be used with caution.`
        };
        if (jsonLDPath) validationResult.path = jsonLDPath;
        if (line && column) validationResult.location = { line, column };
        result.push(validationResult);
      }
      for (const [property, schemaValues] of properties) {
        result.push(...this.validateValues(property, schemaValues));
      }
    } else {
      const validationResult: ValidationResult = {
        type: "error",
        message: `The type \`${type}\` does not exist in the Schema.org vocabulary.`
      };
      if (jsonLDPath) validationResult.path = jsonLDPath;
      if (line && column) validationResult.location = { line, column };
      result.push(validationResult);
    }
    return result;
  }

  /**
   * Validates the schema graph.
   */
  validate(): ValidationResult[] {
    const { roots } = this.schemaGraph;
    const result: ValidationResult[] = [];
    for (const root of roots) {
      result.push(...this.validateNode(root));
    }
    return result;
  }
}
