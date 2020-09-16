import { ColorHex } from '@/types/enums/color-hex.enum';
import { MainColor } from '@/types/enums/main-color.enum';

export interface LuscherColor {
  hex: ColorHex;
  id: keyof typeof MainColor;
  index: MainColor;
}

export const luscherColors: LuscherColor[] = [
  {
    hex: ColorHex.GRAY,
    id: 'GRAY',
    index: MainColor.GRAY,
  },
  {
    hex: ColorHex.BLUE,
    id: 'BLUE',
    index: MainColor.BLUE,
  },
  {
    hex: ColorHex.GREEN,
    id: 'GREEN',
    index: MainColor.GREEN,
  },
  {
    hex: ColorHex.RED,
    id: 'RED',
    index: MainColor.RED,
  },
  {
    hex: ColorHex.YELLOW,
    id: 'YELLOW',
    index: MainColor.YELLOW,
  },
  {
    hex: ColorHex.PURPLE,
    id: 'PURPLE',
    index: MainColor.PURPLE,
  },
  {
    hex: ColorHex.BROWN,
    id: 'BROWN',
    index: MainColor.BROWN,
  },
  {
    hex: ColorHex.BLACK,
    id: 'BLACK',
    index: MainColor.BLACK,
  },
];
