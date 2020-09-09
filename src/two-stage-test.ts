import { MainColor } from './types/enums/main-color.enum';
import { validateSelection } from './helpers/validate-selection';
import { Sign } from './types/enums/sign.enum';
import { ColorResult } from './types/color-result.interface';
import { EmotionalState } from './types/enums/emotional-state.enum';
import { badColors } from './constants/bad-colors';
import { goodColors } from './constants/good-colors';
import { ColorMap } from './types/color-map.type';

interface EmotionalStatesResult {
  anxietyLevels: ColorMap<1 | 2 | 3>;
  emotionalStates: ColorMap<EmotionalState>;
}

export class TwoStageTest {
  readonly pairs: [MainColor, MainColor][]
  readonly groups: [MainColor, MainColor?][][]
  readonly emotionalStates: [ColorMap<EmotionalState>, ColorMap<EmotionalState>] = [{}, {}];
  readonly anxietyLevels: [ColorMap<1 | 2 | 3>, ColorMap<1 | 2 | 3>] = [{}, {}];

  constructor(
    private firstSelection: MainColor[],
    private secondSelection: MainColor[],
  ) {
    validateSelection(this.firstSelection);
    validateSelection(this.secondSelection);

    this.pairs = this.getPairs();
    const [firstEmotionalStates, secondEmotionalStates] = this.getEmotionalState();

    this.emotionalStates = [
      firstEmotionalStates.emotionalStates,
      secondEmotionalStates.emotionalStates,
    ];
    this.anxietyLevels = [
      firstEmotionalStates.anxietyLevels,
      secondEmotionalStates.anxietyLevels,
    ];
    this.groups = this.getGroups();
  }

  private getEmotionalState(): [EmotionalStatesResult, EmotionalStatesResult] {
    const first = this.getEmotionalStateForSelection(this.firstSelection);
    const second = this.getEmotionalStateForSelection(this.secondSelection);

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

  getResult(): [ColorResult[], ColorResult[]] {
    return [[], []];
  }

  private getEmotionalStateForSelection(selection: MainColor[]): EmotionalStatesResult {
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
