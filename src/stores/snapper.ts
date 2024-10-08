import { type Line } from "@ghentcdh/vue-component-annotated-text";
import { tokenize } from "./../text_utilities";

export interface Snapper {
  fixOffset(newStart: number, newEnd: number): { start: number; end: number };
}
