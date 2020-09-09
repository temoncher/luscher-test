import { MainColor } from '@/types/enums/main-color.enum';
import { ColorResult } from '@/types/color-result.interface';
import { EmotionalState } from '@/types/enums/emotional-state.enum';
import { Sign } from '@/types/enums/sign.enum';
import { ColorMap } from '@/types/color-map.type';
import { TwoStageFixture } from './two-stage-fixture.interface';

const selections: [MainColor[], MainColor[]] = [
  [0, 4, 7, 5, 2, 3, 1, 6],
  [3, 0, 5, 1, 2, 6, 7, 4],
];

const anxietyLevels: [ColorMap<1 | 2 | 3>, ColorMap<1 | 2 | 3>] = [
  {
    0: 3,
    7: 1,
    3: 1,
    1: 2,
  },
  {
    0: 2,
    4: 3,
  },
];

const emotionalStates: [ColorMap<EmotionalState>, ColorMap<EmotionalState>] = [
  {
    0: EmotionalState.COMPENSATION,
    4: EmotionalState.COMPENSATION,
    7: EmotionalState.COMPENSATION,
    3: EmotionalState.DISTURBANCE,
    1: EmotionalState.DISTURBANCE,
    6: EmotionalState.DISTURBANCE,
  },
  {
    3: EmotionalState.COMPENSATION,
    0: EmotionalState.COMPENSATION,
    4: EmotionalState.DISTURBANCE,
  },
];

const pairs: [MainColor, MainColor][] = [[4, 7]];

const groups: [MainColor, MainColor?][][] = [
  [[0, 4], [4, 7], [5, 2], [3, 1], [1, 6]],
  [[3, 0], [5, 1], [2, 6], [7, 4]],
];

const result: [ColorResult[], ColorResult[]] = [[], []];

export const firstFixture: TwoStageFixture = {
  selections,
  anxietyLevels,
  emotionalStates,
  pairs,
  groups,
  result,
};
