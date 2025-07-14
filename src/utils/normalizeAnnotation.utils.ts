import { type AnnotationType, type RuleAnnotation, type RuleAnnotationProperty } from "../types/Annotation";
import { annotationColors } from "../styles/annotation-colors";
import type { AnnotationItem, Properties, Property } from "../types/annotation-response";

export const normalizeProperty = (
  type: AnnotationType,
  propertyName: string,
  property: Property,
): RuleAnnotationProperty | null => {
  if (!property || !property.id) {
    console.warn("No property object", propertyName, property);
    return null;
  }

  const label = propertyName
    .substring(type.length + 1)
    .split(/(?=[A-Z])/)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");

  return {
    id: property.id,
    id_name: property.id_name,
    label,
    name: property.name,
  };
};

export const normalizeProperties = (type: AnnotationType, properties: Properties): RuleAnnotationProperty[] => {
  return (
    Object.keys(properties)
      // .filter(key => key.startsWith(`${type}_`))
      .map((key) => normalizeProperty(type, key, properties[key]))
      .filter((p) => !!p) as RuleAnnotationProperty[]
  );
};

export const normalizeAnnotation = (annotation: AnnotationItem, text: string): RuleAnnotation | null => {
  // const textLength = annotation.text_selection.selection_end - annotation.text_selection.selection_start;

  if (!annotation.text_selection) {
    console.error("Annotation error wrong format", annotation);
    return null;
  }

  const annotationTarget = annotation.type === "handshift" ? "gutter" : "text"; // (textLength > 130 ? "gutter" : "text") as AnnotationTarget;
  const startIndex = annotation.text_selection.selection_start - 1; // 0-gebaseerde index
  const endIndex = annotation.text_selection.selection_end - 1;

  const selectedText = text ? text.slice(startIndex, endIndex) : "";

  const type = annotation.type as AnnotationType;

  return {
    id: annotation.id,
    start: annotation.text_selection.selection_start,
    end: annotation.text_selection.selection_end,
    text: annotation.text_selection.text,
    class: `annotation-${type}`,
    label: type,
    target: annotationTarget,
    type: type,
    metadata: {
      text: selectedText,
      id: annotation.id,
      index: annotation.id,
      lineLinguisticCharacteristic: annotation.text_selection.text,
    },
    color: annotationColors[type],
    hasOverride: annotation.hasOverride,
    properties: normalizeProperties(type, annotation.properties),
  } as unknown as RuleAnnotation;
};
