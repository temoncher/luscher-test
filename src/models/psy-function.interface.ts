import { Translations } from './translations.interface';
import { MinusFunctionInterpretation } from './minus-function-interpretation.interface';

export interface PsyFunction extends Translations<string | MinusFunctionInterpretation> {
  asterisks?: number;
  percentage?: number;
}
