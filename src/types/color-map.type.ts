import { MainColor } from './enums/main-color.enum';

export type ColorMap<T> = {
  [key in MainColor]?: T;
}
