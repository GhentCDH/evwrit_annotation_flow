export type RuleAnnotation = {
  id: string;
  start: number;
  end: number;
  class?: string;
  label?: string;
  target: AnnotationTarget;
  type?: string;
  weight?: number;
  text?: string;
  metadata?: AnnotationMetaData;
};
export type AnnotationTarget = "gutter" | "text";

export type AnnotationMetaData = {
  text: string;
  index: number;
  id: string;
};

export type AnnotationMap = Map<string, RuleAnnotation>;
