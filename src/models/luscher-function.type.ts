import { PsyFunction } from './psy-function.interface';

export type LuscherFunction = {
  title: {
    ru: string;
    eng: string;
  };
 } & {
   [key: string]: PsyFunction;
 };
