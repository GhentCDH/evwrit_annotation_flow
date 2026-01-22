import { defineStore } from "pinia";
import { useRoute } from "vue-router";

type DefinedQueryParams = {
  debug: boolean;
  showMetadata: boolean;
  onlyDuplicates: boolean;
  onlyModified: boolean;
};

export const useQueryParams = defineStore("query-params", () => {
  const route = useRoute();

  const setQueryParam = (key: keyof DefinedQueryParams, value: boolean) => {
    const query = { ...route.query };
    query[key] = value ? "true" : "false";
    history.replaceState(
      null,
      "",
      `${location.pathname}?${new URLSearchParams(query as any).toString()}`,
    );
  };

  const getParam = (key: keyof DefinedQueryParams) => {
    return route.query[key] === "true";
  };

  if (getParam("debug")) {
    console.warn("Debug mode is enabled via query parameter.");
    // Debugger.setDebug(true);
  }

  return {
    get: getParam,
    set: setQueryParam,
  };
});
