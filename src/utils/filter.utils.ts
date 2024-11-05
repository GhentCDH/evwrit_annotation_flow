import type { AnnotationType, ModifiedAnnotation } from "../types/Annotation";

const isAnnotationTypeFiltered = (
  selectedFilters: AnnotationType[],
  annotation: ModifiedAnnotation,
  showModified: boolean,
  showOnlyDuplicates: boolean,
) => {
  if (showOnlyDuplicates && annotation.duplicates.length < 1) return false;
  if (showModified && (!annotation.modified || annotation.hasOverride)) return false;

  const type = (annotation?.original?.type ?? "") as AnnotationType;
  return selectedFilters.length === 0 || selectedFilters.includes(type);
};

export const sortAnnotations = (a: ModifiedAnnotation, b: ModifiedAnnotation) =>
  a.processed.start < b.processed.start ? -1 : 1;

export const filterAnnotations = (
  selectedFilters: AnnotationType[],
  annotations: ModifiedAnnotation[],
  showOnlyModified: boolean,
  showOnlyDuplicates: boolean,
) => {
  if (selectedFilters.length === 0 && !showOnlyModified && !showOnlyDuplicates)
    return annotations.sort(sortAnnotations);

  const result = annotations
    .filter((annotation) => isAnnotationTypeFiltered(selectedFilters, annotation, showOnlyModified, showOnlyDuplicates))
    .sort(sortAnnotations);
  return result;
};
