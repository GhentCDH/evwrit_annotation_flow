import { type Line } from "@ghentcdh/vue-component-annotated-text"; // Importeer je types
import { type AnnotationTarget, type RuleAnnotation } from "./types/Annotation"; // Importeer je types

export const normalizeAnnotaion = (
  annotation: any,
  text: string,
): RuleAnnotation => {
  const textLength =
    annotation.text_selection.selection_end -
    annotation.text_selection.selection_start;
  const annotationTarget = (
    textLength > 130 ? "gutter" : "text"
  ) as AnnotationTarget;
  const startIndex = annotation.text_selection.selection_start - 1; // 0-gebaseerde index
  const endIndex = annotation.text_selection.selection_end - 1;

  const selectedText = text ? text.slice(startIndex, endIndex) : "";
  return {
    id: annotation.id,
    start: annotation.text_selection.selection_start,
    end: annotation.text_selection.selection_end,
    class: "annotation--color-1",
    label: annotation.type,
    target: annotationTarget,
    type: annotation.type,
    metadata: {
      text: selectedText,
      id: annotation.id,
      index: annotation.index,
    },
  } as RuleAnnotation;
};

export const getAnnotatedLines = (
  lines: Line[],
  start: number,
  end: number,
) => {
  //console.log('Length', start, end)
  const annotatedLines = [] as Line[];
  let offset: number = 0;
  lines.forEach((line) => {
    if (
      (start >= line.start && start < line.end) ||
      (end > line.start && end <= line.end) ||
      (start < line.start && end > line.end)
    ) {
      annotatedLines.push(line);
      if (start >= line.start && start < line.end) {
        offset = start - line.start;
      }
    }
  });
  return {
    lines: annotatedLines,
    offset: offset,
  } as { lines: Line[]; offset: number };
};
