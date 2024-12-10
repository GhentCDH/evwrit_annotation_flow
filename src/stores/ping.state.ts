import { defineStore } from "pinia";
import { ref } from "vue";

const TIMOUT_MS = 1000 * 60;

export const usePingStore = defineStore("alive", () => {
  const isAlive = ref(0); // state value set to 0

  setInterval(async () => {
    const url = `/health`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      window.location.reload();
      throw new Error(error as any);
    }

    isAlive.value = isAlive.value + 1;
  }, TIMOUT_MS);

  return {
    isAlive,
  };
});
