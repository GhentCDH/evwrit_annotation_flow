import type { AnnotationFlags } from "@/types/Annotation";

export interface AnnotationList {
  id: number;
  text: string;
  annotations: AnnotationItem[];
  has_generic_text_structure: string;
  has_layout_text_structure: any;
  flags: TextFlags;
}

export interface AnnotationItem {
  id: number;
  text_selection: TextSelection;
  type: string;
  properties: Properties;
  hasOverride: boolean;
  isDeleted: boolean;
  context?: Context;
  flags: AnnotationFlags;
}

export interface TextSelection {
  id: number;
  text_id: number;
  text: string;
  text_edited: string;
  line_number_start?: number;
  line_number_end?: number;
  selection_start: number;
  selection_length: number;
  selection_end: number;
}

export interface Property {
  id: number;
  name: string;
  id_name: string;
}

export type Properties = Record<string, Property>;

export interface Context {
  text: string;
  start: number;
  end: number;
}

export type TextFlags = {
  needs_attention: boolean;
  review_done: boolean;
};
