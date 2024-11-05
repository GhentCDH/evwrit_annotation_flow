export interface AnnotationList {
  id: number;
  text: string;
  annotations: AnnotationItem[];
  has_generic_text_structure: string;
  has_layout_text_structure: any;
}

export interface AnnotationItem {
  id: number;
  text_selection: TextSelection;
  type: string;
  properties: Properties;
  hasOverride: boolean;
  isDeleted: boolean;
  context?: Context;
}

export interface TextSelection {
  id: number;
  text_id: number;
  text: string;
  text_edited: string;
  line_number_start?: number;
  line_number_end?: number;
  selection_start: number;
  selection_length: number;
  selection_end: number;
}

export interface Properties {
  typography_punctuation?: TypographyPunctuation;
  orthography_type?: OrthographyType;
  orthography_prescription?: OrthographyPrescription;
  morpho_syntactical_subordinationContent?: MorphoSyntacticalSubordinationContent;
  morpho_syntactical_subordinationForm?: MorphoSyntacticalSubordinationForm;
  morpho_syntactical_subordinationContext?: MorphoSyntacticalSubordinationContext;
  morpho_syntactical_typeFormulaicity?: MorphoSyntacticalTypeFormulaicity;
  morpho_syntactical_typeReconstruction?: MorphoSyntacticalTypeReconstruction;
  morpho_syntactical_coherenceForm?: MorphoSyntacticalCoherenceForm;
  morpho_syntactical_coherenceContent?: MorphoSyntacticalCoherenceContent;
  morpho_syntactical_coherenceContext?: MorphoSyntacticalCoherenceContext;
  morpho_syntactical_relativisationContent?: MorphoSyntacticalRelativisationContent;
  morpho_syntactical_relativisationContext?: MorphoSyntacticalRelativisationContext;
  morpho_syntactical_relativisationForm?: MorphoSyntacticalRelativisationForm;
  gts_part?: GtsPart;
  gts_partNumber?: string;
  gts_textLevel?: GtsTextLevel;
  gts_preservationStatus: any;
}

export interface TypographyPunctuation {
  id: number;
  name: string;
  id_name: string;
}

export interface OrthographyType {
  id: number;
  name: string;
  id_name: string;
}

export interface OrthographyPrescription {
  id: number;
  name: string;
  id_name: string;
}

export interface MorphoSyntacticalSubordinationContent {
  id: number;
  name: string;
  id_name: string;
}

export interface MorphoSyntacticalSubordinationForm {
  id: number;
  name: string;
  id_name: string;
}

export interface MorphoSyntacticalSubordinationContext {
  id: number;
  name: string;
  id_name: string;
}

export interface MorphoSyntacticalTypeFormulaicity {
  id: number;
  name: string;
  id_name: string;
}

export interface MorphoSyntacticalTypeReconstruction {
  id: number;
  name: string;
  id_name: string;
}

export interface MorphoSyntacticalCoherenceForm {
  id: number;
  name: string;
  id_name: string;
}

export interface MorphoSyntacticalCoherenceContent {
  id: number;
  name: string;
  id_name: string;
}

export interface MorphoSyntacticalCoherenceContext {
  id: number;
  name: string;
  id_name: string;
}

export interface MorphoSyntacticalRelativisationContent {
  id: number;
  name: string;
  id_name: string;
}

export interface MorphoSyntacticalRelativisationContext {
  id: number;
  name: string;
  id_name: string;
}

export interface MorphoSyntacticalRelativisationForm {
  id: number;
  name: string;
  id_name: string;
}

export interface GtsPart {
  id: number;
  name: string;
  id_name: string;
}

export interface GtsTextLevel {
  id: number;
  number: number;
}

export interface Context {
  text: string;
  start: number;
  end: number;
}
