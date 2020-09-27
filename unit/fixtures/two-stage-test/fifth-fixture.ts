import { MainColor } from '@/types/enums/main-color.enum';
import { EmotionalState } from '@/types/enums/emotional-state.enum';
import { Sign } from '@/types/enums/sign.enum';
import { ColorMap } from '@/types/color-map.type';
import { SignMap } from '@/types/sign-map.type';
import { FunctionKeys } from '@/types/function-keys';
import { TwoStageFixture } from './two-stage-fixture.interface';

const selections: [MainColor[], MainColor[]] = [
  [1, 4, 7, 3, 6, 5, 0, 2],
  [4, 1, 3, 6, 5, 0, 7, 2],
];

const anxietyLevels: [ColorMap<1 | 2 | 3>, ColorMap<1 | 2 | 3>] = [
  {
    7: 1,
    2: 3,
  },
  {
    2: 3,
  },
];

const totalAnxietyLevel: [number, number] = [4, 3];

const emotionalStates: [ColorMap<EmotionalState>, ColorMap<EmotionalState>] = [
  {
    1: EmotionalState.COMPENSATION,
    4: EmotionalState.COMPENSATION,
    7: EmotionalState.COMPENSATION,
    2: EmotionalState.DISTURBANCE,
  },
  {
    // TODO: Apply compensation when disturbance is present, and vice versa
    // 4: EmotionalState.COMPENSATION,
    2: EmotionalState.DISTURBANCE,
  },
];

const pairs: [MainColor, MainColor][] = [[1, 4], [3, 6], [6, 5], [5, 0]];

const groups: [MainColor, MainColor?][][] = [
  [[1, 4], [4, 7], [3, 6], [6, 5], [5, 0], [2]],
  [[4, 1], [3, 6], [6, 5], [5, 0], [7, 2]],
];

const signs: [ColorMap<[Sign, Sign?]>, ColorMap<[Sign, Sign?]>] = [
  {
    1: [Sign.PLUS],
    4: [Sign.PLUS],
    7: [Sign.PLUS],
    3: [Sign.ASTERISK],
    6: [Sign.ASTERISK],
    5: [Sign.EQUAL],
    0: [Sign.EQUAL],
    2: [Sign.MINUS],
  },
  {
    4: [Sign.PLUS],
    1: [Sign.PLUS],
    3: [Sign.ASTERISK],
    6: [Sign.ASTERISK],
    5: [Sign.EQUAL],
    0: [Sign.EQUAL],
    7: [Sign.MINUS],
    2: [Sign.MINUS],
  },
];

const signMaps: [SignMap<MainColor[]>, SignMap<MainColor[]>] = [
  {
    [Sign.PLUS]: [1, 4, 7],
    [Sign.ASTERISK]: [3, 6],
    [Sign.EQUAL]: [5, 0],
    [Sign.MINUS]: [2],
  },
  {
    [Sign.PLUS]: [4, 1],
    [Sign.ASTERISK]: [3, 6],
    [Sign.EQUAL]: [5, 0],
    [Sign.MINUS]: [7, 2],
  },
];

const interpretationPairs: [SignMap<FunctionKeys[]>, SignMap<FunctionKeys[]>] = [
  {
    [Sign.PLUS]: ['14', '47'],
    [Sign.ASTERISK]: ['36'],
    [Sign.EQUAL]: ['50'],
    [Sign.MINUS]: ['2'],
  },
  {
    [Sign.PLUS]: ['41'],
    [Sign.ASTERISK]: ['36'],
    [Sign.EQUAL]: ['50'],
    [Sign.MINUS]: ['72'],
  },
];

export const fifthFixture: TwoStageFixture = {
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
