import type { Annotation, AnnotationColor } from "@ghentcdh/annotated-text";
import type { Ref } from "vue";

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

export interface RuleAnnotationProperty {
  id: number;
  id_name: string;
  label: string;
  name: string;
}

export interface RuleAnnotation extends Annotation {
  id: string;
  start: number;
  end: number;
  color?: AnnotationColor;
  label?: string;
  target: AnnotationTarget;
  type?: AnnotationType;
  weight?: number;
  text?: string;
  metadata?: AnnotationMetaData;
  hasOverride: boolean;
  properties: RuleAnnotationProperty[];
}

export type AnnotationTarget = "gutter" | "text";

export type AnnotationMetaData = {
  text: string;
  index: number;
  id: string;
  lineLinguisticCharacteristic: string;
};

export type ModifiedAnnotation = {
  id: string;
  original: RuleAnnotation;
  processed: RuleAnnotation;
  isModified: boolean;
  hasOverride: boolean;
  duplicates: string[];
  appliedRules: string[];
  saving: Ref<boolean>;
  error: Ref<boolean>;
};

export type AnnotationPatch = {
  selection_start: number;
  selection_end: number;
  selection_length: number;
  is_deleted: boolean;
};
