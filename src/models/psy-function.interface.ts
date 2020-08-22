import { Translations } from './translations.interface';
import { MinusFunctionTranslation } from './minus-function-translation.interface';

export interface PsyFunction extends Translations<string | MinusFunctionTranslation> {
  asterisks?: number;
  percentage?: number;
}
