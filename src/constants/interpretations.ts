import { Sign, SignKey } from '@/types/enums/sign.enum';
import { Interpretation } from '@/types/interpretation.type';

import asteriskFunctionJson from '@/assets/i18n/multi/asterisk-function.json';
import equalFunctionJson from '@/assets/i18n/multi/equal-function.json';
import minusFunctionJson from '@/assets/i18n/multi/minus-function.json';
import plusFunctionJson from '@/assets/i18n/multi/plus-function.json';

export type Interpretations = {
  [key in SignKey]: Interpretation;
}

export const interpretations: Interpretations = {
  [Sign.PLUS]: plusFunctionJson,
  [Sign.ASTERISK]: asteriskFunctionJson,
  [Sign.EQUAL]: equalFunctionJson,
  [Sign.MINUS]: minusFunctionJson,
};
