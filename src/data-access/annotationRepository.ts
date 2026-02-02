import type { Filters, Search, SearchDto } from "../types/Search";
import type { AnnotationList, JSend } from "../types/annotation-response";
import { useAuthStore } from "../stores/auth.store";
import type { AnnotationPatch, AnnotationType } from "@/types/Annotation";
import { getRuntimeConfig } from "../config/runtime-config.ts";

export const DEFAULT_LIMIT = 25;

export class AnnotationRepository {
  constructor() {}

  async fetchAnnotation(annotationId: string | number) {
    return this.sendJsonRequest<AnnotationList>({
      url: `/api/text/${annotationId}/annotations`,
      method: "GET",
    });
  }

  async filters(): Promise<Filters> {
    return this.sendJsonRequest<Filters>({
      url: `/api/text/search_flags/filters`,
      method: "GET",
    });
  }

  async listTexts(
    filter: SearchDto,
    page: number,
    pageSize: number,
    orderBy: string,
    ascending: 0 | 1,
  ): Promise<Search> {
    const params = this.buildSearchParams(
      filter,
      page,
      pageSize,
      orderBy,
      ascending,
    );

    return this.sendJsonRequest<Search>({
      url: `/api/text/search_flags?${params.toString()}`,
      method: "GET",
    });
  }

  async paginate(
    filter: SearchDto,
    page: number,
    pageSize: number,
    orderBy: string,
    ascending: 0 | 1,
  ): Promise<number[]> {
    const search = await this.listTexts(
      filter,
      page,
      pageSize,
      orderBy,
      ascending,
    );

    return search.data.map((d) => d.id);
  }

  async patchAnnotation(
    annotationId: string | number,
    type: AnnotationType,
    annotation: AnnotationPatch,
  ) {
    return this.sendJsonRequest<number[]>({
      url: `/api/annotation/${type}/${annotationId}/override`,
      method: "PATCH",
      body: annotation,
    });
  }

  async reviewDone(textId: string | number) {
    return this.sendJsonRequest<number[]>({
      url: `/api/text/${textId}/flags`,
      method: "PATCH",
      body: { review_done: true, needs_attention: false },
    });
  }

  async needsAttention(textId: string | number) {
    return this.sendJsonRequest<number[]>({
      url: `/api/text/${textId}/flags`,
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
      const authStore = useAuthStore();
      const token = await authStore.getToken();
      const config = getRuntimeConfig();

      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await fetch(config.EVWRIT_BASE_URL + url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });

      if (response.status === 401) {
        window.location.reload();
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonResponse = await response.json();
      const jsendResponse = jsonResponse as JSend<RESPONSE>;

      if (jsendResponse.status === "error") {
        throw new Error(
          jsendResponse.message || "Request error"
        );
      }

      if (jsendResponse.status === "fail") {
        throw new Error(
          jsendResponse.message || "Request failed"
        );
      }

      if (jsendResponse.status !== "success") {
        throw new Error(`Unexpected JSend status: ${jsendResponse.status}`);
      }

      return jsendResponse.data;
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
