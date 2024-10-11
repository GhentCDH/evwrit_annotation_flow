import { type Line } from "@ghentcdh/vue-component-annotated-text"; // Importeer je types
import { type AnnotationTarget, type RuleAnnotation } from "../types/Annotation"; // Importeer je types
import { annotationColors } from "../styles/annotation-colors";
import type { FilterValue } from "src/stores/FilterStore";

export const normalizeAnnotation = (annotation: any, text: string): RuleAnnotation => {
  const textLength = annotation.text_selection.selection_end - annotation.text_selection.selection_start;
  const annotationTarget = (textLength > 130 ? "gutter" : "text") as AnnotationTarget;
  const startIndex = annotation.text_selection.selection_start - 1; // 0-gebaseerde index
  const endIndex = annotation.text_selection.selection_end - 1;

  const selectedText = text ? text.slice(startIndex, endIndex) : "";

  const type = annotation.type as FilterValue;

  return {
    id: annotation.id,
    start: annotation.text_selection.selection_start,
    end: annotation.text_selection.selection_end,
    class: `annotation-${type}`,
    label: type,
    target: annotationTarget,
    type: type,
    metadata: {
      text: selectedText,
      id: annotation.id,
      index: annotation.index,
    },
    color: annotationColors[type],
  } as RuleAnnotation;
};
