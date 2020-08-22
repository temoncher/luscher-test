import { Sign } from './enums/sign.enum';
import { LuscherFunction } from './psy-function.interface';

export interface InterpretationSection {
  title: LuscherFunction;
  interpretation: [LuscherFunction, LuscherFunction?];
  sign: Sign;
}
