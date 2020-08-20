import { MainColor } from '@/constants/main-color.enum';
import { ColorResult } from '@/model/color-result.interface';
import { Sign } from '@/constants/sign.enum';

export class SingleStageTest {
    private colorResults: ColorResult[] = [];

    get result() {
      return [...this.colorResults];
    }

    constructor(colors: MainColor[]) {
      if (colors.length !== 8) {
        throw new Error('You shold pass an array of 8 colors, no more, no less');
      }

      this.calculateColorResults(colors);
    }

    private calculateColorResults(colors: MainColor[]) {
      this.colorResults = colors.map((color, index): ColorResult => {
        switch (index) {
        case 0:
        case 1:
          return {
            color,
            signs: [Sign.PLUS],
          };
        case 2:
        case 3:
          return {
            color,
            signs: [Sign.ASTERISK],
          };
        case 4:
        case 5:
          return {
            color,
            signs: [Sign.EQUAL],
          };
        default:
          return {
            color,
            signs: [Sign.MINUS],
          };
        }
      });
    }
}
