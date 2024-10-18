import type { AnnotationType, ModifiedAnnotation } from "../types/Annotation";

const isAnnotationTypeFiltered = (
  selectedFilters: AnnotationType[],
  annotation: ModifiedAnnotation,
  showModified: boolean,
) => {
  if (showModified && !!annotation.modified) return false;

  const type = (annotation?.original?.type ?? "") as AnnotationType;
  return selectedFilters.length === 0 || selectedFilters.includes(type);
};

export const sortAnnotations = (a: ModifiedAnnotation, b: ModifiedAnnotation) =>
  a.processed.start < b.processed.start ? -1 : 1;

export const filterAnnotations = (
  selectedFilters: AnnotationType[],
  annotations: ModifiedAnnotation[],
  showModified: boolean,
) => {
  if (selectedFilters.length === 0 && !showModified) return annotations.sort(sortAnnotations);

  return annotations
    .filter((annotation) => isAnnotationTypeFiltered(selectedFilters, annotation, showModified))
    .sort(sortAnnotations);
};
