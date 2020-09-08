import { MainColor } from './enums/main-color.enum';
import { Sign } from './enums/sign.enum';
import { EmotionalState } from './enums/emotional-state.enum';

export interface ColorResult {
  color: MainColor;
  signs: [Sign?, Sign?];
  emotionalState?: EmotionalState;
}
