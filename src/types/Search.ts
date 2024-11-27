export interface SearchAnnotation {
  tm_id: number;
  title: string;
  year_begin: number;
  year_end: number;
  id: number;
  flag_needs_attention: boolean;
  flag_review_done: boolean;
}

export interface SearchFilter {
  id: string;
  field: string;
  value: string[];
}

export interface Search {
  count: number;
  data: SearchAnnotation[];
  filters: SearchFilter[];
}

export type Filter = {
  id: string | number;
  name: string;
};

export type Filters = {
  era: Filter[];
  level_category_category: Filter[];
  project: Filter[];
  flag_review_done: Filter[];
  flag_needs_attention: Filter[];
};

export type SearchDto = Record<string, number[]>;
