import { MainColor } from './types/enums/main-color.enum';
import { Sign } from './types/enums/sign.enum';
import { interpretations } from './constants/interpretations';
import { InterpretationSection } from './types/interpretation-section.interface';
import { ColorGroups } from './types/color-groups.type';
import { FunctionKeys } from './types/function-keys';

export class SingleStageTest {
    colors: MainColor[];

    constructor(colors: MainColor[]) {
      if (!colors || !Array.isArray(colors) || colors.length !== 8) {
        throw new Error('You shold pass an array of 8 colors. No more, no less');
      }

      if (colors.length !== new Set(colors).size) {
        throw new Error('You shold pass an array of unique colors');
      }

      colors.forEach((color) => {
        if (typeof color !== 'number') {
          throw new Error('Colors should be represented as numbers');
        }

        if (color < 0 || color > 7) {
          throw new Error('Colors numbers should be in a range from 0 to 7');
        }
      });

      this.colors = colors;
    }

    interpret(): InterpretationSection[] {
      const colorGroups = this.getGroups(this.colors);

      return Object.entries(colorGroups)
        .map(([signString, colorGroup]): InterpretationSection => {
          const groupKey = colorGroup.join('') as FunctionKeys;
          const sign = signString as Sign;
          const { title, [groupKey]: signInterpretation } = interpretations[sign];

          return {
            title,
            sign,
            interpretation: [signInterpretation],
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
