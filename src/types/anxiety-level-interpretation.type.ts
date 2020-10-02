import { InterpretationLanguage } from './enums/interpretation-language.enum';

export type AnxietyLevelInterpretation = {
  [key in InterpretationLanguage]: string;
}
