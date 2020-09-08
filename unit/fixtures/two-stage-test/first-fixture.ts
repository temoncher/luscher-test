import { MainColor } from '@/types/enums/main-color.enum';
import { ColorResult } from '@/types/color-result.interface';
import { EmotionalState } from '@/types/enums/emotional-state.enum';
import { Sign } from '@/types/enums/sign.enum';
import { TwoStageFixture } from './two-stage-fixture.interface';

const selections: [MainColor[], MainColor[]] = [
  [0, 4, 7, 5, 2, 3, 1, 6],
  [3, 0, 5, 1, 2, 6, 7, 4],
];

const emotionalStates: [ColorResult[], ColorResult[]] = [
  [
    {
      color: 0,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
      anxietyLevel: 3,
    },
    {
      color: 4,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
    },
    {
      color: 7,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
      anxietyLevel: 1,
    },
    { color: 5, signs: [] },
    { color: 2, signs: [] },
    {
      color: 3,
      signs: [Sign.MINUS],
      emotionalState: EmotionalState.DISTURBANCE,
      anxietyLevel: 1,
    },
    {
      color: 1,
      signs: [Sign.MINUS],
      emotionalState: EmotionalState.DISTURBANCE,
      anxietyLevel: 2,
    },
    {
      color: 6,
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
      color: 0,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
      anxietyLevel: 2,
    },
    { color: 5, signs: [] },
    { color: 1, signs: [] },
    { color: 2, signs: [] },
    { color: 6, signs: [] },
    { color: 7, signs: [] },
    {
      color: 4,
      signs: [Sign.MINUS],
      emotionalState: EmotionalState.DISTURBANCE,
      anxietyLevel: 3,
    },
  ],
];

const pairs: [MainColor, MainColor][] = [[4, 7]];

const groups: [MainColor, MainColor?][][] = [
  [[0, 4], [4, 7], [5, 2], [3, 1], [1, 6]],
  [[3, 0], [5, 1], [2, 6], [7, 4]],
];

const result: [ColorResult[], ColorResult[]] = [
  [
    {
      color: 0,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
      anxietyLevel: 3,
    },
    {
      color: 4,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
    },
    {
      color: 7,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
      anxietyLevel: 1,
    },
    { color: 5, signs: [Sign.ASTERISK] },
    { color: 2, signs: [Sign.ASTERISK] },
    {
      color: 3,
      signs: [Sign.MINUS],
      emotionalState: EmotionalState.DISTURBANCE,
      anxietyLevel: 1,
    },
    {
      color: 1,
      signs: [Sign.MINUS],
      emotionalState: EmotionalState.DISTURBANCE,
      anxietyLevel: 2,
    },
    {
      color: 6,
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
      color: 0,
      signs: [Sign.PLUS],
      emotionalState: EmotionalState.COMPENSATION,
      anxietyLevel: 2,
    },
    { color: 5, signs: [Sign.ASTERISK] },
    { color: 1, signs: [Sign.ASTERISK] },
    { color: 2, signs: [Sign.EQUAL] },
    { color: 6, signs: [Sign.EQUAL] },
    { color: 7, signs: [Sign.MINUS] },
    {
      color: 4,
      signs: [Sign.MINUS],
      emotionalState: EmotionalState.DISTURBANCE,
      anxietyLevel: 3,
    },
  ],
];

export const firstFixture: TwoStageFixture = {
  selections,
  emotionalStates,
  pairs,
  groups,
  result,
};
