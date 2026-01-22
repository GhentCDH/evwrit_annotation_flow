import { describe, expect, it } from "vitest";
import {
  AnnotationTextRule,
  shiftToAnnotationMetaDataText,
} from "../annotation-text.rule";

describe("shiftToAnnotationMetaDataText", () => {
  it.each`
    description                               | text                  | annotationText | startIndex | stopIndex | maxShift | expectedStart | expectedEnd | expectedModified
    ${"exact match no shift needed"}          | ${"Hello world test"} | ${"world"}     | ${7}       | ${12}     | ${5}     | ${7}          | ${12}       | ${false}
    ${"shift start forward within maxShift"}  | ${"Hello world test"} | ${"world"}     | ${5}       | ${10}     | ${5}     | ${7}          | ${12}       | ${true}
    ${"shift start backward within maxShift"} | ${"Hello world test"} | ${"world"}     | ${9}       | ${14}     | ${5}     | ${7}          | ${12}       | ${true}
    ${"no match found"}                       | ${"Hello world test"} | ${"xyz"}       | ${1}       | ${4}      | ${5}     | ${1}          | ${4}        | ${false}
    ${"match outside maxShift range"}         | ${"Hello world test"} | ${"test"}      | ${1}       | ${5}      | ${5}     | ${1}          | ${5}        | ${false}
    ${"multiple matches - ambiguous"}         | ${"test test test"}   | ${"test"}      | ${6}       | ${10}     | ${10}    | ${6}          | ${10}       | ${false}
    ${"single match at start"}                | ${"Hello world"}      | ${"Hello"}     | ${1}       | ${6}      | ${5}     | ${1}          | ${6}        | ${false}
    ${"single match at end"}                  | ${"Hello world"}      | ${"world"}     | ${7}       | ${12}     | ${5}     | ${7}          | ${12}       | ${false}
  `(
    "$description",
    ({
      text,
      annotationText,
      startIndex,
      stopIndex,
      maxShift,
      expectedStart,
      expectedEnd,
      expectedModified,
    }) => {
      const result = shiftToAnnotationMetaDataText(
        text,
        annotationText,
        startIndex,
        stopIndex,
        maxShift,
      );

      expect(result.start).toBe(expectedStart);
      expect(result.end).toBe(expectedEnd);
      expect(result.modified).toBe(expectedModified);
    },
  );
});

describe("AnnotationTextRule", () => {
  describe("apply", () => {
    it("should not modify annotation without text property", () => {
      const rule = new AnnotationTextRule("Hello world test", 5);
      const annotation = {
        start: 1,
        end: 6,
      } as any;

      const result = rule.apply(annotation);

      expect(result.annotation.start).toBe(1);
      expect(result.annotation.end).toBe(6);
      expect(result.rule_applied).toBe(false);
    });

    it("should shift annotation to match text within maxShift", () => {
      const rule = new AnnotationTextRule("Hello world test", 5);
      const annotation = {
        start: 5,
        end: 10,
        text: "world",
      } as any;

      const result = rule.apply(annotation);

      expect(result.annotation.start).toBe(7);
      expect(result.annotation.end).toBe(12);
      expect(result.rule_applied).toBe(true);
    });

    it("should not modify when text is not found", () => {
      const rule = new AnnotationTextRule("Hello world test", 5);
      const annotation = {
        start: 1,
        end: 4,
        text: "xyz",
      } as any;

      const result = rule.apply(annotation);

      expect(result.annotation.start).toBe(1);
      expect(result.annotation.end).toBe(4);
      expect(result.rule_applied).toBe(false);
    });

    it("should trim whitespace from annotation text", () => {
      const rule = new AnnotationTextRule("Hello world test", 5);
      const annotation = {
        start: 5,
        end: 10,
        text: "  world  ",
      } as any;

      const result = rule.apply(annotation);

      expect(result.annotation.start).toBe(7);
      expect(result.annotation.end).toBe(12);
      expect(result.rule_applied).toBe(true);
    });

    it("should not modify when match is outside maxShift", () => {
      const rule = new AnnotationTextRule("Hello world test", 2);
      const annotation = {
        start: 1,
        end: 5,
        text: "test",
      } as any;

      const result = rule.apply(annotation);

      expect(result.annotation.start).toBe(1);
      expect(result.annotation.end).toBe(5);
      expect(result.rule_applied).toBe(false);
    });

    it("should not modify when multiple matches exist within maxShift", () => {
      const rule = new AnnotationTextRule("test test test", 10);
      const annotation = {
        start: 6,
        end: 10,
        text: "test",
      } as any;

      const result = rule.apply(annotation);

      expect(result.annotation.start).toBe(6);
      expect(result.annotation.end).toBe(10);
      expect(result.rule_applied).toBe(false);
    });

    it("should return cloned annotation when modified", () => {
      const rule = new AnnotationTextRule("Hello world test", 5);
      const annotation = {
        start: 5,
        end: 10,
        text: "world",
      } as any;

      const result = rule.apply(annotation);

      expect(result.annotation).not.toBe(annotation);
      expect(annotation.start).toBe(5);
      expect(annotation.end).toBe(10);
    });

    it("should return same annotation reference when not modified", () => {
      const rule = new AnnotationTextRule("Hello world test", 5);
      const annotation = {
        start: 7,
        end: 12,
        text: "world",
      } as any;

      const result = rule.apply(annotation);

      expect(result.annotation).toBe(annotation);
    });
  });

  describe("constructor", () => {
    it("should set name to annotation_text_rule", () => {
      const rule = new AnnotationTextRule("test", 5);
      expect(rule.name).toBe("annotation_text_rule");
    });

    it("should store text and maxShift", () => {
      const rule = new AnnotationTextRule("Hello world", 10);
      expect(rule.text).toBe("Hello world");
      expect(rule.maxShift).toBe(10);
    });
  });
});
