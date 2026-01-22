import { describe, expect } from "vitest";
import type { RuleAnnotation } from "../../../types/Annotation";
import { AnnotationTextRule } from "../annotation-text.rule";

const annotation1 = {
  start: 9,
  end: 14,
  text: "test",
  metadata: {
    text: "test",
    id: "1",
    index: 0,
  },
} as RuleAnnotation;

const text = `this is a test text`;

describe("AnnotationTextRule", () => {
  test.each`
    annotation     | rule_applied | start | end
    ${annotation1} | ${true}      | ${11} | ${15}
  `(
    "AnnotationTextRule($annotation) -> rule_applied: $rule_applied, start: $start, end: $end",
    ({
      annotation,
      rule_applied,
      start,
      end,
    }: {
      annotation: RuleAnnotation;
      rule_applied: boolean;
      start: number;
      end: number;
    }) => {
      const rule = new AnnotationTextRule(text, 2);

      const result = rule.apply(annotation);
      expect(result.rule_applied).toEqual(rule_applied);
      expect(result.annotation).toBeDefined();
      expect(result.annotation).not.toBe(annotation);

      const selection = text.substring(start + 1, end + 1);
      const origSelection = text.substring(annotation.start, annotation.end);
      expect(origSelection).toEqual("__" + selection);

      if (!rule_applied) {
        return;
      }

      expect(result.annotation.start).toEqual(start);
      expect(result.annotation.end).toEqual(end);
    },
  );
});
