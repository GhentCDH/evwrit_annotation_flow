import Tokenizr from "tokenizr";

//returns an array of tokens for a text, uses a defined word boundry
export function tokenize(text: string) {
  const lexer = new Tokenizr();

  //ignore word boundries
  lexer.rule(/†/, (ctx: { accept: (arg0: string) => void }) => {
    //ctx.accept("start char")
    ctx.accept("start");
  });

  //ignore line numbers
  lexer.rule(/\d+\./, (ctx: { ignore: () => void }) => {
    //ctx.accept("gutter")
    ctx.ignore();
  });

  //ignore whitespace
  lexer.rule(/(\s+)|(,)|\./, (ctx: { ignore: () => void }) => {
    //ctx.accept("whitespace or typograpy")
    ctx.ignore();
  });

  //token
  /* eslint-disable */
  lexer.rule(/[^\s,\.]+/, (ctx: { accept: (arg0: string) => void }) => {
    ctx.accept("token");
  });

  //parse the text
  lexer.input(text);
  return lexer.tokens();
}

/**
 * Searches through a text and returns start index positions if the search query
 * is found.
 * @param text the text to search through
 * @param search the search query to find in the text
 * @returns the start index positions for the query. If no indexes are found then
 * an empty array is returned.
 */
export function findAllIndexesOf(text: string, search: string): number[] {
  if (
    !text ||
    !search ||
    typeof text !== "string" ||
    typeof search !== "string" ||
    text.length == 0 ||
    search.length == 0
  ) {
    return [];
  }
  let indexes = [];
  let index = text.indexOf(search, 0);
  while (index != -1) {
    indexes.push(index);
    index = text.indexOf(search, index + 1);
  }
  return indexes;
}

export interface AnnotationFix {
  start: number;
  end: number;
  modified: boolean;
}

/**
 * Tries to match the text associated with an annotation to the full text and modifies te char start and stop indexes.
 *
 * @param text The annotated text.
 * @param annotationText The text associated with the annotation.
 * @param annotationStartCharIndex The current, unfixed annotation start character index.
 * @param annotationStopCharIndex The current, unfixed annotation stop charactar index.
 * @returns An array in three parts: the fixed start and stop index and a boolean
 * representing if the annotation text has been found.
 *
 */
export function shiftToAnnotationMetaDataText(
  text: string,
  annotationText: string,
  annotationStartCharIndex: number,
  annotationStopCharIndex: number,
  maxShift: number,
): AnnotationFix {
  const annotationLength = annotationStopCharIndex - annotationStartCharIndex;
  if (annotationLength != annotationText.length) {
    console.log(
      "Warning: annotation text length",
      annotationText.length,
      ": ",
      annotationText,
      " and annotation length do not match",
      annotationLength,
    );
  }

  //strict matching, no fuzzy search
  //let indexes = [...text.matchAll(new RegExp(annotationText, 'g'))].map(a => a.index);
  //finds only first
  let indexes = findAllIndexesOf(text, annotationText);

  //only keep indexes close to start
  let filteredIndexes = indexes.filter((startIndex) => Math.abs(startIndex - annotationStartCharIndex) <= maxShift);
  //console.log("Indexes",indexes,filteredIndexes);
  if (filteredIndexes.length == 1) {
    //use the annotation text to determine end char index
    //console.log("fixes",[filteredIndexes[0],filteredIndexes[0] + annotationText.length]);
    return {
      start: filteredIndexes[0]!,
      end: filteredIndexes[0]! + annotationText.length,
      modified: true,
    };
  }

  //no single clear acceptable result
  return { start: annotationStartCharIndex, end: annotationStopCharIndex, modified: false };
}
