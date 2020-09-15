import { MainColor } from '@/types/enums/main-color.enum';
import { ColorMap } from '@/types/color-map.type';
import { EmotionalState } from '@/types/enums/emotional-state.enum';
import { Sign } from '@/types/enums/sign.enum';
import { SignMap } from '@/types/sign-map.type';
import { FunctionKeys } from '@/types/function-keys';

export interface TwoStageFixture {
  selections: [MainColor[], MainColor[]];
  anxietyLevels: [ColorMap<1 | 2 | 3>, ColorMap<1 | 2 | 3>];
  emotionalStates: [ColorMap<EmotionalState>, ColorMap<EmotionalState>];
  pairs: [MainColor, MainColor][];
  groups: [MainColor, MainColor?][][];
  signs: [ColorMap<[Sign, Sign?]>, ColorMap<[Sign, Sign?]>];
  signMaps: [SignMap<MainColor[]>, SignMap<MainColor[]>];
  interpretationPairs: [SignMap<FunctionKeys[]>, SignMap<FunctionKeys[]>];
}
