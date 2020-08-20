import { Sign } from '@/constants/sign.enum';
import { MainColor } from '@/constants/main-color.enum';

export interface ColorGroups {
  [Sign.PLUS]: [MainColor?, MainColor?];
  [Sign.ASTERISK]: [MainColor?, MainColor?];
  [Sign.EQUAL]: [MainColor?, MainColor?];
  [Sign.MINUS]: [MainColor?, MainColor?];
}
