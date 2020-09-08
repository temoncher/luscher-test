import { EmotionalState } from '@/types/enums/emotional-state.enum';
import { Sign } from '@/types/enums/sign.enum';
import { MainColor } from '@/types/enums/main-color.enum';
import { ColorResult } from '@/types/color-result.interface';
import { TwoStageFixture } from './two-stage-fixture.interface';

const selections: [MainColor[], MainColor[]] = [
  [5, 7, 2, 3, 4, 0, 6, 1],
  [4, 6, 7, 2, 0, 5, 1, 3],
];

const emotionalStates: [ColorResult[], ColorResult[]] = [
  [
    {
      color: 5,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
    },
    {
      color: 7,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
      anxietyLevel: 2,
    },
    { color: 2, signs: [] },
    { color: 3, signs: [] },
    { color: 4, signs: [] },
    { color: 0, signs: [] },
    { color: 6, signs: [] },
    {
      color: 1,
      signs: [Sign.MINUS],
      emotionalState: EmotionalState.DISTURBANCE,
      anxietyLevel: 3,
    },
  ],
  [
    {
      color: 4,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
    },
    {
      color: 6,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
      anxietyLevel: 2,
    },
    {
      color: 7,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
      anxietyLevel: 1,
    },
    { color: 2, signs: [] },
    { color: 0, signs: [] },
    { color: 5, signs: [] },
    {
      color: 1,
      signs: [Sign.MINUS],
      emotionalState: EmotionalState.DISTURBANCE,
      anxietyLevel: 2,
    },
    {
      color: 3,
      signs: [Sign.MINUS],
      emotionalState: EmotionalState.DISTURBANCE,
      anxietyLevel: 3,
    },
  ],
];

const pairs: [MainColor, MainColor][] = [[7, 2]];

const groups: [MainColor, MainColor?][][] = [
  [[5, 7], [7, 2], [3, 4], [0, 6], [1]],
  [[4, 6], [6, 7], [7, 2], [0, 5], [1, 3]],
];

const result: [ColorResult[], ColorResult[]] = [[], []];

export const secondFixture: TwoStageFixture = {
  selections,
  emotionalStates,
  pairs,
  groups,
  result,
};
