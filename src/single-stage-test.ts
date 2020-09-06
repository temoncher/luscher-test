import { MainColor } from './types/enums/main-color.enum';
import { Sign } from './types/enums/sign.enum';
import { interpretations } from './constants/interpretations';
import { InterpretationSection } from './types/interpretation-section.interface';
import { ColorGroups } from './types/color-groups.type';
import { FunctionKeys } from './types/function-keys';
import { validateSelection } from './helpers/validate-selection';

export class SingleStageTest {
    colors: MainColor[];

    constructor(colors: MainColor[]) {
      validateSelection(colors);

      this.colors = colors;
    }

    interpret(): InterpretationSection[] {
      const colorGroups = this.getGroups();

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

    getGroups(): ColorGroups {
      const initalGroups: ColorGroups = {
        [Sign.PLUS]: [],
        [Sign.ASTERISK]: [],
        [Sign.EQUAL]: [],
        [Sign.MINUS]: [],
      };

      return this.colors.reduce((colorGroups, color, index) => {
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
