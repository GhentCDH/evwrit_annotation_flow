import type { RuleAnnotation } from "../../../types/Annotation";
import { DuplicateRule } from "../duplicates";

const annotation1 = {
  id: "1",
  start: 1,
  end: 2,
  type: "gts",
} as RuleAnnotation;

const annotation2 = {
  id: "2",
  start: 2,
  end: 3,
  type: "gts",
} as RuleAnnotation;

const annotation3 = {
  id: "3",
  start: 3,
  end: 4,
  type: "gts",
} as RuleAnnotation;

const annotation4 = {
  id: "4",
  start: 4,
  end: 5,
  type: "gts",
} as RuleAnnotation;
const annotation4_dup = {
  ...annotation4,
  id: "4_dup",
} as RuleAnnotation;

const annotation5 = {
  id: "5",
  start: 5,
  end: 6,
  type: "gts",
} as RuleAnnotation;
const annotation5_dup = {
  ...annotation5,
  id: "5_dup",
} as RuleAnnotation;

const annotation5_n0_dup = {
  ...annotation5,
  id: "5_dup_no",
  type: "language",
} as RuleAnnotation;

const annotations = [
  annotation1,
  annotation2,
  annotation3,
  annotation4,
  annotation4_dup,
  annotation5,
  annotation5_dup,
  annotation5_n0_dup,
];

describe("DuplicateRule", () => {
  test.each`
    annotation            | duplicates
    ${annotation1}        | ${[]}
    ${annotation2}        | ${[]}
    ${annotation3}        | ${[]}
    ${annotation4}        | ${[annotation4.id, annotation4_dup.id]}
    ${annotation4_dup}    | ${[annotation4.id, annotation4_dup.id]}
    ${annotation5}        | ${[annotation5.id, annotation5_dup.id]}
    ${annotation5_dup}    | ${[annotation5.id, annotation5_dup.id]}
    ${annotation5_n0_dup} | ${[]}
  `(
    "rule.hasDuplicate($annotation) -> $duplicates",
    ({ annotation, duplicates }: { annotation: RuleAnnotation; duplicates: string[] }) => {
      const rule = new DuplicateRule("text", annotations);
      expect(rule.hasDuplicate(annotation)).toEqual(duplicates);
    },
  );
});
