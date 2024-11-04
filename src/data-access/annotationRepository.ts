import type { Search, SearchDto } from "../types/Search";
import type { AnnotationPatch, AnnotationType } from "@/types/Annotation";

export const DEFAULT_LIMIT = 25;

export class AnnotationRepository {
  constructor() {}

  async fetchAnnotation(annotationId: string | number) {
    return this.sendJsonRequest({ url: `/text/${annotationId}/annotations`, method: "GET" });
  }

  async listTexts(filter: SearchDto, page: number, pageSize: number): Promise<Search> {
    const params = this.buildSearchParams(filter, page, pageSize);

    return this.sendJsonRequest<Search>({ url: `/text/search_api?${params.toString()}`, method: "GET" });
  }

  async paginate(filter: SearchDto, page: number, pageSize: number): Promise<number[]> {
    const params = this.buildSearchParams(filter, page, pageSize);

    return this.sendJsonRequest<number[]>({ url: `/text/paginate?${params.toString()}`, method: "GET" });
  }

  async patchAnnotation(annotationId: string | number, type: AnnotationType, annotation: AnnotationPatch) {
    return this.sendJsonRequest<number[]>({
      url: `/annotation/${type}/${annotationId}/override`,
      method: "PATCH",
      body: annotation,
    });
  }

  private async sendJsonRequest<RESPONSE, BODY = any>({
    url,
    method,
    body,
  }: {
    url: string;
    method: string;
    body?: BODY;
  }): Promise<RESPONSE> {
    console.log(url, method, body);
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error(error as any);
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
}
