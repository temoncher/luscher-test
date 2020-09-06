import { MainColor } from '@/types/enums/main-color.enum';

export const validateSelection = (colors: MainColor[]) => {
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
};
