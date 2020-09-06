import { MainColor } from './types/enums/main-color.enum';
import { validateSelection } from './helpers/validate-selection';
import { ColorGroups } from './types/color-groups.type';
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
        colorResult.emotionalState = EmotionalState.COMPENSATION;
      }

      if (lastCompensationIndex && lastCompensationIndex >= index) {
        colorResult.signs.push(Sign.PLUS);
      }

      if (index > 4 && goodColors.includes(color)) {
        colorResult.anxietyLevel = (index - 4) as ColorResult['anxietyLevel'];
        colorResult.emotionalState = EmotionalState.DISTURBANCE;
      }

      if (firstDisturbanceIndex && firstDisturbanceIndex <= index) {
        colorResult.signs.push(Sign.MINUS);
      }

      return colorResult;
    });
  }
}
