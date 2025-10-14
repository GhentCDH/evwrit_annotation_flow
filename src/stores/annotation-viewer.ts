import { type AnnotatedText } from "@ghentcdh/annotated-text";
import { v4 as uuidv4 } from "uuid";
import { computed, ref } from "vue";
import { createAnnotatedTextComponent } from "../components/createAnnotatedTextComponent.ts";
import { filterAnnotations } from "../utils/filter.utils.ts";
import type { AnnotationType, ModifiedAnnotation, RuleAnnotation } from "@/types/Annotation.ts";

export class AnnotationView {
  public readonlyView!: AnnotatedText<RuleAnnotation> | null;
  public editView!: AnnotatedText<RuleAnnotation> | null;

  protected text: string = "";
  private originalAnnotations: RuleAnnotation[] = [];
  private updatedAnnotations: RuleAnnotation[] = [];
  private limit: { start: number; end: number } | null = null;
  public readonly viewerId: string;
  public readonly editId: string;

  constructor(
    idPrefix: string,
    private readonly moveCallback: (annotation: RuleAnnotation) => void,
    private readonly dblClickCallback: (annotation: RuleAnnotation) => void,
  ) {
    const uuid = uuidv4();
    this.viewerId = `${idPrefix}--viewer--${uuid}`;
    this.editId = `${idPrefix}--edit--${uuid}`;
  }

  initViewer() {
    this.readonlyView = createAnnotatedTextComponent(this.viewerId, this.text, { edit: false });

    if (this.limit) {
      this.changeLimit(this.limit.start, this.limit.end);
    }

    this.readonlyView.setAnnotations(this.originalAnnotations ?? []);
    this.readonlyView.on("double-click", (data) => this.dblClickCallback(data.data.annotation));
    return this.readonlyView;
  }

  init(id: string) {
    if (id === this.editId) this.initEditor();
    if (id === this.viewerId) this.initViewer();
  }

  initEditor() {
    this.editView = createAnnotatedTextComponent(this.editId, this.text, { edit: true });
    if (this.limit) {
      this.editView.changeTextAdapterConfig("limit", this.limit);
    }
    setTimeout(() => {
      // Delay to ensure the component is fully initialized
      this.editView
        ?.setAnnotations(this.updatedAnnotations ?? [])
        .on("annotation-edit--move", (data) => this.moveCallback(data.data.annotation))
        .on("double-click", (data) => this.dblClickCallback(data.data.annotation));
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
    const index = this.updatedAnnotations.findIndex((a) => a.id === annotation.id);
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
    moveCallback: (annotation: RuleAnnotation) => void,
    doubleClickCallback: (annotation: RuleAnnotation) => void,
  ) {
    super(`annotated-text-edit-item`, moveCallback, doubleClickCallback);
    this.setLimit();
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

  private setLimit() {
    const start = Math.min(this.annotation.original.start, this.annotation.processed.start);
    const end = Math.max(this.annotation.original.end, this.annotation.processed.end);

    super.changeLimit(start, end);

    super.setOriginalAnnotations([this.annotation.original]);
    super.setUpdatedAnnotations([this.annotation.processed]);
  }

  private setUpdatedAnnotations(annotations: RuleAnnotation[]) {
    return super.setUpdatedAnnotations(annotations);
  }

  private setOriginalAnnotations(annotations: RuleAnnotation[]) {
    return super.setOriginalAnnotations(annotations);
  }

  public updateAnnotation(annotation: RuleAnnotation): this {
    this.displayEdit = true;
    this.setLimit();
    super.updateAnnotation(this.annotation.processed);

    return this;
  }
}

export class AnnotationViewer {
  public completeTextView = new AnnotationView(
    `annotation-text-viewer`,
    (annotation) => this.updateSingleView(annotation),
    (annotation) => this.dblClick(annotation),
  );
  private views = new Map<string, SingleAnnotationView>();
  private text!: string;
  private annotations: ModifiedAnnotation[] = [];
  private showOnlyDuplicates: boolean = false;
  private showModified: boolean = false;
  private selectedFilters: AnnotationType[] = [];

  public displayModified = ref([] as string[]);

  constructor(
    private readonly highlightCallback: (annotationId: string) => void,
    private readonly debugLine: (annotationId: string) => void,
  ) {}

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

    const selectedFilters = filters.selectedFilters ?? this.selectedFilters ?? [];
    const showOnlyDuplicates = filters.showOnlyDuplicates ?? this.showOnlyDuplicates;
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
    console.log(this.annotations);
    if (!this.annotations) {
      console.log("no annotations");
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

    this.displayModified.value = filtered.filter((a) => a.isModified || a.duplicates.length > 1).map((a) => a.id);

    this.completeTextView.setOriginalAnnotations(original).setUpdatedAnnotations(processed);

    return this;
  }

  private registerAll() {
    this.annotations.forEach((annotation) => {
      this.registerAnnotationView(annotation.id, annotation);
    });
  }

  private registerAnnotationView(annotationId: string, annotation: ModifiedAnnotation) {
    const view =
      this.views.get(annotationId) ??
      new SingleAnnotationView(
        annotation,
        (annotation) => this.updateCompleteView(annotation),
        () => this.debugLine(annotationId),
      );

    view.updateText(this.text);
    this.views.set(annotationId, view);

    return view;
  }

  modifiedViews = computed(() =>
    this.displayModified.value.map((id) => {
      return {
        id,
        view: this.getView(id),
      };
    }),
  );

  getView(annotationId: string) {
    return this.views.get(annotationId);
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
      this.displayModified.value = this.displayModified.value.concat([annotation.id]);
    }
  }

  private updateCompleteView(annotation: RuleAnnotation) {
    this.completeTextView.updateAnnotation(annotation);
    this.updateModified(annotation);
  }

  private updateSingleView(annotation: RuleAnnotation) {
    this.updateModified(annotation);
    const view = this.views.get(annotation.id);
    view?.updateAnnotation(annotation);
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
