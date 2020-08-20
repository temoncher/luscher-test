import { MainColor } from '@/constants/main-color.enum';
import { ColorResult } from '@/models/color-result.interface';
import { Sign } from '@/constants/sign.enum';
import { strict } from 'assert';
import { ColorGroups } from '@/models/color-groups.interface';

export class SingleStageTest {
    private colorGroups: ColorGroups = {
      [Sign.PLUS]: [],
      [Sign.ASTERISK]: [],
      [Sign.EQUAL]: [],
      [Sign.MINUS]: [],
    }

    constructor(colors: MainColor[]) {
      if (colors.length !== 8) {
        throw new Error('You shold pass an array of 8 colors, no more, no less');
      }

      this.getGroups(colors);
    }

    getResult() {
      return { ...this.colorGroups };
    }

    private getGroups(colors: MainColor[]) {
      colors.forEach((color, index) => {
        switch (index) {
        case 0:
        case 1:
          this.colorGroups[Sign.PLUS].push(color);
          break;

        case 2:
        case 3:
          this.colorGroups[Sign.ASTERISK].push(color);
          break;

        case 4:
        case 5:
          this.colorGroups[Sign.EQUAL].push(color);
          break;

        default:
          this.colorGroups[Sign.MINUS].push(color);
          break;
        }
      });
    }
}
