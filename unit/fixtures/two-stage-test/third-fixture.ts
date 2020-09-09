import { EmotionalState } from '@/types/enums/emotional-state.enum';
import { Sign } from '@/types/enums/sign.enum';
import { MainColor } from '@/types/enums/main-color.enum';
import { ColorResult } from '@/types/color-result.interface';
import { ColorMap } from '@/types/color-map.type';
import { TwoStageFixture } from './two-stage-fixture.interface';

const selections: [MainColor[], MainColor[]] = [
  [6, 7, 3, 2, 1, 5, 4, 0],
  [3, 5, 7, 6, 1, 2, 4, 0],
];

const anxietyLevels: [ColorMap<1 | 2 | 3>, ColorMap<1 | 2 | 3>] = [
  {
    6: 3,
    7: 2,
    4: 2,
  },
  {
    7: 1,
    2: 1,
    4: 2,
  },
];

const emotionalStates: [ColorMap<EmotionalState>, ColorMap<EmotionalState>] = [
  {
    6: EmotionalState.COMPENSATION,
    7: EmotionalState.COMPENSATION,
    4: EmotionalState.DISTURBANCE,
    0: EmotionalState.DISTURBANCE,
  },
  {
    3: EmotionalState.COMPENSATION,
    5: EmotionalState.COMPENSATION,
    7: EmotionalState.COMPENSATION,
    2: EmotionalState.DISTURBANCE,
    4: EmotionalState.DISTURBANCE,
    0: EmotionalState.DISTURBANCE,
  },
];

const pairs: [MainColor, MainColor][] = [[6, 7], [2, 1], [4, 0]];

const groups: [MainColor, MainColor?][][] = [
  [[6, 7], [3], [2, 1], [5], [4, 0]],
  [[3, 5], [5, 7], [7, 6], [1, 2], [2, 4], [4, 0]],
];

const result: [ColorResult[], ColorResult[]] = [[], []];

export const thirdFixture: TwoStageFixture = {
  selections,
  anxietyLevels,
  emotionalStates,
  pairs,
  groups,
  result,
};
