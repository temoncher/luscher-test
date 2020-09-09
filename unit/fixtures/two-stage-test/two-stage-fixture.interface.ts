import { MainColor } from '@/types/enums/main-color.enum';
import { ColorResult } from '@/types/color-result.interface';
import { ColorMap } from '@/types/color-map.type';
import { EmotionalState } from '@/types/enums/emotional-state.enum';

export interface TwoStageFixture {
  selections: [MainColor[], MainColor[]];
  anxietyLevels: [ColorMap<1 | 2 | 3>, ColorMap<1 | 2 | 3>];
  emotionalStates: [ColorMap<EmotionalState>, ColorMap<EmotionalState>];
  pairs: [MainColor, MainColor][];
  groups: [MainColor, MainColor?][][];
  result: [ColorResult[], ColorResult[]];
}
