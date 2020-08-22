import { PsyFunction } from './psy-function.interface';
import { Translations } from './translations.interface';

export type LuscherFunction = {
  title: Translations<string>;
 } & {
   [key: string]: PsyFunction;
 };
