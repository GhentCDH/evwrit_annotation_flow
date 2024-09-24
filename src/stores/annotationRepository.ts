export class AnnotationRepository {

    private annotationId: string;

    constructor(id: string) {
        this.annotationId = id;
    }

    async fetchAnnotation(){
        try {
            const response = await fetch(`/text/${this.annotationId}/annotations`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        }
        catch (error) {
            console.error(error);
        }

    }
}