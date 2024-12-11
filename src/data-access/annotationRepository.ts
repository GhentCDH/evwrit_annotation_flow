import type { Filters, Search, SearchDto } from "../types/Search";
import type { AnnotationList } from "../types/annotation-response";
import type { AnnotationPatch, AnnotationType } from "@/types/Annotation";

export const DEFAULT_LIMIT = 25;

export class AnnotationRepository {
  constructor() {}

  async fetchAnnotation(annotationId: string | number) {
    return this.sendJsonRequest<AnnotationList>({ url: `/text/${annotationId}/annotations`, method: "GET" });
  }

  async filters(): Promise<Filters> {
    return this.sendJsonRequest<Filters>({ url: `/text/search_flags/filters`, method: "GET" });
  }

  async listTexts(
    filter: SearchDto,
    page: number,
    pageSize: number,
    orderBy: string,
    ascending: 0 | 1,
  ): Promise<Search> {
    const params = this.buildSearchParams(filter, page, pageSize, orderBy, ascending);

    return this.sendJsonRequest<Search>({ url: `/text/search_flags?${params.toString()}`, method: "GET" });
  }

  async paginate(
    filter: SearchDto,
    page: number,
    pageSize: number,
    orderBy: string,
    ascending: 0 | 1,
  ): Promise<number[]> {
    const search = await this.listTexts(filter, page, pageSize, orderBy, ascending);

    return search.data.map((d) => d.id);
  }

  async patchAnnotation(annotationId: string | number, type: AnnotationType, annotation: AnnotationPatch) {
    return this.sendJsonRequest<number[]>({
      url: `/annotation/${type}/${annotationId}/override`,
      method: "PATCH",
      body: annotation,
    });
  }

  async reviewDone(textId: string | number) {
    return this.sendJsonRequest<number[]>({
      url: `/text/${textId}/flags`,
      method: "PATCH",
      body: { review_done: true, needs_attention: false },
    });
  }

  async needsAttention(textId: string | number) {
    return this.sendJsonRequest<number[]>({
      url: `/text/${textId}/flags`,
      method: "PATCH",
      body: { review_done: false, needs_attention: true },
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
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (response.status === 401) {
        window.location.reload();
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error(error as any);
    }
  }

  private buildSearchParams(
    filter: SearchDto,
    page: number,
    pageSize: number,
    orderBy: string,
    ascending: 0 | 1,
  ): URLSearchParams {
    const params = new URLSearchParams();
    params.append("limit", `${pageSize}`);
    params.append("ascending", `${ascending}`);
    params.append("page", `${page}`);
    params.append("orderBy", orderBy);

    const ignoreKeys = ["page", "orderBy", "ascending"];

    Object.entries(filter).forEach(([key, values]) => {
      if (ignoreKeys.includes(key)) return;

      values.forEach((value, index) => {
        params.append(`filters[${key}][${index}]`, `${value}`);
      });
    });

    return params;
  }
}
