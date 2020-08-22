import { SignKey } from './enums/sign.enum';
import { MainColor } from './enums/main-color.enum';

export type ColorGroups = {
  [key in SignKey]: [MainColor?, MainColor?];
}
