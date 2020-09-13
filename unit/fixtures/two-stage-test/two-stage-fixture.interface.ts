import { MainColor } from '@/types/enums/main-color.enum';
import { ColorResult } from '@/types/color-result.interface';
import { ColorMap } from '@/types/color-map.type';
import { EmotionalState } from '@/types/enums/emotional-state.enum';
import { Sign } from '@/types/enums/sign.enum';

export interface TwoStageFixture {
  selections: [MainColor[], MainColor[]];
  anxietyLevels: [ColorMap<1 | 2 | 3>, ColorMap<1 | 2 | 3>];
  emotionalStates: [ColorMap<EmotionalState>, ColorMap<EmotionalState>];
  pairs: [MainColor, MainColor][];
  groups: [MainColor, MainColor?][][];
  signs: [ColorMap<[Sign, Sign?]>, ColorMap<[Sign, Sign?]>];
  result: [ColorResult[], ColorResult[]];
}
