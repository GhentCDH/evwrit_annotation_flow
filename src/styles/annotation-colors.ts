import { createAnnotationColors } from "@ghentcdh/vue-component-annotated-text";
import type { AnnotationType } from "../types/Annotation";

// FIXME after update @ghentcdh/vue-component-annotated-text
type AnnotationColor = any;

export const annotationHtmlColors: Partial<Record<AnnotationType, string>> = {
  orthography: "#f58231",
  typography: "#e61919",
  morpho_syntactical: "#18aa2a",
  lexis: "#f032e6",
  language: "#1E64C8",
  //   handshift: null,
  //   ltsa: null,
  //   gtsa: null,
  //   gts: null,
  //   lts: null,
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
