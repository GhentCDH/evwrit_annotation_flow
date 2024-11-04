import type { Annotation } from "@ghentcdh/vue-component-annotated-text";

export const annotationTypes = [
  "language",
  "typography",
  "orthography",
  "lexis",
  "morpho_syntactical",
  "handshift",
  "ltsa",
  "gtsa",
  "gts",
  "lts",
] as const;

export type AnnotationType = (typeof annotationTypes)[number];

export interface RuleAnnotation extends Annotation {
  id: string;
  start: number;
  end: number;
  class?: string;
  label?: string;
  target: AnnotationTarget;
  type?: AnnotationType;
  weight?: number;
  text?: string;
  metadata?: AnnotationMetaData;
  hasOverride: boolean;
}

export type AnnotationTarget = "gutter" | "text";

export type AnnotationMetaData = {
  text: string;
  index: number;
  id: string;
};

export type ModifiedAnnotation = {
  id: string;
  original: RuleAnnotation;
  processed: RuleAnnotation;
  modified: RuleAnnotation | null;
  hasOverride: boolean;
  duplicates: string[];
  appliedRules: string[];
};

export type AnnotationPatch = {
  selection_start: number;
  selection_end: number;
  selection_length: number;
  is_deleted: boolean;
};
