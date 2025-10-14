import { type AnnotatedText, createAnnotatedText, TextLineAdapter, WordSnapper } from "@ghentcdh/annotated-text";
import type { RuleAnnotation } from "@/types/Annotation.ts";

const DefaultConfig = { edit: false };

export const createAnnotatedTextComponent = (
  id: string,
  text: string,
  { edit }: Partial<typeof DefaultConfig> = DefaultConfig,
): AnnotatedText<RuleAnnotation> => {
  return createAnnotatedText(id, {
    text: TextLineAdapter(),
    annotation: {
      edit: edit,
      snapper: new WordSnapper(),
      config: { text: { padding: 4 } },
    },
  }).setText(text);
};
