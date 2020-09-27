import { Translations } from '@/types/translations.interface';
import { FunctionKeys } from '@/types/function-keys';
import { LuscherFunction } from '@/types/luscher-function.interface';

export type Interpretation = {
  title: Translations<string>;
 } & {
   [key in FunctionKeys]: LuscherFunction;
 };
