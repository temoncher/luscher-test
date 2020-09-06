import { Sign } from './enums/sign.enum';
import { MainColor } from './enums/main-color.enum';

export type ColorGroups = {
  [key in Sign]: [MainColor?, MainColor?, MainColor?, MainColor?];
}
