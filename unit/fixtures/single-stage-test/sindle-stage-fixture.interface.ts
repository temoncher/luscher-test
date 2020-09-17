import { MainColor } from '@/types/enums/main-color.enum';
import { InterpretationSection } from '@/types/interpretation-section.interface';

export interface SingleStageFixture {
  selection: MainColor[];
  interpretation: InterpretationSection[];

}
