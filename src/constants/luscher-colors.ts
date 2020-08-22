import { MainColor } from '@/types/enums/main-color.enum';

export interface LuscherColor {
  hex: string;
  id: keyof typeof MainColor;
  index: MainColor;
}

export const luscherColors: LuscherColor[] = [
  {
    hex: '',
    id: 'GRAY',
    index: MainColor.GRAY,
  },
  {
    hex: '',
    id: 'BLUE',
    index: MainColor.BLUE,
  },
  {
    hex: '',
    id: 'GREEN',
    index: MainColor.GREEN,
  },
  {
    hex: '',
    id: 'RED',
    index: MainColor.RED,
  },
  {
    hex: '',
    id: 'YELLOW',
    index: MainColor.YELLOW,
  },
  {
    hex: '',
    id: 'PURPLE',
    index: MainColor.PURPLE,
  },
  {
    hex: '',
    id: 'BROWN',
    index: MainColor.BROWN,
  },
  {
    hex: '',
    id: 'BLACK',
    index: MainColor.BLACK,
  },
];
