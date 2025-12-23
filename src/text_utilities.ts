/**
 * Searches through a text and returns start index positions if the search query
 * is found.
 * @param text the text to search through
 * @param search the search query to find in the text
 * @returns the start index positions for the query. If no indexes are found then
 * an empty array is returned.
 */
export function findAllIndexesOf(
  text: string,
  search: string,
  textOffset: number,
): number[] {
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
  const indexes = [];
  let index = text.indexOf(search, 0);
  while (index != -1) {
    // text index starts from 1, so add 1 to all indexes
    indexes.push(index + textOffset);
    index = text.indexOf(search, index + 1);
  }

  return indexes;
}

export interface AnnotationFix {
  start: number;
  end: number;
  modified: boolean;
}
