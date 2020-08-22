import { Sign } from '@/constants/sign.enum';
import { Interpretations } from '@/models/interpretations.type';

import asteriskFunctionJson from '@/assets/i18n/asterisk-function.json';
import equalFunctionJson from '@/assets/i18n/equal-function.json';
import minusFunctionJson from '@/assets/i18n/minus-function.json';
import plusFunctionJson from '@/assets/i18n/plus-function.json';

export const interpretations: Interpretations = {
  [Sign.PLUS]: plusFunctionJson,
  [Sign.ASTERISK]: asteriskFunctionJson,
  [Sign.EQUAL]: equalFunctionJson,
  [Sign.MINUS]: minusFunctionJson,
};
