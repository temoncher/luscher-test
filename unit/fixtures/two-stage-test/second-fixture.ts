import { EmotionalState } from '@/types/enums/emotional-state.enum';
import { Sign } from '@/types/enums/sign.enum';
import { MainColor } from '@/types/enums/main-color.enum';
import { ColorResult } from '@/types/color-result.interface';
import { ColorMap } from '@/types/color-map.type';
import { TwoStageFixture } from './two-stage-fixture.interface';

const selections: [MainColor[], MainColor[]] = [
  [5, 7, 2, 3, 4, 0, 6, 1],
  [4, 6, 7, 2, 0, 5, 1, 3],
];

const anxietyLevels: [ColorMap<1 | 2 | 3>, ColorMap<1 | 2 | 3>] = [
  {
    7: 2,
    1: 3,
  },
  {
    6: 2,
    7: 1,
    1: 2,
    3: 3,
  },
];

const emotionalStates: [ColorMap<EmotionalState>, ColorMap<EmotionalState>] = [
  {
    5: EmotionalState.COMPENSATION,
    7: EmotionalState.COMPENSATION,
    1: EmotionalState.DISTURBANCE,
  },
  {
    4: EmotionalState.COMPENSATION,
    6: EmotionalState.COMPENSATION,
    7: EmotionalState.COMPENSATION,
    1: EmotionalState.DISTURBANCE,
    3: EmotionalState.DISTURBANCE,
  },
];

const pairs: [MainColor, MainColor][] = [[7, 2]];

const groups: [MainColor, MainColor?][][] = [
  [[5, 7], [7, 2], [3, 4], [0, 6], [1]],
  [[4, 6], [6, 7], [7, 2], [0, 5], [1, 3]],
];

const result: [ColorResult[], ColorResult[]] = [[], []];

export const secondFixture: TwoStageFixture = {
  selections,
  anxietyLevels,
  emotionalStates,
  pairs,
  groups,
  result,
};
