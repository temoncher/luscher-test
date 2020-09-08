import { EmotionalState } from '@/types/enums/emotional-state.enum';
import { Sign } from '@/types/enums/sign.enum';
import { MainColor } from '@/types/enums/main-color.enum';
import { ColorResult } from '@/types/color-result.interface';
import { TwoStageFixture } from './two-stage-fixture.interface';

const selections: [MainColor[], MainColor[]] = [
  [6, 7, 3, 2, 1, 5, 4, 0],
  [3, 5, 7, 6, 1, 2, 4, 0],
];

const emotionalStates: [ColorResult[], ColorResult[]] = [
  [
    {
      color: 6,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
      anxietyLevel: 3,
    },
    {
      color: 7,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
      anxietyLevel: 2,
    },
    { color: 3, signs: [] },
    { color: 2, signs: [] },
    { color: 1, signs: [] },
    { color: 5, signs: [] },
    {
      color: 4,
      signs: [Sign.MINUS],
      emotionalState: EmotionalState.DISTURBANCE,
      anxietyLevel: 2,
    },
    {
      color: 0,
      signs: [Sign.MINUS],
      emotionalState: EmotionalState.DISTURBANCE,
    },
  ],
  [
    {
      color: 3,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
    },
    {
      color: 5,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,

    },
    {
      color: 7,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
      anxietyLevel: 1,
    },
    { color: 6, signs: [] },
    { color: 1, signs: [] },
    {
      color: 2,
      signs: [Sign.MINUS],
      emotionalState: EmotionalState.DISTURBANCE,
      anxietyLevel: 1,
    },
    {
      color: 4,
      signs: [Sign.MINUS],
      emotionalState: EmotionalState.DISTURBANCE,
      anxietyLevel: 2,
    },
    {
      color: 0,
      signs: [Sign.MINUS],
      emotionalState: EmotionalState.DISTURBANCE,
    },
  ],
];

const pairs: [MainColor, MainColor][] = [[6, 7], [2, 1], [4, 0]];

const groups: [MainColor, MainColor?][][] = [
  [[6, 7], [3], [2, 1], [5], [4, 0]],
  [[3, 5], [5, 7], [7, 6], [1, 2], [2, 4], [4, 0]],
];

const result: [ColorResult[], ColorResult[]] = [[], []];

export const thirdFixture: TwoStageFixture = {
  selections,
  emotionalStates,
  pairs,
  groups,
  result,
};
