import { WordSnapper } from "@ghentcdh/annotated-text";
import { type AnnotationFix } from "../../text_utilities.ts";

/**
 * this function changes the stop index and/or start index of the annotation to match
 * a word boundry in the given text. The text is tokenized with https://github.com/rse/tokenizr
 *
 * @param text The text to use for word boundries
 * @param annotationStartCharIndex The unfixed character start index.
 * @param annotationStopCharIndex The unfixed character stop index.
 * @returns An array in three parts: the fixed start and stop index and a boolean
 * representing if a nearby word boundry has been found.
 */
export class ShiftToWordBoundary extends WordSnapper {
  constructor() {
    super();
  }

  apply(
    original: {
      start: number;
      end: number;
    },
    maxShift: number,
  ): AnnotationFix | null {
    if (original.start < 0) return null;
    if (original.end > this.textLength) return null;

    const modified = this.fixOffset("drag", { start: original.start, end: original.end } as any);
    if (!modified.modified) return null;

    const validatePosition = (originalPos: number, newPosition: number | null) => {
      if (newPosition === null) return originalPos;
      if (Math.abs(newPosition - originalPos) <= maxShift) return newPosition;

      return originalPos;
    };

    const newStart = modified.start;
    let newEnd = modified.end;

    const start = validatePosition(original.start, newStart);
    if (newStart !== start) {
      // This means wrong shift, recalculate end based on new start
    }

    let end = validatePosition(original.end, newEnd);
    if (newEnd !== end) {
      // This means wrong shift, recalculate end based on new start
      const maxEnd = original.end + maxShift;
      let nextEnd = original.end + 1;

      while (nextEnd <= maxEnd && newEnd !== end) {
        newEnd = this.mapStopCharIndexToToken[nextEnd] ?? original.end;
        end = validatePosition(original.end, newEnd);
        nextEnd += 1;
      }
    }

    if (start === original.start && end === original.end) return null;
    return { start, end, modified: true };
  }
}
