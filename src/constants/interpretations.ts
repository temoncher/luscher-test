// eslint-disable-next-line import/extensions
import { asteriskFunction } from '../interpretations/asterisk-function';
import { plusFunction } from '../interpretations/plus-function';
import { equalFunction } from '../interpretations/equal-function';
import { minusFunction } from '../interpretations/minus-function';
import { Sign } from './sign.enum';

export const interpretations = {
  [Sign.PLUS]: plusFunction,
  [Sign.ASTERISK]: asteriskFunction,
  [Sign.EQUAL]: equalFunction,
  [Sign.MINUS]: minusFunction,
};
