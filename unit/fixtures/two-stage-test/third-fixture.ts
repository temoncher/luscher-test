import { MainColor } from '@/types/enums/main-color.enum';
import { ColorResult } from '@/types/color-result.interface';
import { EmotionalState } from '@/types/enums/emotional-state.enum';
import { Sign } from '@/types/enums/sign.enum';

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

const pairs = [[6, 7], [2, 1], [4, 0]];

export const thirdFixture = {
  selections,
  emotionalStates,
  pairs,
};
