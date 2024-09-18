<script setup lang="ts">
import {ref, onMounted, computed, watch} from 'vue'
import { Annotation } from '@ghentcdh/vue-component-annotated-text';
const data = ref<Map<number, any>>(new Map()); 
const loading = ref(true); 
const error = ref<string | null>(null);   
const selectedFilters = ref<string[]>([]); 
const filterTypes = ['language', 'typography', 'orthography', 'lexis', 'morpho_syntactical', 'handshift', 'ltsa', 'gtsa', 'gts', 'lts'];
const textId = ref<number | null>(72423); 

const fetchAnnotations = async (id: number) => {
  //loading.value = true;
  try {
    const response = await fetch(`/text/${id}/annotations`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();

    const annotationsMap = new Map();
    result.annotations.forEach((annotation: any) => {
      annotationsMap.set(annotation.id, annotation);
    });

    data.value = annotationsMap;  
  } catch (err) {
    error.value = String(err); 
  } finally {
    loading.value = false;  
  }
};

onMounted(() => {
  if (textId.value !== null) {
    fetchAnnotations(textId.value);
  }
});
watch(textId, (newId) => {
  if (newId !== null) {
    fetchAnnotations(newId);
  }
});
const filterAnnotations = () => {
  if (!data.value.size) return [];  
  if (selectedFilters.value.length === 0) return Array.from(data.value.values());


  return Array.from(data.value.values()).filter((annotation: any) =>
    selectedFilters.value.includes(annotation.type)
  );
};
const filteredData = computed(() => filterAnnotations())
</script>

<template>
  <div>
    <label for="textId"></label>
    <input type="number" v-model="textId" id="textId" placeholder="Tekst-ID" />
  </div>
  <div>
    <header>
      <div class="checkbox-container">
        <div v-for="type in filterTypes" :key="type">
        <input 
          type="checkbox" 
          :id="type" 
          :value="type" 
          v-model="selectedFilters" 
        />
        <label :for="type">
          {{ type }}
        </label>
        </div>
      </div>
    </header>

    <div v-if="loading">Bezig met laden...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="filteredData.length">
      <div v-for="annotation in filteredData" :key="annotation.id">
        <div>
          <strong>{{ annotation.type }}</strong>: {{ annotation.text_selection.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Algemene instellingen voor de header */
header {
  padding: 20px 10px;
  background-color: #f8f9fa; /* Lichte achtergrondkleur voor de header */
  border-bottom: 1px solid #dee2e6; /* Lichte rand onder de header */
  display: flex;
  justify-content: center; /* Centreer de inhoud horizontaal */
  align-items: center; /* Centreer de inhoud verticaal */
}

/* Container voor de checkboxes */
.checkbox-container {
  display: flex;
  flex-wrap: wrap; /* Zorg ervoor dat de checkboxes naar de volgende regel verplaatsen indien nodig */
  gap: 15px; /* Ruimte tussen de checkboxes */
}

/* Stijl voor elk checkbox-item */
.checkbox-container div {
  display: flex;
  align-items: center; /* Zorg ervoor dat het label en de checkbox uitgelijnd zijn */
}

/* Stijl voor de checkbox zelf */
.checkbox-container input {
  margin-right: 8px; /* Ruimte tussen de checkbox en het label */
  cursor: pointer; /* Cursor verandert naar een pointer om aan te geven dat het klikbaar is */
}

/* Stijl voor de labels */
.checkbox-container label {
  font-size: 16px; /* Grotere tekstgrootte voor leesbaarheid */
  cursor: pointer; /* Cursor verandert naar een pointer om aan te geven dat het klikbaar is */
}

/* Styling voor laadbericht en foutbericht */
div[v-if="loading"],
div[v-if="error"] {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: #495057; /* Kleur voor tekst */
}

/* Styling voor de gefilterde data */
div[v-if="filteredData.length"] {
  margin-top: 20px;
}

div[v-if="filteredData.length"] > div {
  border-bottom: 1px solid #dee2e6; /* Lichte rand onder elk item */
  padding: 10px 0;
}

div[v-if="filteredData.length"] strong {
  font-weight: bold;
}

div[v-if="filteredData.length"] div {
  margin-bottom: 10px; /* Ruimte tussen de annotaties */
}
</style>