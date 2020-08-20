import { SignKey } from '../constants/sign.enum';
import { MainColor } from '../constants/main-color.enum';

export type ColorGroups = {
  [key in SignKey]: [MainColor?, MainColor?];
}
