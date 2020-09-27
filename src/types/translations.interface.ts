import { InterpretationLanguage } from './enums/interpretation-language.enum';

export type Translations<T> = {
  [key in InterpretationLanguage]: T
}
