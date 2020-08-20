// eslint-disable-next-line import/extensions
import { plusFunctions } from './plus-function-interpretations';
import { Sign } from './sign.enum';

export const interpretations = {
  [Sign.PLUS]: plusFunctions,
};

// Get interpretation : interpretations[Sign.PLUS][`${firstColor}${secondColor}`]
