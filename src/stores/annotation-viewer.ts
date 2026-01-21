import {
  type AnnotatedText,
  type AnnotationId,
} from "@ghentcdh/annotated-text";
import { v4 as uuidv4 } from "uuid";
import { computed, ref } from "vue";
import { createAnnotatedTextComponent } from "../components/createAnnotatedTextComponent.ts";
import { filterAnnotations } from "../utils/filter.utils.ts";
import type {
  AnnotationType,
  ModifiedAnnotation,
  RuleAnnotation,
} from "@/types/Annotation.ts";

export class AnnotationView {
  public readonlyView!: AnnotatedText<RuleAnnotation> | null;
  public editView!: AnnotatedText<RuleAnnotation> | null;

  protected text: string = "";
  private originalAnnotations: RuleAnnotation[] = [];
  public updatedAnnotations: RuleAnnotation[] = [];
  private limit: { start: number; end: number } | null = null;
  public readonly viewerId: string;
  public readonly editId: string;

  constructor(
    idPrefix: string,
    private readonly moveCallback: (
      annotationUuid: AnnotationId,
      annotation: RuleAnnotation,
    ) => void,
    private readonly moveEndCallback: (
      moveId: AnnotationId,
      annotation: RuleAnnotation,
    ) => void,
    private readonly dblClickCallback: (annotation: RuleAnnotation) => void,
    private readonly debugMode: boolean,
    private readonly showGutter: boolean,
  ) {
    const uuid = uuidv4();
    this.viewerId = `${idPrefix}--viewer--${uuid}`;
    this.editId = `${idPrefix}--edit--${uuid}`;
  }

  initViewer() {
    this.readonlyView = createAnnotatedTextComponent(
      this.viewerId,
      this.text,
      { edit: false },
      this.debugMode,
      this.showGutter,
    );

    if (this.limit) {
      this.changeLimit(this.limit.start, this.limit.end);
    }

    this.readonlyView.setAnnotations(this.originalAnnotations ?? []);
    this.readonlyView.on("double-click", (data: any) =>
      this.dblClickCallback(data.data.annotation),
    );
    return this.readonlyView;
  }

  init(id: string) {
    if (id === this.editId) this.initEditor();
    if (id === this.viewerId) this.initViewer();
  }

  initEditor() {
    this.editView = createAnnotatedTextComponent(
      this.editId,
      this.text,
      { edit: true },
      this.debugMode,
      this.showGutter,
      (annotation) => annotation.id as string,
    );
    if (this.limit) {
      this.editView.changeTextAdapterConfig("limit", this.limit);
    }
    setTimeout(() => {
      let moveId: AnnotationId;
      // Delay to ensure the component is fully initialized
      this.editView
        ?.setAnnotations(this.updatedAnnotations ?? [])
        .on("annotation-edit--move", (event) => {
          // Get the dummy id to put it here.
          moveId = event.data.moveId;
          this.moveCallback(event.data.moveId, event.data.annotation);
        })
        .on("annotation-edit--end", (event) => {
          this.moveEndCallback(moveId, event.data.annotation);
        })
        .on("double-click", (data: any) =>
          this.dblClickCallback(data.data.annotation),
        );
    }, 200);
    return this.editView;
  }

  updateText(text: string) {
    this.text = text;
    this.editView?.setText(text);
    this.readonlyView?.setText(text);
    return this;
  }

  setUpdatedAnnotations(updatedAnnotations: RuleAnnotation[]) {
    this.updatedAnnotations = updatedAnnotations;
    this.editView?.setAnnotations(updatedAnnotations);
    return this;
  }

  setOriginalAnnotations(originalAnnotations: RuleAnnotation[]) {
    this.originalAnnotations = originalAnnotations;
    this.readonlyView?.setAnnotations(originalAnnotations);
    return this;
  }

  protected changeLimit(start: number, end: number) {
    this.limit = { start, end };
    this.readonlyView?.changeTextAdapterConfig("limit", { start, end });
    this.editView?.changeTextAdapterConfig("limit", { start, end });
    return this;
  }

  destroy(id?: string) {
    if (!id || id === this.editId) {
      this.editView?.destroy();
      this.editView = null;
    }
    if (!id || id === this.viewerId) {
      this.readonlyView?.destroy();
      this.readonlyView = null;
    }
  }

  clearAnnotations() {
    this.setOriginalAnnotations([]).setUpdatedAnnotations([]);
    return this;
  }

  updateAnnotation(annotation: RuleAnnotation) {
    const index = this.updatedAnnotations.findIndex(
      (a) => a.id === annotation.id,
    );
    if (index !== -1) {
      this.updatedAnnotations[index] = annotation;
    } else {
      this.updatedAnnotations.push(annotation);
    }

    this.editView?.setAnnotations(this.updatedAnnotations);

    return this;
  }
}

export class SingleAnnotationView extends AnnotationView {
  public displayEdit = false;

  constructor(
    public readonly annotation: ModifiedAnnotation,
    moveCallback: (
      annotationId: AnnotationId,
      annotation: RuleAnnotation,
    ) => void,
    moveEndCallback: (moveId: AnnotationId, annotation: RuleAnnotation) => void,
    doubleClickCallback: (annotation: RuleAnnotation) => void,
  ) {
    super(
      `annotated-text-edit-item`,
      moveCallback,
      moveEndCallback,
      doubleClickCallback,
      false,
      false,
    );
    this.setLimit(annotation.original);
    super.setOriginalAnnotations([annotation.original]);
    super.setUpdatedAnnotations([annotation.processed]);
    this.displayEdit = this.annotation.isModified;
  }

  public get id() {
    return this.annotation.id;
  }

  public get metadata() {
    return this.annotation.original.metadata;
  }

  public updateText(text: string) {
    super.updateText(text);
    super.setOriginalAnnotations([this.annotation.original]);
    super.setUpdatedAnnotations([this.annotation.processed]);

    return this;
  }

  public setLimit(startEnd: Pick<RuleAnnotation, "end" | "start">) {
    const start = Math.min(
      this.annotation.original.start,
      this.annotation.processed.start,
      startEnd?.start,
    );
    const end = Math.max(
      this.annotation.original.end,
      this.annotation.processed.end,
      startEnd?.end,
    );
    super.changeLimit(start, end);

    super.setOriginalAnnotations([this.annotation.original]);
    super.setUpdatedAnnotations([this.annotation.processed]);
  }

  public updateAnnotation(annotation: RuleAnnotation): this {
    this.displayEdit = true;
    this.setLimit(annotation);
    super.updateAnnotation(this.annotation.processed);

    return this;
  }
}

export class AnnotationViewer {
  public readonly completeTextView: AnnotationView;
  private views = new Map<AnnotationId, SingleAnnotationView>();
  private text!: string;
  private annotations: ModifiedAnnotation[] = [];
  private showOnlyDuplicates: boolean = false;
  private showModified: boolean = false;
  private selectedFilters: AnnotationType[] = [];

  public displayModified = ref([] as AnnotationId[]);

  constructor(
    private readonly highlightCallback: (annotationId: AnnotationId) => void,
    private readonly debugLine: (annotationId: AnnotationId) => void,
    private readonly debugMode: boolean,
  ) {
    this.completeTextView = new AnnotationView(
      `annotation-text-viewer`,
      (annotationId: AnnotationId, annotation) =>
        this.updateSingleView(annotationId, annotation),
      (moveId: AnnotationId, annotation) =>
        this.endAddSingleView(moveId, annotation),
      (annotation) => this.dblClick(annotation),
      debugMode,
      true,
    );
  }

  updateText(text: string) {
    this.text = text;
    this.completeTextView.updateText(text);

    return this;
  }

  setAnnotations(annotations: ModifiedAnnotation[]) {
    this.annotations = annotations;

    this.registerAll();

    this._filterAnnotations();

    return this;
  }

  setFilters(
    filters: {
      selectedFilters?: AnnotationType[];
      showOnlyDuplicates?: boolean;
      showModified?: boolean;
    },
    force = false,
  ) {
    if (!filters) {
      console.warn("No filters provided");
      return this;
    }

    const selectedFilters =
      filters.selectedFilters ?? this.selectedFilters ?? [];
    const showOnlyDuplicates =
      filters.showOnlyDuplicates ?? this.showOnlyDuplicates;
    const showModified = filters.showModified ?? this.showModified;

    const hasChanged =
      this.showOnlyDuplicates !== showOnlyDuplicates ||
      this.showModified !== showModified ||
      this.selectedFilters?.toString() !== selectedFilters.toString();

    if (!force && !hasChanged) {
      console.warn("filter not changed");
      return this;
    }

    this.showOnlyDuplicates = showOnlyDuplicates;
    this.showModified = showModified;
    this.selectedFilters = selectedFilters;

    this._filterAnnotations();
    return this;
  }

  private _filterAnnotations() {
    if (!this.annotations) {
      this.completeTextView.clearAnnotations();
      this.displayModified.value = [];
      return this;
    }

    const filtered = filterAnnotations(
      this.selectedFilters,
      this.annotations,
      this.showModified,
      this.showOnlyDuplicates,
    );

    const original = filtered.map((a) => a.original);
    const processed = filtered.map((a) => a.processed);

    this.displayModified.value = filtered
      .filter((a) => a.isModified || a.duplicates.length > 1)
      .map((a) => a.id);

    this.completeTextView
      .setOriginalAnnotations(original)
      .setUpdatedAnnotations(processed);

    return this;
  }

  private registerAll() {
    this.annotations.forEach((annotation) => {
      this.registerAnnotationView(annotation.id, annotation);
    });
  }

  private registerAnnotationView(
    annotationId: string,
    annotation: ModifiedAnnotation,
  ) {
    const view =
      this.views.get(annotationId) ??
      new SingleAnnotationView(
        annotation,
        (annotationId, annotation) =>
          this.updateCompleteView(annotationId, annotation),
        (annotationId, annotation) =>
          this.endUpdateCompleteView(annotationId, annotation),
        () => this.debugLine(annotationId),
      );

    view.updateText(this.text);
    this.views.set(annotationId, view);

    return view;
  }

  modifiedViews = computed(() =>
    this.displayModified.value.map((id) => {
      return this.getView(id);
    }),
  );

  getView(annotationId: AnnotationId) {
    return this.views.get(annotationId) as SingleAnnotationView;
  }

  reset() {
    this.text = "";

    this.completeTextView.updateText("").clearAnnotations();

    Object.values(this.views).forEach((view) => {
      view.destroy();
    });
    this.views.clear();
    this.annotations = [];
    this._filterAnnotations();
  }

  private updateModified(annotation: RuleAnnotation) {
    const find = this.annotations.find((a) => a.id === annotation.id);
    if (!find) return;

    find.processed = annotation;
    find.isModified = true;
    if (!this.displayModified.value.includes(annotation.id)) {
      this.displayModified.value = this.displayModified.value.concat([
        annotation.id,
      ]);
    }
  }

  private updateCompleteView(
    annotationUuid: AnnotationId,
    annotation: RuleAnnotation,
  ) {
    this.updateEditView(this.completeTextView, annotation);
  }

  private updateEditView(view: AnnotationView, annotation: RuleAnnotation) {
    let annotations = view.updatedAnnotations ?? [];
    annotations = annotations.filter((a) => a.id !== annotation.id);
    annotations.push(annotation);
    view.setUpdatedAnnotations(annotations);
  }

  private updateEndEditView(
    view: AnnotationView,
    removeId: AnnotationId,
    annotation: RuleAnnotation,
  ) {
    this.updateModified(annotation);

    let annotations = view.updatedAnnotations ?? [];
    annotations = annotations.filter(
      (a) => a.id !== annotation.id || a.id !== removeId,
    );
    annotations.push(annotation);
    view.setUpdatedAnnotations(annotations);
  }

  private endUpdateCompleteView(
    moveId: AnnotationId,
    annotation: RuleAnnotation,
  ) {
    this.updateEndEditView(this.completeTextView, moveId, annotation);
  }

  private updateSingleView(
    annotationId: AnnotationId,
    annotation: RuleAnnotation,
  ) {
    const view = this.views.get(annotation.id);

    if (!view) return;

    view.setLimit(annotation);
    this.updateEditView(view, annotation);
  }

  private endAddSingleView(moveId: AnnotationId, annotation: RuleAnnotation) {
    const view = this.views.get(annotation.id);

    if (!view) return;
    view.setLimit(annotation);
    this.updateEndEditView(view, moveId, annotation);
  }

  private dblClick(annotation: RuleAnnotation) {
    this.debugLine(annotation.id);
    this.highlightCallback(annotation.id);
  }

  removeAnnotation(id: string) {
    this.annotations = this.annotations.filter((a) => a.id !== id);
    this._filterAnnotations();
  }

  updateAnnotations() {
    this._filterAnnotations();
  }
}
