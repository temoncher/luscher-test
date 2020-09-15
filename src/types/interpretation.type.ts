import { Translations } from '@/types/translations.interface';
import { FunctionKeys } from '@/types/function-keys';
import { LuscherFunction } from '@/types/luscher-function.interface';
import { Sign } from '@/types/enums/sign.enum';

export type Interpretation = {
  title: Translations<string>;
 } & {
   [key in FunctionKeys]: LuscherFunction;
 };
