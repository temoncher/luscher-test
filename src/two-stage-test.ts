import { MainColor } from './types/enums/main-color.enum';
import { validateSelection } from './helpers/validate-selection';
import { Sign } from './types/enums/sign.enum';
import { EmotionalState } from './types/enums/emotional-state.enum';
import { badColors } from './constants/bad-colors';
import { goodColors } from './constants/good-colors';
import { ColorMap } from './types/color-map.type';
import { InterpretationSection } from './types/interpretation-section.interface';
import { SignMap } from './types/sign-map.type';
import { FunctionKeys } from './types/function-keys';
import { getInterpretation } from './helpers/get-interpretation';
import { Interpretation } from './types/interpretation.type';
import { LuscherFunction } from './types/luscher-function.interface';
import { InterpretationLanguage } from './types/enums/interpretation-language.enum';
import { Translations } from './types/translations.interface';

interface PsychologicalStateResult {
  anxietyLevels: ColorMap<1 | 2 | 3>;
  emotionalStates: ColorMap<EmotionalState>;
}

export class TwoStageTest {
  /** Obtained color selections */
  readonly selections: [MainColor[], MainColor[]];
  /** Color pairs that occur in both selections */
  readonly pairs: [MainColor, MainColor][];
  /** Luscher groups in each selection */
  readonly groups: [MainColor, MainColor?][][];
  /** State of disturbance and compensation by color for each selection */
  readonly emotionalStates: [ColorMap<EmotionalState>, ColorMap<EmotionalState>] = [{}, {}];
  /** State of anxiety level by color for each selection */
  readonly anxietyLevels: [ColorMap<1 | 2 | 3>, ColorMap<1 | 2 | 3>] = [{}, {}];
  /** Total anxiety level for each selection */
  readonly totalAnxietyLevel: [number, number];
  /** Interpretation for total anxiety level of second selection */
  readonly anxietyLevelInterpretation: Translations<string>;
  /** Signs for each color */
  readonly signs: [ColorMap<[Sign, Sign?]>, ColorMap<[Sign, Sign?]>] = [{}, {}];
  /** Colors for each sign */
  readonly signMaps: [SignMap<MainColor[]>, SignMap<MainColor[]>];
  /** Final color pairs used to get interpretation by sign for each selection */
  readonly interpretationPairs: [SignMap<FunctionKeys[]>, SignMap<FunctionKeys[]>];

  constructor(
    firstSelection: MainColor[],
    secondSelection: MainColor[],
  ) {
    validateSelection(firstSelection);
    validateSelection(secondSelection);

    this.selections = [firstSelection, secondSelection];
    const [firstEmotionalStates, secondEmotionalStates] = this.getPsychologicalState();

    this.pairs = this.getPairs();
    this.emotionalStates = [
      firstEmotionalStates.emotionalStates,
      secondEmotionalStates.emotionalStates,
    ];
    this.anxietyLevels = [
      firstEmotionalStates.anxietyLevels,
      secondEmotionalStates.anxietyLevels,
    ];
    this.totalAnxietyLevel = this.getTotalAnxietyLevel();
    this.anxietyLevelInterpretation = this.getAnxietyLevelInterpretation();
    this.groups = this.getGroups();
    this.signs = this.getSigns();
    this.signMaps = this.getSignMaps();
    this.interpretationPairs = this.getInterpretationPairs();
  }

  /**
   * @param lang Interpretation language
   * @returns Interpretation on chosen language
   */
  async getInterpretation(lang: InterpretationLanguage | 'multi' = InterpretationLanguage.ENGLISH): Promise<[
    InterpretationSection[],
    InterpretationSection[]
  ]> {
    const interpretations = await getInterpretation(lang);

    const first = this.getInterpretationForSelection(
      this.interpretationPairs[0],
      interpretations,
    );
    const second = this.getInterpretationForSelection(
      this.interpretationPairs[1],
      interpretations,
    );

    return [first, second];
  }

  private getInterpretationForSelection(
    interpretationPairs: SignMap<FunctionKeys[]>,
    interpretations: SignMap<Interpretation>,
  ): InterpretationSection[] {
    const interpretation: InterpretationSection[] = Object.entries(interpretationPairs)
      .filter(([, pairs]) => Boolean(pairs.length))
      .map(([sign, pairs]) => {
        const signInterpretationSource = interpretations[sign as Sign];
        const signInterpretation: LuscherFunction[] = pairs
          .map((pair) => signInterpretationSource[pair]);

        return {
          title: signInterpretationSource.title,
          interpretation: signInterpretation,
        };
      });

    return interpretation;
  }

  private getPsychologicalState(): [PsychologicalStateResult, PsychologicalStateResult] {
    const first = this.getPsychologicalStateForSelection(this.selections[0]);
    const second = this.getPsychologicalStateForSelection(this.selections[1]);

    return [first, second];
  }

  private getPsychologicalStateForSelection(selection: MainColor[]): PsychologicalStateResult {
    const anxietyLevels: ColorMap<1 | 2 | 3> = {};
    const emotionalStates: ColorMap<EmotionalState> = {};
    let lastCompensationIndex: number | null = null;
    let firstDisturbanceIndex: number | null = null;

    selection.forEach((color, index) => {
      if (index < 3 && badColors.includes(color)) {
        lastCompensationIndex = index;
      }

      if (index > 4 && goodColors.includes(color) && !firstDisturbanceIndex) {
        firstDisturbanceIndex = index;
      }
    });

    selection.forEach((color, index) => {
      if (index < 3 && badColors.includes(color)) {
        anxietyLevels[color] = (3 - index) as 1 | 2 | 3;
      }

      if (lastCompensationIndex !== null && lastCompensationIndex >= index) {
        emotionalStates[color] = EmotionalState.COMPENSATION;
      }

      if (index > 4 && goodColors.includes(color)) {
        anxietyLevels[color] = (index - 4) as 1 | 2 | 3;
      }

      if (firstDisturbanceIndex && firstDisturbanceIndex <= index) {
        emotionalStates[color] = EmotionalState.DISTURBANCE;
      }
    });

    return {
      anxietyLevels,
      emotionalStates,
    };
  }

  private getTotalAnxietyLevel(): [number, number] {
    const first = this.getTotalAnxietyLevelForSelection(this.anxietyLevels[0]);
    const second = this.getTotalAnxietyLevelForSelection(this.anxietyLevels[1]);

    return [first, second];
  }

  private getTotalAnxietyLevelForSelection(selectionAnxietyLevels: ColorMap<1 | 2 | 3>): number {
    const initAnxietyLevel: number = 0;

    const totalAnxietyLevel = Object.values(selectionAnxietyLevels)
      .reduce((total, currentAnxietyLevel) => {
        if (typeof total !== 'undefined' && currentAnxietyLevel) return total + currentAnxietyLevel;

        return total;
      }, initAnxietyLevel);

    return totalAnxietyLevel;
  }

  private getAnxietyLevelInterpretation(): Translations<string> {
    const [, total] = this.totalAnxietyLevel;

    switch (true) {
    case total < 3:
      return {
        ru: 'незначительная тревожность',
        en: 'slight anxiety',
      };

    case total < 7:
      return {
        ru: 'эмоциональная напряженность',
        en: 'emotional tension',
      };

    case total < 11:
      return {
        ru: 'состояние дезадаптации',
        en: 'state of maladjustment',
      };

    case total < 12:
      return {
        ru: 'психологический и физиологический стресс',
        en: 'psychological and physiological stress',
      };

    default:
      throw new Error('Something went wrong!');
    }
  }

  private getPairs(): [MainColor, MainColor][] {
    const pairs: [MainColor, MainColor][] = [];
    const [firstSelection, secondSelection] = this.selections;

    firstSelection.forEach((color, index) => {
      const firstColorIndex = secondSelection.indexOf(color);
      const colorToCompareTo = firstSelection[index + 1];
      const previousColor = secondSelection[firstColorIndex - 1];
      const nextColor = secondSelection[firstColorIndex + 1];
      const isPreviousMatched = firstColorIndex - 1 >= 0 && previousColor === colorToCompareTo;
      const isNextMatched = firstColorIndex + 1 < secondSelection.length
       && nextColor === colorToCompareTo;

      if (index + 1 >= firstSelection.length) return pairs;

      if (isPreviousMatched || isNextMatched) {
        pairs.push([firstSelection[index], colorToCompareTo]);
      }

      return pairs;
    });

    return pairs;
  }

  private getGroups(): [MainColor, MainColor?][][] {
    const first: [MainColor, MainColor?][] = this.getGroupsForSelection(
      this.selections[0],
      this.emotionalStates[0],
    );
    const second: [MainColor, MainColor?][] = this.getGroupsForSelection(
      this.selections[1],
      this.emotionalStates[1],
    );

    return [first, second];
  }

  private getGroupsForSelection(
    selection: MainColor[],
    emotionalStates: ColorMap<EmotionalState>,
  ): [MainColor, MainColor?][] {
    const groups: [MainColor, MainColor?][] = [];

    selection.forEach((color, index) => {
      const nextColor = selection[index + 1] as MainColor | undefined;
      const hasNext = typeof nextColor !== 'undefined';
      const isEmotional = Boolean(emotionalStates[color]);
      const isNextEmotional = Boolean(hasNext && emotionalStates[nextColor!]);
      const hasGroup = Boolean(groups.find((pair) => pair.includes(color)));
      const hasPairWithNext = Boolean(hasNext && this.pairs.find((pair) => {
        const hasCurrentColor = pair.includes(color);
        const hasNextColor = pair.includes(nextColor!);

        return hasCurrentColor && hasNextColor;
      }));
      const isNextAlreadyInPair = Boolean(hasNext && this.pairs.find((pair) => {
        const hasNextColor = pair.includes(nextColor!);
        const hasNextAfterNextColor = pair.includes(selection[index + 2]);

        return hasNextColor && hasNextAfterNextColor;
      }));

      if (hasPairWithNext || (isEmotional && isNextEmotional)) {
        groups.push([color, nextColor]);

        return;
      }

      if (hasGroup) {
        return;
      }

      if (isNextAlreadyInPair || typeof nextColor === 'undefined') {
        groups.push([color]);

        return;
      }

      if ((!isEmotional && !isNextEmotional) || typeof selection[index + 2] === 'undefined') {
        groups.push([color, nextColor]);
      }
    });

    return groups;
  }

  private getSigns(): [ColorMap<[Sign, Sign?]>, ColorMap<[Sign, Sign?]>] {
    const first: ColorMap<[Sign, Sign?]> = this.getSignsForSelection(
      this.selections[0],
      this.groups[0],
      this.emotionalStates[0],
    );
    const second: ColorMap<[Sign, Sign?]> = this.getSignsForSelection(
      this.selections[1],
      this.groups[1],
      this.emotionalStates[1],
    );

    return [first, second];
  }

  private getSignsForSelection(
    selection: MainColor[],
    groups: [MainColor, MainColor?][],
    emotionalStates: ColorMap<EmotionalState>,
  ): ColorMap<[Sign, Sign?]> {
    const signs: ColorMap<[Sign, Sign?]> = {};

    groups[0].forEach((color) => {
      if (typeof color === 'undefined') return;

      signs[color] = [Sign.PLUS];
    });

    groups[groups.length - 1].forEach((color) => {
      if (typeof color === 'undefined') return;

      signs[color] = [Sign.MINUS];
    });

    selection.forEach((color) => {
      if (emotionalStates[color]) {
        const sign = emotionalStates[color] === EmotionalState.COMPENSATION
          ? Sign.PLUS
          : Sign.MINUS;

        signs[color] = [sign];
      }
    });

    const firstColorWithoutSign = selection.find((color) => !signs[color]);
    const asteriskGroup = groups.find((group) => group.includes(firstColorWithoutSign));

    asteriskGroup?.forEach((color) => {
      if (typeof color === 'undefined' || selection.indexOf(color) === 1) return;

      if (signs[color]) {
        signs[color]?.push(Sign.ASTERISK);

        return;
      }

      signs[color] = [Sign.ASTERISK];
    });

    selection.forEach((color) => {
      if (signs[color]) return;

      const equalGroup = groups.find((group) => group.includes(color));

      const hasAsterisk = Boolean(equalGroup?.find((equalGroupColor) => {
        if (typeof equalGroupColor === 'undefined') return false;

        return signs[equalGroupColor]?.includes(Sign.ASTERISK);
      }));

      if (hasAsterisk) return;

      equalGroup?.forEach((groupColor) => {
        if (typeof groupColor === 'undefined') return;

        const hasEqual = Boolean(signs[groupColor]?.includes(Sign.EQUAL));

        if (signs[groupColor] && !hasEqual) {
          signs[groupColor]?.push(Sign.EQUAL);

          return;
        }

        signs[groupColor] = [Sign.EQUAL];
      });
    });

    return signs;
  }

  private getSignMaps(): [SignMap<MainColor[]>, SignMap<MainColor[]>] {
    const first: SignMap<MainColor[]> = this.getSignMapForSelection(
      this.selections[0],
      this.signs[0],
    );
    const second: SignMap<MainColor[]> = this.getSignMapForSelection(
      this.selections[1],
      this.signs[1],
    );

    return [first, second];
  }

  private getSignMapForSelection(
    selection: MainColor[],
    signs: ColorMap<[Sign, Sign?]>,
  ): SignMap<MainColor[]> {
    const initialSignMap: SignMap<MainColor[]> = {
      [Sign.PLUS]: [],
      [Sign.MINUS]: [],
      [Sign.ASTERISK]: [],
      [Sign.EQUAL]: [],
    };
    const initIndexMap: ColorMap<number> = {};
    const indexMap = selection.reduce((map, color, index) => {
      // eslint-disable-next-line no-param-reassign
      map[color] = index;

      return map;
    }, initIndexMap);

    const signMap = Object.entries(signs)
      .map(([color, colorSigns]) => [Number(color), colorSigns] as [MainColor, [Sign, Sign?]])
      .sort((a, b) => {
        const aIndex = indexMap[a[0]];
        const bIndex = indexMap[b[0]];

        if (typeof aIndex === 'undefined' || typeof bIndex === 'undefined') return 0;

        return aIndex - bIndex;
      })
      .reduce((map, [color, colorSigns]) => {
        const mainColor = Number(color) as MainColor;

        colorSigns?.forEach((sign) => {
          if (!sign) return;

          map[sign].push(mainColor);
        });

        return map;
      }, initialSignMap);

    return signMap;
  }

  private getInterpretationPairs(): [
    SignMap<FunctionKeys[]>,
    SignMap<FunctionKeys[]>
    ] {
    const first = this.getInterpretationPairsForSelection(this.signMaps[0]);
    const second = this.getInterpretationPairsForSelection(this.signMaps[1]);

    return [first, second];
  }

  private getInterpretationPairsForSelection(
    signMap: SignMap<MainColor[]>,
  ): SignMap<FunctionKeys[]> {
    const initialInterpretationPairs: SignMap<FunctionKeys[]> = {
      [Sign.PLUS]: [],
      [Sign.MINUS]: [],
      [Sign.ASTERISK]: [],
      [Sign.EQUAL]: [],
    };

    const interpretationPairs = Object.entries(signMap).reduce((map, [sign, colors]) => {
      if (colors.length === 1) {
        map[sign as Sign].push(colors[0].toString() as FunctionKeys);

        return map;
      }

      const [emptyString, ...interpretations] = colors.map<FunctionKeys>((color, index) => {
        if (index === 0) return '' as FunctionKeys;

        return [colors[index - 1], colors[index]].join('') as FunctionKeys;
      });

      // eslint-disable-next-line no-param-reassign
      map[sign as Sign] = interpretations;

      return map;
    }, initialInterpretationPairs);

    return interpretationPairs;
  }
}
