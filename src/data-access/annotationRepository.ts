import type { Search, SearchDto } from "../types/Search";

export const DEFAULT_LIMIT = 25;

export class AnnotationRepository {
  constructor() {}

  async fetchAnnotation(annotationId: string) {
    try {
      const response = await fetch(`/text/${annotationId}/annotations`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  private buildSearchParams(filter: SearchDto, page: number, pageSize: number): URLSearchParams {
    const params = new URLSearchParams();
    params.append("limit", `${pageSize}`);
    params.append("ascending", `${25}`);
    params.append("page", `${page}`);
    params.append("orderBy", "title");
    params.append("filters[data_search_type]", "title");
    params.append("filters[project][0]", `${3}`);

    return params;
  }

  async listTexts(filter: SearchDto, page: number, pageSize: number): Promise<Search> {
    const params = this.buildSearchParams(filter, page, pageSize);

    try {
      const response = await fetch(`/text/search_api?${params.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return (await response.json()) as Search;
    } catch (error) {
      console.error(error);
    }
  }

  async paginate(filter: SearchDto, page: number, pageSize: number): Promise<number[]> {
    try {
      const params = this.buildSearchParams(filter, page, pageSize);

      const response = await fetch(`/text/paginate?${params.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return (await response.json()) as number[];
    } catch (error) {
      console.error(error);
    }
  }
}
