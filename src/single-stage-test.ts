import { MainColor } from '@/constants/main-color.enum';
import { Sign } from '@/constants/sign.enum';
import { interpretations } from '@/constants/interpretations';
import { InterpretationSection } from '@/models/interpretation-section.interface';
import { ColorGroups } from '@/models/color-groups.type';

export class SingleStageTest {
    colors: MainColor[];

    constructor(colors: MainColor[]) {
      if (colors.length !== 8) {
        throw new Error('You shold pass an array of 8 colors. No more, no less');
      }

      this.colors = colors;
    }

    interpret(): InterpretationSection[] {
      const colorGroups = this.getGroups(this.colors);

      return Object.entries(colorGroups)
        .map(([signString, colorGroup]): InterpretationSection => {
          const groupKey = colorGroup.join('');
          const sign = signString as Sign;

          return {
            title: '',
            sign,
            interpretation: [
              interpretations[sign][groupKey],
            ],
          };
        });
    }

    getGroups(colors: MainColor[]): ColorGroups {
      const initalGroups: ColorGroups = {
        [Sign.PLUS]: [],
        [Sign.ASTERISK]: [],
        [Sign.EQUAL]: [],
        [Sign.MINUS]: [],
      };

      return colors.reduce((colorGroups, color, index) => {
        switch (index) {
        case 0:
        case 1:
          colorGroups[Sign.PLUS].push(color);
          break;

        case 2:
        case 3:
          colorGroups[Sign.ASTERISK].push(color);
          break;

        case 4:
        case 5:
          colorGroups[Sign.EQUAL].push(color);
          break;

        default:
          colorGroups[Sign.MINUS].push(color);
          break;
        }

        return colorGroups;
      }, initalGroups);
    }
}