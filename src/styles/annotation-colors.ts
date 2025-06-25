import { type AnnotationColor, createAnnotationColors } from "@ghentcdh/vue-component-annotated-text";
import type { AnnotationType } from "../types/Annotation";

export const annotationHtmlColors: Partial<Record<AnnotationType, string>> = {
  orthography: "#f58231",
  typography: "#e61919",
  morpho_syntactical: "#18aa2a",
  lexis: "#f032e6",
  language: "#1E64C8",
  handshift: "#9e2a2b",
  ltsa: "#335c67",
  gtsa: "#bb4430",
  gts: "#6a4c93",
  lts: "#e9fff9",
};

export const annotationColors: Record<string, AnnotationColor> = createAnnotationColors(annotationHtmlColors);

export const createHighlightColors = (): Record<string, AnnotationColor> => {
  const colorSet: Record<string, AnnotationColor> = {};

  Object.entries(annotationColors).forEach(([key, value]) => {
    colorSet[key] = value ? { ...value, border: `rgb(0, 128, 0)` } : null;
  });

  return colorSet;
};

export const annotationHighlightColors = createHighlightColors();
