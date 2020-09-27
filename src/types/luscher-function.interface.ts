import { Translations } from './translations.interface';
import { MinusFunction } from './minus-function.interface';

export interface LuscherFunction extends Translations<string | MinusFunction<string>> {
  asterisks?: number;
  percentage?: number;
}
