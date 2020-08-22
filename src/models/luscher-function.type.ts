import { PsyFunction } from './psy-function.interface';

export type LuscherFunction = {
  title: {
    ru: string;
    en: string;
  };
 } & {
   [key: string]: PsyFunction;
 };
