import {
  type AnnotatedText,
  type AnnotationStyle,
  createAnnotatedText,
  TextLineAdapter,
  WordSnapper,
} from "@ghentcdh/annotated-text";
import {
  annotationColors,
  annotationHighlightColors,
} from "../styles/annotation-colors.ts";
import { EvwritConsts } from "../utils/textConfig.ts";
import type { AnnotationType, RuleAnnotation } from "@/types/Annotation.ts";

const DefaultConfig = { edit: false };

const gutterTypes: AnnotationType[] = ["handshift"];

const renderFn = (showGutter: boolean) => (annotation: RuleAnnotation) => {
  if (!showGutter || !annotation.type) return "highlight";

  return gutterTypes.includes(annotation.type) ? "gutter" : "highlight";
};

const styleFn = (
  annotation: RuleAnnotation,
): string | AnnotationStyle | null => {
  if (!annotation.type) return null;

  const colorMap = annotation.isModified
    ? annotationHighlightColors
    : annotationColors;

  const color = colorMap[annotation.type!];

  return { color };
};

export const createAnnotatedTextComponent = (
  id: string,
  text: string,
  { edit }: Partial<typeof DefaultConfig> = DefaultConfig,
  showOverride: boolean,
  showGutter: boolean,
  tagFn = (annotation: RuleAnnotation) =>
    (annotation.hasOverride ? "override" : "") as string,
): AnnotatedText<RuleAnnotation> => {
  return createAnnotatedText(id, {
    text: TextLineAdapter({ textOffset: EvwritConsts.textOffset }),
    annotation: {
      edit: edit,
      snapper: new WordSnapper(),
      tagConfig: {
        enabled: showOverride,
        tagFn,
      },
      render: {
        renderFn: renderFn(showGutter),
      },
      style: {
        styleFn: styleFn,
      },
    },
  })
    .updateRenderStyle("highlight", {
      borderRadius: 2,
      borderWidth: 2,
      padding: 3,
    } as any)
    .setText(text);
};
