import { describe, expect, it } from "vitest";
import { TokenizeRule } from "../../annotation_utilities";

describe("TokenizeRule", () => {
  describe("Basic boundary alignment tests", () => {
    it.each`
      description                         | text                  | startIndex | stopIndex | maxShift | expectedStart | expectedEnd | expectedModified
      ${"exact word boundaries"}          | ${"Hello world test"} | ${0}       | ${5}      | ${5}     | ${0}          | ${5}        | ${false}
      ${"exact word boundaries mid-text"} | ${"Hello world test"} | ${6}       | ${11}     | ${5}     | ${6}          | ${11}       | ${false}
      ${"start at beginning"}             | ${"Hello world"}      | ${0}       | ${3}      | ${5}     | ${0}          | ${5}        | ${true}
      ${"end at text end"}                | ${"Hello world"}      | ${8}       | ${11}     | ${5}     | ${6}          | ${11}       | ${true}
    `("$description", ({ text, startIndex, stopIndex, maxShift, expectedStart, expectedEnd, expectedModified }) => {
      const rule = new TokenizeRule(text, maxShift);
      const result = rule.apply({ start: startIndex, end: stopIndex } as any); // Dummy annotation object

      expect(result.annotation.start).toBe(expectedStart);
      expect(result.annotation.end).toBe(expectedEnd);
      expect(result.rule_applied).toBe(expectedModified);
    });
  });

  describe("Shift direction tests", () => {
    it.each`
      description                        | text                  | startIndex | stopIndex | maxShift | expectedStart | expectedEnd | expectedModified
      ${"start needs forward shift +1"}  | ${"Hello world test"} | ${1}       | ${5}      | ${5}     | ${0}          | ${5}        | ${true}
      ${"start needs forward shift +2"}  | ${"Hello world test"} | ${2}       | ${5}      | ${5}     | ${0}          | ${5}        | ${true}
      ${"start needs backward shift -1"} | ${"Hello world test"} | ${7}       | ${11}     | ${5}     | ${6}          | ${11}       | ${true}
      ${"end needs backward shift -1"}   | ${"Hello world test"} | ${6}       | ${12}     | ${5}     | ${6}          | ${11}       | ${true}
      ${"both need shifting"}            | ${"Hello world test"} | ${1}       | ${4}      | ${5}     | ${0}          | ${5}        | ${true}
    `("$description", ({ text, startIndex, stopIndex, maxShift, expectedStart, expectedEnd, expectedModified }) => {
      const rule = new TokenizeRule(text, maxShift);
      const result = rule.apply({ start: startIndex, end: stopIndex } as any); // Dummy annotation object

      expect(result.annotation.start).toBe(expectedStart);
      expect(result.annotation.end).toBe(expectedEnd);
      expect(result.rule_applied).toBe(expectedModified);
    });
  });

  describe("Max shift boundary tests", () => {
    it.each`
      description                             | text                  | startIndex | stopIndex | maxShift | expectedStart | expectedEnd | expectedModified
      ${"within max shift range"}             | ${"Hello world test"} | ${2}       | ${9}      | ${3}     | ${0}          | ${11}       | ${true}
      ${"exactly at max shift"}               | ${"Hellowworld test"} | ${4}       | ${6}      | ${5}     | ${0}          | ${11}       | ${true}
      ${"beyond max shift - no fix possible"} | ${"Hellowworld test"} | ${3}       | ${4}      | ${1}     | ${3}          | ${4}        | ${false}
      ${"max shift 0 - exact match"}          | ${"Hello world"}      | ${0}       | ${5}      | ${0}     | ${0}          | ${5}        | ${false}
      ${"max shift 0 - no match"}             | ${"Hello world"}      | ${1}       | ${4}      | ${0}     | ${1}          | ${4}        | ${false}
    `("$description", ({ text, startIndex, stopIndex, maxShift, expectedStart, expectedEnd, expectedModified }) => {
      const rule = new TokenizeRule(text, maxShift);
      const result = rule.apply({ start: startIndex, end: stopIndex } as any); // Dummy annotation object

      expect(result.annotation.start).toBe(expectedStart);
      expect(result.annotation.end).toBe(expectedEnd);
      expect(result.rule_applied).toBe(expectedModified);
    });
  });

  // Separate tests for edge cases that need special handling
  describe("edge cases", () => {
    it("handles negative indices gracefully", () => {
      const rule = new TokenizeRule("Hello world", 5);
      const result = rule.apply({
        start: -1,
        end: 5,
      } as any);
      expect(result.annotation.start).toBe(-1);
      expect(result.annotation.end).toBe(5);
      expect(result.rule_applied).toBe(false);
    });

    it("handles indices beyond text length", () => {
      const rule = new TokenizeRule("Hello world", 5);
      const result = rule.apply({ start: 0, end: 100 } as any);
      expect(result.annotation.end).toBe(100);
      expect(result.annotation.start).toBe(0);
      expect(result.rule_applied).toBe(false);
    });
  });
});
