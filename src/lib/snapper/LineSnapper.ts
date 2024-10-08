import { type Snapper } from "./Types";

export class LineSnapper implements Snapper {
  fixOffset(newStart: number, newEnd: number): { start: number; end: number } {
    return { start: newStart, end: newEnd };
  }
}
