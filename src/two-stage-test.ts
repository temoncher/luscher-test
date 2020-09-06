import { MainColor } from './types/enums/main-color.enum';
import { validateColorsArray } from './helpers/validate-colors-array';
import { ColorGroups } from './types/color-groups.type';
import { Sign } from './types/enums/sign.enum';

export class TwoStageTest {
  colors: [MainColor[], MainColor[]];

  constructor(colors: [MainColor[], MainColor[]]) {
    validateColorsArray(colors[0]);
    validateColorsArray(colors[1]);

    this.colors = colors;
  }

  getGroups(colors: [MainColor[], MainColor[]]): ColorGroups {
    const initalGroups: ColorGroups = {
      [Sign.PLUS]: [],
      [Sign.ASTERISK]: [],
      [Sign.EQUAL]: [],
      [Sign.MINUS]: [],
    };

    return initalGroups;
  }
}
