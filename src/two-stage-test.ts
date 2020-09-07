import { MainColor } from './types/enums/main-color.enum';
import { validateSelection } from './helpers/validate-selection';
import { Sign } from './types/enums/sign.enum';
import { ColorResult } from './types/color-result.interface';
import { EmotionalState } from './types/enums/emotional-state.enum';
import { badColors } from './constants/bad-colors';
import { goodColors } from './constants/good-colors';

export class TwoStageTest {
  constructor(
    private firstSelection: MainColor[],
    private secondSelection: MainColor[],
  ) {
    validateSelection(this.firstSelection);
    validateSelection(this.secondSelection);
  }

  getEmotionalState(): [ColorResult[], ColorResult[]] {
    const first: ColorResult[] = this.getEmotionalStateForSelection(this.firstSelection);
    const second: ColorResult[] = this.getEmotionalStateForSelection(this.secondSelection);

    return [first, second];
  }

  getPairs(): [MainColor, MainColor][] {
    const initPairs: [MainColor, MainColor][] = [];

    this.firstSelection.forEach((color, index) => {
      const firstColorIndex = this.secondSelection.indexOf(color);
      const colorToCompareTo = this.firstSelection[index + 1];
      const previousColor = this.secondSelection[firstColorIndex - 1];
      const nextColor = this.secondSelection[firstColorIndex + 1];
      const isPreviousMatched = firstColorIndex - 1 >= 0 && previousColor === colorToCompareTo;
      const isNextMatched = firstColorIndex + 1 < this.secondSelection.length
       && nextColor === colorToCompareTo;

      if (index + 1 >= this.firstSelection.length) return initPairs;

      if (isPreviousMatched || isNextMatched) {
        initPairs.push([this.firstSelection[index], colorToCompareTo]);
      }

      return initPairs;
    });

    return initPairs;
  }

  private getEmotionalStateForSelection(selection: MainColor[]): ColorResult[] {
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

    return selection.map((color, index) => {
      const colorResult: ColorResult = {
        color,
        signs: [],
      };

      if (index < 3 && badColors.includes(color)) {
        colorResult.anxietyLevel = (3 - index) as ColorResult['anxietyLevel'];
      }

      if (lastCompensationIndex && lastCompensationIndex >= index) {
        colorResult.signs.push(Sign.PLUS);
        colorResult.emotionalState = EmotionalState.COMPENSATION;
      }

      if (index > 4 && goodColors.includes(color)) {
        colorResult.anxietyLevel = (index - 4) as ColorResult['anxietyLevel'];
      }

      if (firstDisturbanceIndex && firstDisturbanceIndex <= index) {
        colorResult.signs.push(Sign.MINUS);
        colorResult.emotionalState = EmotionalState.DISTURBANCE;
      }

      return colorResult;
    });
  }
}
