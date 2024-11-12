export interface SearchAnnotation {
  tm_id: number;
  title: string;
  year_begin: number;
  year_end: number;
  id: number;
}

export type SearchAggregation = { id: number; name: string; count: number; active: boolean };

export type SearchAggregations = Record<string, SearchAggregation[]>;

export interface Search {
  count: number;
  data: SearchAnnotation[];
  search: SearchAnnotation;
  filters: any;
  aggregation: SearchAggregations;
}

export type SearchDto = Record<string, number[]>;
