import { Translations } from './translations.interface';
import { InterpretationText } from './interpretation-text.type';

export interface LuscherFunction extends Translations<InterpretationText> {
  asterisks?: number;
  percentage?: number;
}
