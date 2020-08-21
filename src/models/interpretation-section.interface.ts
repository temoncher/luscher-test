import { Sign } from '../constants/sign.enum';
import { PsyFunction } from './psy-function.interface';

export interface InterpretationSection {
  title: PsyFunction;
  interpretation: [PsyFunction, PsyFunction?];
  sign: Sign;
}
