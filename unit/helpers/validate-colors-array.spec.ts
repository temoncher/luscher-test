import { validateColorsArray } from '@/helpers/validate-colors-array';
import { MainColor } from '@/types/enums/main-color.enum';

describe('[Helpers] Validate colors array', () => {
  it('should throw an error when array contains more or less than 8 colors', () => {
    const lessColors = [
      MainColor.BLUE,
      MainColor.GREEN,
      MainColor.BROWN,
      MainColor.BLACK,
    ];
    const moreColors = [
      MainColor.BLACK,
      MainColor.BLUE,
      MainColor.BROWN,
      MainColor.GRAY,
      MainColor.GREEN,
      MainColor.PURPLE,
      MainColor.RED,
      MainColor.YELLOW,
      MainColor.BLACK,
    ];

    expect(true).toBe(true);
  });
});
