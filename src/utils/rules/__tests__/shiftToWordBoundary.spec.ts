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

  describe.skip("Ancient Greek and papyri-specific tests", () => {
    // Ancient Greek and papyri-specific tests
    it.each`
      description                           | text                                          | startIndex | stopIndex | maxShift | expectedStart | expectedEnd | expectedModified
      ${"Greek with breathing marks"}       | ${"φιλανθρω"}                                 | ${0}       | ${8}      | ${5}     | ${0}          | ${8}        | ${false}
      ${"Greek with breathing marks shift"} | ${"φιλανθρω"}                                 | ${1}       | ${7}      | ${5}     | ${0}          | ${8}        | ${true}
      ${"Greek polytonic omega"}            | ${"15]ω φιλανθρω"}                            | ${0}       | ${3}      | ${5}     | ${0}          | ${4}        | ${false}
      ${"Greek with iota subscript"}        | ${"τῷ λοιπῷ"}                                 | ${0}       | ${2}      | ${5}     | ${0}          | ${3}        | ${false}
      ${"Greek rough breathing"}            | ${"Ῥοῦφον καὶ"}                               | ${0}       | ${6}      | ${5}     | ${0}          | ${6}        | ${false}
      ${"Greek circumflex accent"}          | ${"τῶν λοιπῶν μηνῶν"}                         | ${0}       | ${3}      | ${5}     | ${0}          | ${3}        | ${false}
      ${"Greek acute accent"}               | ${"ὅτι οὐ"}                                   | ${0}       | ${3}      | ${5}     | ${0}          | ${3}        | ${false}
      ${"Greek smooth breathing"}           | ${"ἔπραξας"}                                  | ${0}       | ${7}      | ${5}     | ${0}          | ${7}        | ${false}
      ${"Greek with combining underdot"}    | ${"τ]α̣σ̣χὼν τὴν"}                              | ${0}       | ${6}      | ${5}     | ${0}          | ${6}        | ${false}
      ${"Greek diaeresis"}                  | ${"Τῦβι μηνὸς"}                               | ${0}       | ${4}      | ${5}     | ${0}          | ${4}        | ${false}
      ${"Greek grave accent"}               | ${"μηνὸς τόκον"}                              | ${0}       | ${5}      | ${5}     | ${0}          | ${5}        | ${false}
      ${"Greek mixed accents"}              | ${"ἀσπάζεταί σαι"}                            | ${0}       | ${9}      | ${5}     | ${0}          | ${9}        | ${false}
      ${"Greek chi with underdot"}          | ${"τινα̣ἂν χ̣ρ̣ή̣ ̣ζ̣ις"}                           | ${0}       | ${6}      | ${5}     | ${0}          | ${6}        | ${false}
      ${"Greek eta with underdot"}          | ${"δήλω̣"}                                     | ${0}       | ${5}      | ${5}     | ${0}          | ${5}        | ${false}
      ${"Papyri brackets and lacunae"}      | ${"[ca. 12 - 15]ω"}                           | ${0}       | ${13}     | ${5}     | ${0}          | ${13}       | ${false}
      ${"Square brackets text"}             | ${"1.[π-  .. τ]ῶν"}                           | ${0}       | ${11}     | ${5}     | ${0}          | ${11}       | ${false}
      ${"Parenthetical marks"}              | ${"«μέχρι»(*) τῆς"}                           | ${0}       | ${7}      | ${5}     | ${0}          | ${7}        | ${false}
      ${"Editorial marks guillemets"}       | ${"«ἡ»(*) ἀδελ"}                              | ${0}       | ${4}      | ${5}     | ${0}          | ${4}        | ${false}
      ${"Papyri vacat notation"}            | ${"διδῶ. ( vac. ) ἀσπάζεταί"}                 | ${0}       | ${5}      | ${5}     | ${0}          | ${5}        | ${false}
      ${"Double hyphen lacuna"}             | ${"1.------ 1.["}                             | ${0}       | ${8}      | ${5}     | ${0}          | ${8}        | ${false}
      ${"Mixed brackets and text"}          | ${"[σόν μοι  -ca.?- ]"}                       | ${0}       | ${8}      | ${5}     | ${0}          | ${8}        | ${false}
      ${"Greek with line number"}           | ${"v 1.[ -ca.?-  παρὰ"}                       | ${0}       | ${13}     | ${5}     | ${0}          | ${13}       | ${false}
      ${"Uncertain text with dots"}         | ${"[π-  .. τ]ῶν"}                             | ${0}       | ${9}      | ${5}     | ${0}          | ${9}        | ${false}
      ${"Text with asterisk marks"}         | ${"σαι(*) πολλὰ"}                             | ${0}       | ${4}      | ${5}     | ${0}          | ${4}        | ${false}
      ${"Complex papyri line"}              | ${"r 1.------ 1.[ - ca. 12 - 15]ω φιλανθρω-"} | ${0}       | ${20}     | ${5}     | ${0}          | ${20}       | ${false}
      ${"Hyphenated Greek word"}            | ${"φιλανθρω-2.[π-  .. τ]ῶν"}                  | ${0}       | ${9}      | ${5}     | ${0}          | ${9}        | ${false}
      ${"Restored text in brackets"}        | ${"3.[πρὸς Ῥ]οῦφον"}                          | ${0}       | ${10}     | ${5}     | ${0}          | ${10}       | ${false}
      ${"Uncertain letters dots"}           | ${"4.[ὅτι ο]ὐ καλῶς"}                         | ${0}       | ${8}      | ${5}     | ${0}          | ${8}        | ${false}
      ${"Line with underdots"}              | ${"5.[τ]α̣σ̣χὼν τὴν"}                           | ${0}       | ${7}      | ${5}     | ${0}          | ${7}        | ${false}
      ${"Multiple combining marks"}         | ${"ή̣ ̣ζ̣ις δήλω̣"}                               | ${0}       | ${6}      | ${5}     | ${0}          | ${6}        | ${false}
      ${"Papyri section divider"}           | ${"12.------ v"}                              | ${0}       | ${11}     | ${5}     | ${0}          | ${11}       | ${false}
      ${"Partial restoration"}              | ${"[ριδος]"}                                  | ${0}       | ${7}      | ${5}     | ${0}          | ${7}        | ${false}
      ${"Greek genitive forms"}             | ${"παρὰ  -ca.?- ]ος ἱερέως"}                  | ${0}       | ${15}     | ${5}     | ${0}          | ${15}       | ${false}
      ${"Word with multiple accents"}       | ${"Θοή[ριδος]"}                               | ${0}       | ${10}     | ${5}     | ${0}          | ${10}       | ${false}
      ${"Editorial asterisk marks"}         | ${"ἤ(*) τινα̣ἂν"}                              | ${0}       | ${4}      | ${5}     | ${0}          | ${4}        | ${false}
      ${"Combining underdot iota"}          | ${"τινα̣ἂν"}                                   | ${0}       | ${6}      | ${5}     | ${0}          | ${6}        | ${false}
      ${"Multiple underdots sequence"}      | ${"χ̣ρ̣ή̣ ̣ζ̣ις"}                                  | ${0}       | ${6}      | ${5}     | ${0}          | ${6}        | ${false}
      ${"Underdot omega"}                   | ${"δήλω̣[σόν"}                                 | ${0}       | ${5}      | ${5}     | ${0}          | ${5}        | ${false}
      ${"Greek with shift needed"}          | ${"φιλανθρω-2.[π-  .. τ]ῶν"}                  | ${2}       | ${8}      | ${5}     | ${0}          | ${9}        | ${true}
      ${"Bracket text shift"}               | ${"[πρὸς Ῥ]οῦφον"}                            | ${1}       | ${9}      | ${5}     | ${0}          | ${10}       | ${true}
      ${"Underdot text shift"}              | ${"τ]α̣σ̣χὼν τὴν"}                              | ${2}       | ${5}      | ${5}     | ${0}          | ${6}        | ${true}
    `("$description", ({ text, startIndex, stopIndex, maxShift, expectedStart, expectedEnd, expectedModified }) => {
      const rule = new TokenizeRule(text, maxShift);
      const result = rule.apply({ start: startIndex, end: stopIndex } as any);

      expect(text.substring(expectedStart, expectedEnd)).toBe(
        text.substring(result.annotation.start, result.annotation.end),
      );
      expect(result.annotation.start).toBe(expectedStart);
      expect(result.annotation.end).toBe(expectedEnd);
      expect(result.rule_applied).toBe(expectedModified);
    });

    it("handles full papyri line with all special characters", () => {
      const text = "r 1.------ 1.[ - ca. 12 - 15]ω φιλανθρω-2.[π-  .. τ]ῶν λοιπῶν μηνῶν";
      const rule = new TokenizeRule(text, 5);
      const result = rule.apply({ start: 10, end: 30 } as any);
      expect(result).toBeDefined();
      expect(result.annotation.start).toBeGreaterThanOrEqual(5);
      expect(result.annotation.end).toBeLessThanOrEqual(35);
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
