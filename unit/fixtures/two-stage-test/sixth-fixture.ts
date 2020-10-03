import { MainColor } from '@/types/enums/main-color.enum';
import { EmotionalState } from '@/types/enums/emotional-state.enum';
import { Sign } from '@/types/enums/sign.enum';
import { ColorMap } from '@/types/color-map.type';
import { SignMap } from '@/types/sign-map.type';
import { FunctionKeys } from '@/types/function-keys';
import { TwoStageFixture } from './two-stage-fixture.interface';

const selections: [MainColor[], MainColor[]] = [
  [1, 7, 5, 0, 3, 2, 6, 4],
  [2, 0, 3, 1, 7, 5, 6, 4],
];

const anxietyLevels: [ColorMap<1 | 2 | 3>, ColorMap<1 | 2 | 3>] = [
  {
    7: 2,
    2: 1,
    4: 3,
  },
  {
    0: 2,
    4: 3,
  },
];

const totalAnxietyLevel: [number, number] = [6, 5];

const emotionalStates: [ColorMap<EmotionalState>, ColorMap<EmotionalState>] = [
  {
    1: EmotionalState.COMPENSATION,
    7: EmotionalState.COMPENSATION,
    2: EmotionalState.DISTURBANCE,
    6: EmotionalState.DISTURBANCE,
    4: EmotionalState.DISTURBANCE,
  },
  {
    2: EmotionalState.COMPENSATION,
    0: EmotionalState.COMPENSATION,
    4: EmotionalState.DISTURBANCE,
  },
];

const pairs: [MainColor, MainColor][] = [[1, 7], [7, 5], [0, 3], [6, 4]];

const groups: [MainColor, MainColor?][][] = [
  [[1, 7], [7, 5], [0, 3], [2, 6], [6, 4]],
  [[2, 0], [0, 3], [1, 7], [7, 5], [6, 4]],
];

const signs: [ColorMap<[Sign, Sign?]>, ColorMap<[Sign, Sign?]>] = [
  {
    1: [Sign.PLUS],
    7: [Sign.PLUS],
    5: [Sign.ASTERISK],
    0: [Sign.EQUAL],
    3: [Sign.EQUAL],
    2: [Sign.MINUS],
    6: [Sign.MINUS],
    4: [Sign.MINUS],
  },
  {
    2: [Sign.PLUS],
    0: [Sign.PLUS],
    3: [Sign.ASTERISK],
    1: [Sign.EQUAL],
    7: [Sign.EQUAL],
    5: [Sign.EQUAL],
    6: [Sign.MINUS],
    4: [Sign.MINUS],
  },
];

const signMaps: [SignMap<MainColor[]>, SignMap<MainColor[]>] = [
  {
    [Sign.PLUS]: [1, 7],
    [Sign.ASTERISK]: [5],
    [Sign.EQUAL]: [0, 3],
    [Sign.MINUS]: [2, 6, 4],
  },
  {
    [Sign.PLUS]: [2, 0],
    [Sign.ASTERISK]: [3],
    [Sign.EQUAL]: [1, 7, 5],
    [Sign.MINUS]: [6, 4],
  },
];

const interpretationPairs: [SignMap<FunctionKeys[]>, SignMap<FunctionKeys[]>] = [
  {
    [Sign.PLUS]: ['17'],
    [Sign.ASTERISK]: ['5'],
    [Sign.EQUAL]: ['03'],
    [Sign.MINUS]: ['26', '64'],
  },
  {
    [Sign.PLUS]: ['20'],
    [Sign.ASTERISK]: ['3'],
    [Sign.EQUAL]: ['17', '75'],
    [Sign.MINUS]: ['64'],
  },
];

export const sixthFixture: TwoStageFixture = {
  selections,
  anxietyLevels,
  totalAnxietyLevel,
  emotionalStates,
  pairs,
  groups,
  signs,
  signMaps,
  interpretationPairs,
};
