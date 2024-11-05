export interface SearchAnnotation {
  tm_id: number;
  title: string;
  year_begin: number;
  year_end: number;
  id: number;
}

export interface Search {
  count: number;
  data: SearchAnnotation[];
  search: SearchAnnotation;
  filters: any;
  aggregation: any;
}

export type AnnotationList = any;

export type SearchDto = unknown;
