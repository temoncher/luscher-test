import { EmotionalState } from '@/types/enums/emotional-state.enum';
import { Sign } from '@/types/enums/sign.enum';
import { MainColor } from '@/types/enums/main-color.enum';
import { ColorResult } from '@/types/color-result.interface';
import { ColorMap } from '@/types/color-map.type';
import { TwoStageFixture } from './two-stage-fixture.interface';

const selections: [MainColor[], MainColor[]] = [
  [0, 2, 7, 6, 5, 1, 4, 3],
  [0, 2, 6, 7, 3, 5, 1, 4],
];

const anxietyLevels: [ColorMap<1 | 2 | 3>, ColorMap<1 | 2 | 3>] = [
  {
    0: 3,
    7: 1,
    1: 1,
    4: 2,
    3: 3,
  },
  {
    0: 3,
    6: 1,
    1: 2,
    4: 3,
  },
];

const emotionalStates: [ColorMap<EmotionalState>, ColorMap<EmotionalState>] = [
  {
    0: EmotionalState.COMPENSATION,
    2: EmotionalState.COMPENSATION,
    7: EmotionalState.COMPENSATION,
    1: EmotionalState.DISTURBANCE,
    4: EmotionalState.DISTURBANCE,
    3: EmotionalState.DISTURBANCE,
  },
  {
    0: EmotionalState.COMPENSATION,
    2: EmotionalState.COMPENSATION,
    6: EmotionalState.COMPENSATION,
    1: EmotionalState.DISTURBANCE,
    4: EmotionalState.DISTURBANCE,
  },
];

const pairs: [MainColor, MainColor][] = [[0, 2], [7, 6], [5, 1], [1, 4]];

const groups: [MainColor, MainColor?][][] = [
  [[0, 2], [2, 7], [7, 6], [5, 1], [1, 4], [4, 3]],
  [[0, 2], [2, 6], [6, 7], [3], [5, 1], [1, 4]],
];

const signs: [ColorMap<[Sign, Sign?]>, ColorMap<[Sign, Sign?]>] = [
  {
    0: [Sign.PLUS],
    2: [Sign.PLUS],
    7: [Sign.PLUS, Sign.ASTERISK],
    6: [Sign.ASTERISK],
    5: [Sign.EQUAL],
    1: [Sign.MINUS, Sign.EQUAL],
    4: [Sign.MINUS],
    3: [Sign.MINUS],
  },
  {
    0: [Sign.PLUS],
    2: [Sign.PLUS],
    6: [Sign.PLUS, Sign.ASTERISK],
    7: [Sign.ASTERISK],
    3: [Sign.EQUAL],
    5: [Sign.EQUAL],
    1: [Sign.MINUS, Sign.EQUAL],
    4: [Sign.MINUS],
  },
];

const result: [ColorResult[], ColorResult[]] = [[], []];

export const fourthFixture: TwoStageFixture = {
  selections,
  anxietyLevels,
  emotionalStates,
  pairs,
  groups,
  signs,
  result,
};
