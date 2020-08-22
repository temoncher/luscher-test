import { Sign } from './enums/sign.enum';
import { LuscherFunction } from './luscher-function.interface';

export interface InterpretationSection {
  title: LuscherFunction;
  interpretation: [LuscherFunction, LuscherFunction?];
  sign: Sign;
}
