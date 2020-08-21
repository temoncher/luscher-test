import { MinusFunctionInterpretation } from './minus-function-interpretation';

export interface PsyFunction {
  asterisks?: 1 | 2 | 3;
  ru: string | MinusFunctionInterpretation;
  eng: string | MinusFunctionInterpretation;
  percentage?: number;
}
