import { Sign } from '@/constants/sign.enum';
import { PsyFunction } from './psy-function.interface';

export interface InterpretationSection {
  title: string;
  interpretation: PsyFunction;
  sign: Sign;
}
