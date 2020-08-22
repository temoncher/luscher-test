import { PsyFunction } from './psy-function.interface';
import { FunctionKeys } from './function-keys';
import { Translations } from './translations.interface';

export type LuscherFunction = {
  title: Translations<string>;
 } & {
   [key in FunctionKeys]: PsyFunction;
 };
