import { type AnnotationType, type RuleAnnotation } from "../types/Annotation"; // Importeer je types
import { annotationColors } from "../styles/annotation-colors";
import type { AnnotationItem } from "../types/annotation-response";

export const normalizeAnnotation = (annotation: AnnotationItem, text: string): RuleAnnotation => {
  const textLength = annotation.text_selection.selection_end - annotation.text_selection.selection_start;
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
    },
    color: annotationColors[type],
    hasOverride: annotation.hasOverride,
  } as unknown as RuleAnnotation;
};
