import { LuscherFunction } from './luscher-function.interface';
import { Translations } from './translations.interface';

export interface InterpretationSection {
  title: Translations<string>;
  interpretation: LuscherFunction[];
}
