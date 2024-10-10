import { type Line } from "@ghentcdh/vue-component-annotated-text";

export const getAnnotatedLines = <L extends Line>(lines: L[], start: number, end: number) => {
  const annotatedLines = [] as Line[];
  let offset: number = 0;
  lines.forEach((line) => {
    if (
      (start >= line.start && start < line.end) ||
      (end > line.start && end <= line.end) ||
      (start < line.start && end > line.end)
    ) {
      annotatedLines.push(line);
      if (start >= line.start && start < line.end) {
        offset = start - line.start;
      }
    }
  });
  return {
    lines: annotatedLines,
    offset: offset,
  } as { lines: Line[]; offset: number };
};
