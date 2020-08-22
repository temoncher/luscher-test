import { Sign } from '@/types/enums/sign.enum';
import { FunctionKeys } from '@/types/function-keys';
import { Translations } from '@/types/translations.interface';
import { LuscherFunction } from '@/types/luscher-function.interface';

import asteriskFunctionJson from '@/assets/i18n/multi/asterisk-function.json';
import equalFunctionJson from '@/assets/i18n/multi/equal-function.json';
import minusFunctionJson from '@/assets/i18n/multi/minus-function.json';
import plusFunctionJson from '@/assets/i18n/multi/plus-function.json';

export type Interpretation = {
  title: Translations<string>;
 } & {
   [key in FunctionKeys]: LuscherFunction;
 };

type Interpretations = {
  [key in Sign]: Interpretation;
}

export const interpretations: Interpretations = {
  [Sign.PLUS]: plusFunctionJson,
  [Sign.ASTERISK]: asteriskFunctionJson,
  [Sign.EQUAL]: equalFunctionJson,
  [Sign.MINUS]: minusFunctionJson,
};
