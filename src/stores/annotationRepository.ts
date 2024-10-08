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
}
