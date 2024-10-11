<template>
  <header class="border border-x-0 mb-2 p-2 shadow">
    <div class="pb-2">
      <label class="flex items-center gap-2" for="textId"
        >Text ID
        <input
          class="input input-bordered w-full max-w-xs"
          type="number"
          @change="handleChangedId"
          :value="textId"
          id="textId"
          placeholder="Tekst-ID"
        />
      </label>
    </div>
    <div class="flex">
      <label class="swap btn">
        <input type="checkbox" @click="showRuleModifiedAnnotations" />
        <div class="swap-on">Alle annotaties</div>
        <div class="swap-off">Enkel Gewijzigde annotaties</div>
      </label>
      <div class="flex-grow">
        <TypeFilter v-model="selectedFilters" />
      </div>
    </div>
  </header>

  <div>
    <div class="grid grid-cols-3">
      <Card :title="'Originele Tekst'">
        <AnnotatedText :annotations="filterAnnotations.filteredDataAnnotations.value" :lines="textLines" />
      </Card>
      <Card :title="'Verwerkte Tekst'">
        <div class="all-initial">
          <AnnotatedText
            :annotations="filterAnnotations.filteredProcessedAnnotations.value"
            :lines="textLines"
            :allow-edit="true"
            :listen-to-on-update-start="true"
            :listen-to-on-updating="true"
            @annotation-update-begin="onAnnotationUpdateBegin"
            @annotation-updating="onAnnotationUpdating"
            @annotation-update-end="onAnnotationUpdateEnd"
          />
        </div>
      </Card>
      <Card :title="'Aangepaste Annotaties'">
        <ActionButtons
          :modifiedAnnotationsMap="modifiedAnnotationsMap"
          :filteredModifiedAnnotations="filterAnnotations.filteredModifiedAnnotations.value"
          v-model="selectedAnnotationIds"
        />

        <div
          class="flex flex-row gap-2"
          v-for="annotation in filterAnnotations.filteredModifiedAnnotations.value"
          :key="annotation.id"
        >
          <AnnotationEdit
            :annotation="annotation"
            v-model="selectedAnnotationIds"
            :originalAnnotation="filterAnnotations.getOriginalAnnotation(annotation.id)"
            :textLines="textLines"
            @confirmAnnotation="confirmAnnotation"
            @cancelAnnotation="cancelAnnotation"
          />
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { AnnotatedText, UpdateAnnotationState } from "@ghentcdh/vue-component-annotated-text";
import { AnnotationRepository } from "./stores/annotationRepository";
import { textToLines } from "./text_utilities";
import { normalizeAnnotation } from "./utils";
import { WordSnapper } from "./lib/snapper/WordSnapper";
import {
  AnnotationTextRule,
  TokenizeRule,
  SanitizeAnnotationRule,
  AnnotationRuleSet,
  type AnnotationRuleResult,
} from "./utils/annotation_utilities";
import type { RuleAnnotation } from "./types/Annotation";
import AnnotationEdit from "./components/AnnotationEdit.vue";
import Card from "./components/UiCard.vue";
import TypeFilter from "./components/TypeFilter.vue";
import { FilterAnnotationsStore, type FilterValue } from "./stores/FilterStore";
import ActionButtons from "./components/ActionButtons.vue";
import { annotationHighlightColors } from "./styles/annotation-colors";

let snapper: WordSnapper;
const loading = ref(true);
const error = ref<string | null>(null);
const text = ref<string>("");
const selectedFilters = ref<FilterValue[]>([]);
const textId = ref<string | "">("72427");
const selectedAnnotationIds = ref<string[]>([]);
const showModified = ref<boolean>(false);
const processedAnnotationsMap = ref<Map<string, RuleAnnotation>>(new Map());
const originalAnnotations = ref<Map<string, RuleAnnotation>>(new Map());

//#region Filter
const modifiedAnnotationsMap = ref<Map<string, RuleAnnotation>>(new Map());
const filterAnnotations = new FilterAnnotationsStore({
  originalAnnotations,
  processedAnnotationsMap,
  modifiedAnnotationsMap,
  selectedFilters,
  showModified,
});

const textLines = computed(() => textToLines(text.value));

//#endregion

const handleChangedId = (event: Event) => {
  const target = event.target as HTMLInputElement;
  textId.value = target.value;
};
const resetMaps = () => {
  modifiedAnnotationsMap.value.clear();
  processedAnnotationsMap.value.clear();
  originalAnnotations.value.clear();
};
onMounted(() => {
  if (textId.value !== null) handleFetchedData(textId.value);
});
watch(textId, (newId) => {
  if (newId !== null) {
    resetMaps();
    handleFetchedData(newId);
  }
});
watch(text, (newText) => {
  snapper = new WordSnapper(newText);
});

const handleFetchedData = async (id: string) => {
  try {
    const annotationRepository = new AnnotationRepository();
    const result = await annotationRepository.fetchAnnotation(id);
    text.value = result.text;
    result.annotations.forEach((annotation: any) => {
      const normalizedAnnotation = normalizeAnnotation(annotation, text.value);
      originalAnnotations.value.set(annotation.id, normalizedAnnotation);
    });
    applyRules(originalAnnotations.value);
  } catch (err) {
    error.value = String(err);
  } finally {
    loading.value = false;
  }
};
const applyRules = (nomalizedAnnotations: Map<string, RuleAnnotation>) => {
  const tokenizeRule = new TokenizeRule(text.value, 3);
  const textRule = new AnnotationTextRule(text.value, 3);
  const sanitizeRule = new SanitizeAnnotationRule(text.value);

  const languageRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule], true, true);
  const typographyRuleSet = new AnnotationRuleSet([sanitizeRule, textRule], true, true);
  const orthographyRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule, textRule], true, true);
  const lexisRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule], true, true);
  const morphoSyntacticalRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule], true, false);
  const handshiftRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule], true, true);
  const defaultRuleSet = new AnnotationRuleSet([sanitizeRule], true, false);
  nomalizedAnnotations.forEach((nolmalizedAnnotation: RuleAnnotation) => {
    let resultAnnotation: AnnotationRuleResult = {
      annotation: {} as RuleAnnotation,
      rule_applied: false,
    };
    switch (nolmalizedAnnotation.type) {
      case "typography":
        resultAnnotation = typographyRuleSet.apply(nolmalizedAnnotation);
        break;
      case "orthography":
        resultAnnotation = orthographyRuleSet.apply(nolmalizedAnnotation);
        break;
      case "lexis":
        resultAnnotation = lexisRuleSet.apply(nolmalizedAnnotation);
        break;
      case "morpho_syntactical":
        resultAnnotation = morphoSyntacticalRuleSet.apply(nolmalizedAnnotation);
        break;
      case "handshift":
        resultAnnotation = handshiftRuleSet.apply(nolmalizedAnnotation);
        break;
      case "language":
        resultAnnotation = languageRuleSet.apply(nolmalizedAnnotation);
        break;
      default:
        //resultAnnotation = defaultRuleSet.apply(nolmalizedAnnotation);
        break;
    }
    const processedAnnotion = resultAnnotation.rule_applied ? resultAnnotation.annotation : nolmalizedAnnotation;
    if (resultAnnotation.rule_applied) {
      processedAnnotion.color = annotationHighlightColors[processedAnnotion.type as FilterValue];
      modifiedAnnotationsMap.value.set(nolmalizedAnnotation.id, processedAnnotion);
    }
    processedAnnotationsMap.value.set(nolmalizedAnnotation.id, processedAnnotion);
  });
};

// Button event handlers
const confirmAnnotation = (annotation: RuleAnnotation) => {
  console.log(`Annotatie met id ${annotation.id} is bevestigd.`);
  modifiedAnnotationsMap.value.delete(annotation.id);
};
const cancelAnnotation = (annotation: RuleAnnotation) => {
  console.log(`Annotatie met id ${annotation.id} is geannuleerd.`);
  modifiedAnnotationsMap.value.delete(annotation.id);
};
const showRuleModifiedAnnotations = () => {
  showModified.value = !showModified.value;
};

// AnnotatedText event handlers
const onAnnotationUpdateBegin = function (updateState: UpdateAnnotationState) {
  //console.log('Annotation updating begin:', updateState.annotation);
  const result = snapper.fixOffset(updateState.newStart, updateState.newEnd);
  updateState.newStart = result.start;
  updateState.newEnd = result.end;
  if (result.modified) {
    modifiedAnnotationsMap.value.set(updateState.annotation.id, updateState.annotation);
  }
  updateState.confirmStartUpdating();
};
const onAnnotationUpdating = function (updateState: UpdateAnnotationState) {
  //console.log('Annotation updating:', updateState.annotation);
  const result = snapper.fixOffset(updateState.newStart, updateState.newEnd);
  updateState.newStart = result.start;
  updateState.newEnd = result.end;
  if (result.modified) {
    modifiedAnnotationsMap.value.set(updateState.annotation.id, updateState.annotation);
  }
  updateState.confirmUpdate();
};
const onAnnotationUpdateEnd = function (updateState: UpdateAnnotationState) {
  console.log("** Edited: ", updateState.annotation);
  processedAnnotationsMap.value.set(updateState.annotation.id, updateState.annotation);
};
</script>
