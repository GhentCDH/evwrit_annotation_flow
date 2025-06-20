import type { Line } from "@ghentcdh/vue-component-annotated-text";
import { textToLines } from "../text_utilities";

const isStartLine = (line: Line, start: number) => {
  return start >= line.start && start < line.end;
};

export class TextLines {
  private readonly textLines: Line[] = [];

  constructor(text: string) {
    // If there is no text then just set an empty array
    this.textLines = text ? textToLines(text) : [];
  }

  getAllLines(): Line[] {
    return this.textLines ?? [];
  }

  findStartLineIndex(start: number): number {
    return this.textLines.findIndex((line) => isStartLine(line, start));
  }

  getAnnotatedLines(start: number, end: number): { lines: Line[] } {
    const annotatedLines = [] as Line[];

    const startIndex = this.findStartLineIndex(start);

    for (let i = startIndex; i < this.textLines.length; i++) {
      const line = this.textLines[i];
      if (!line) break;
      if (line.start > end) {
        i = this.textLines.length;
        break;
      }

      annotatedLines.push(line);

      if (end <= line.end) {
        i = this.textLines.length;
        break;
      }
    }

    return {
      lines: annotatedLines,
    } as { lines: Line[] };
  }
}
