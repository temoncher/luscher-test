import { MainColor } from '@/types/enums/main-color.enum';
import { ColorResult } from '@/types/color-result.interface';

export interface TwoStageFixture {
  selections: [MainColor[], MainColor[]];
  emotionalStates: [ColorResult[], ColorResult[]];
  pairs: [MainColor, MainColor][];
  groups: [MainColor, MainColor?][][];
  result: [ColorResult[], ColorResult[]];
}
