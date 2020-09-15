import { EmotionalState } from '@/types/enums/emotional-state.enum';
import { Sign } from '@/types/enums/sign.enum';
import { MainColor } from '@/types/enums/main-color.enum';
import { ColorMap } from '@/types/color-map.type';
import { SignMap } from '@/types/sign-map.type';
import { TwoStageFixture } from './two-stage-fixture.interface';
import { FunctionKeys } from '@/types/function-keys';

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

const signs: [ColorMap<[Sign, Sign?]>, ColorMap<[Sign, Sign?]>] = [
  {
    5: [Sign.PLUS],
    // TODO: investigate what's wrong with this case (should be only plus)
    7: [Sign.PLUS, Sign.ASTERISK],
    2: [Sign.ASTERISK],
    3: [Sign.EQUAL],
    4: [Sign.EQUAL],
    0: [Sign.EQUAL],
    6: [Sign.EQUAL],
    1: [Sign.MINUS],
  },
  {
    4: [Sign.PLUS],
    6: [Sign.PLUS],
    7: [Sign.PLUS, Sign.ASTERISK],
    2: [Sign.ASTERISK],
    0: [Sign.EQUAL],
    5: [Sign.EQUAL],
    1: [Sign.MINUS],
    3: [Sign.MINUS],
  },
];

const signMaps: [SignMap<MainColor[]>, SignMap<MainColor[]>] = [
  {
    [Sign.PLUS]: [5, 7],
    [Sign.ASTERISK]: [7, 2],
    [Sign.EQUAL]: [3, 4, 0, 6],
    [Sign.MINUS]: [1],
  },
  {
    [Sign.PLUS]: [4, 6, 7],
    [Sign.ASTERISK]: [7, 2],
    [Sign.EQUAL]: [0, 5],
    [Sign.MINUS]: [1, 3],
  },
];

const interpretationPairs: [SignMap<FunctionKeys[]>, SignMap<FunctionKeys[]>] = [
  {
    [Sign.PLUS]: ['57'],
    [Sign.ASTERISK]: ['72'],
    [Sign.EQUAL]: ['34', '40', '06'],
    [Sign.MINUS]: ['1'],
  },
  {
    [Sign.PLUS]: ['46', '67'],
    [Sign.ASTERISK]: ['72'],
    [Sign.EQUAL]: ['05'],
    [Sign.MINUS]: ['13'],
  },
];

export const secondFixture: TwoStageFixture = {
  selections,
  anxietyLevels,
  emotionalStates,
  pairs,
  groups,
  signs,
  signMaps,
  interpretationPairs,
};
