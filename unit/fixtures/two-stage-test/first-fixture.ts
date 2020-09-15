import { MainColor } from '@/types/enums/main-color.enum';
import { EmotionalState } from '@/types/enums/emotional-state.enum';
import { Sign } from '@/types/enums/sign.enum';
import { ColorMap } from '@/types/color-map.type';
import { SignMap } from '@/types/sign-map.type';
import { FunctionKeys } from '@/types/function-keys';
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

const signs: [ColorMap<[Sign, Sign?]>, ColorMap<[Sign, Sign?]>] = [
  {
    0: [Sign.PLUS],
    4: [Sign.PLUS],
    7: [Sign.PLUS],
    5: [Sign.ASTERISK],
    2: [Sign.ASTERISK],
    3: [Sign.MINUS],
    1: [Sign.MINUS],
    6: [Sign.MINUS],
  },
  {
    3: [Sign.PLUS],
    0: [Sign.PLUS],
    5: [Sign.ASTERISK],
    1: [Sign.ASTERISK],
    2: [Sign.EQUAL],
    6: [Sign.EQUAL],
    7: [Sign.MINUS],
    4: [Sign.MINUS],
  },
];

const signMaps: [SignMap<MainColor[]>, SignMap<MainColor[]>] = [
  {
    [Sign.PLUS]: [0, 4, 7],
    [Sign.ASTERISK]: [5, 2],
    [Sign.EQUAL]: [],
    [Sign.MINUS]: [3, 1, 6],
  },
  {
    [Sign.PLUS]: [3, 0],
    [Sign.ASTERISK]: [5, 1],
    [Sign.EQUAL]: [2, 6],
    [Sign.MINUS]: [7, 4],
  },
];

const interpretationPairs: [SignMap<FunctionKeys[]>, SignMap<FunctionKeys[]>] = [
  {
    [Sign.PLUS]: ['04', '47'],
    [Sign.ASTERISK]: ['52'],
    [Sign.EQUAL]: [],
    [Sign.MINUS]: ['31', '16'],
  },
  {
    [Sign.PLUS]: ['30'],
    [Sign.ASTERISK]: ['51'],
    [Sign.EQUAL]: ['26'],
    [Sign.MINUS]: ['74'],
  },
];

export const firstFixture: TwoStageFixture = {
  selections,
  anxietyLevels,
  emotionalStates,
  pairs,
  groups,
  signs,
  signMaps,
  interpretationPairs,
};
