import { LuscherFunction } from './psy-function.interface';
import { FunctionKeys } from './function-keys';
import { Translations } from './translations.interface';

export type Interpretation = {
  title: Translations<string>;
 } & {
   [key in FunctionKeys]: LuscherFunction;
 };
