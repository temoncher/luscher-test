// eslint-disable-next-line import/extensions
import { plusFunctions } from './plus-function-interpretations';
import { Sign } from './sign.enum';

// TODO: finish interpretations
export const interpretations = {
  [Sign.PLUS]: plusFunctions,
  [Sign.ASTERISK]: plusFunctions,
  [Sign.EQUAL]: plusFunctions,
  [Sign.MINUS]: plusFunctions,
};

// Get interpretation : interpretations[Sign.PLUS][`${firstColor}${secondColor}`]
