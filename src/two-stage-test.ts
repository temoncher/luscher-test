import { MainColor } from './types/enums/main-color.enum';
import { validateSelection } from './helpers/validate-selection';
import { Sign } from './types/enums/sign.enum';
import { ColorResult } from './types/color-result.interface';
import { EmotionalState } from './types/enums/emotional-state.enum';
import { badColors } from './constants/bad-colors';
import { goodColors } from './constants/good-colors';
import { ColorMap } from './types/color-map.type';

interface PsychologicalStateResult {
  anxietyLevels: ColorMap<1 | 2 | 3>;
  emotionalStates: ColorMap<EmotionalState>;
}

export class TwoStageTest {
  readonly pairs: [MainColor, MainColor][]
  readonly groups: [MainColor, MainColor?][][]
  readonly emotionalStates: [ColorMap<EmotionalState>, ColorMap<EmotionalState>] = [{}, {}];
  readonly anxietyLevels: [ColorMap<1 | 2 | 3>, ColorMap<1 | 2 | 3>] = [{}, {}];
  readonly signs: [ColorMap<[Sign, Sign?]>, ColorMap<[Sign, Sign?]>] = [{}, {}];

  constructor(
    private firstSelection: MainColor[],
    private secondSelection: MainColor[],
  ) {
    validateSelection(this.firstSelection);
    validateSelection(this.secondSelection);

    this.pairs = this.getPairs();
    const [firstEmotionalStates, secondEmotionalStates] = this.getPsychologicalState();

    this.emotionalStates = [
      firstEmotionalStates.emotionalStates,
      secondEmotionalStates.emotionalStates,
    ];
    this.anxietyLevels = [
      firstEmotionalStates.anxietyLevels,
      secondEmotionalStates.anxietyLevels,
    ];
    this.groups = this.getGroups();
    this.signs = this.getSigns();
  }

  private getPsychologicalState(): [PsychologicalStateResult, PsychologicalStateResult] {
    const first = this.getPsychologicalStateForSelection(this.firstSelection);
    const second = this.getPsychologicalStateForSelection(this.secondSelection);

    return [first, second];
  }

  private getGroups(): [MainColor, MainColor?][][] {
    const first: [MainColor, MainColor?][] = this.getGroupsForSelection(
      this.firstSelection,
      this.emotionalStates[0],
    );
    const second: [MainColor, MainColor?][] = this.getGroupsForSelection(
      this.secondSelection,
      this.emotionalStates[1],
    );

    return [first, second];
  }

  private getSigns(): [ColorMap<[Sign, Sign?]>, ColorMap<[Sign, Sign?]>] {
    const first: ColorMap<[Sign, Sign?]> = this.getSignsForSelection(
      this.firstSelection,
      this.groups[0],
      this.emotionalStates[0],
    );
    const second: ColorMap<[Sign, Sign?]> = this.getSignsForSelection(
      this.secondSelection,
      this.groups[1],
      this.emotionalStates[1],
    );

    return [first, second];
  }

  private getResult(): [ColorResult[], ColorResult[]] {
    return [[], []];
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

      if (lastCompensationIndex && lastCompensationIndex >= index) {
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

      if (isNextAlreadyInPair || !nextColor) {
        groups.push([color]);

        return;
      }

      if (!isEmotional && !isNextEmotional) {
        groups.push([color, nextColor]);
      }
    });

    return groups;
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
      if (typeof color === 'undefined') return;

      if (signs[color]) {
        signs[color]?.push(Sign.ASTERISK);

        return;
      }

      signs[color] = [Sign.ASTERISK];
    });

    selection.forEach((color) => {
      if (signs[color]) return;

      const equalGroup = groups.find((group) => group.includes(color));

      equalGroup?.forEach((groupColor) => {
        if (typeof groupColor === 'undefined') return;

        if (signs[groupColor]) {
          signs[groupColor]?.push(Sign.EQUAL);

          return;
        }

        signs[groupColor] = [Sign.EQUAL];
      });
    });

    return signs;
  }

  private getResultForSelection(selection: ColorResult[]): ColorResult[] {
    return selection;
  }

  private getPairs(): [MainColor, MainColor][] {
    const pairs: [MainColor, MainColor][] = [];

    this.firstSelection.forEach((color, index) => {
      const firstColorIndex = this.secondSelection.indexOf(color);
      const colorToCompareTo = this.firstSelection[index + 1];
      const previousColor = this.secondSelection[firstColorIndex - 1];
      const nextColor = this.secondSelection[firstColorIndex + 1];
      const isPreviousMatched = firstColorIndex - 1 >= 0 && previousColor === colorToCompareTo;
      const isNextMatched = firstColorIndex + 1 < this.secondSelection.length
       && nextColor === colorToCompareTo;

      if (index + 1 >= this.firstSelection.length) return pairs;

      if (isPreviousMatched || isNextMatched) {
        pairs.push([this.firstSelection[index], colorToCompareTo]);
      }

      return pairs;
    });

    return pairs;
  }
}
