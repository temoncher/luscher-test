import { MainColor } from '@/constants/main-color.enum';
import { Sign } from '@/constants/sign.enum';
import { EmotionalState } from '@/constants/emotional-state.enum';

export interface ColorResult {
  color: MainColor;
  signs: [Sign, Sign?];
  emotionalState?: EmotionalState;
  anxietyLevel?: 1 | 2 | 3;
}
