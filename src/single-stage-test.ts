import { MainColor } from './types/enums/main-color.enum';
import { Sign } from './types/enums/sign.enum';
import { InterpretationSection } from './types/interpretation-section.interface';
import { SignMap } from './types/sign-map.type';
import { FunctionKeys } from './types/function-keys';
import { validateSelection } from './helpers/validate-selection';
import { getInterpretation } from './helpers/get-interpretation';
import { Translations } from './types/translations.interface';

export class SingleStageTest {
    colors: MainColor[];

    constructor(colors: MainColor[]) {
      validateSelection(colors);

      this.colors = colors;
    }

    async interpret(lang: keyof Translations<any> | 'multi' = 'multi'): Promise<InterpretationSection[]> {
      const multiInterpretations = await getInterpretation(lang);
      const colorGroups = this.getGroups();

      const interpretation = Object.entries(colorGroups)
        .map(([signString, colorGroup]): InterpretationSection => {
          const groupKey = colorGroup.join('') as FunctionKeys;
          const sign = signString as Sign;
          const {
            title,
            // @ts-ignore (for jest tests)
            [groupKey]: signInterpretation,
          } = multiInterpretations[sign];

          return {
            title,
            interpretation: [signInterpretation],
          };
        });

      return interpretation;
    }

    getGroups(): SignMap<MainColor[]> {
      const initalGroups: SignMap<MainColor[]> = {
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
