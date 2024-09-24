export type dataAnnotation = {
    id: string;
    start: number;
    end: number;
    class?: string;
    label?: string;
    target: AnnotationTarget;
    weight?: number;
    text?: string;
    metadata?: AnnotationMetaData;
}
export type AnnotationTarget = "gutter" | "text";

export type AnnotationMetaData = {
  text: string;
  index: number;
  id: string;
}