import { SignKey } from '@/constants/sign.enum';
import { LuscherFunction } from './luscher-function.type';

export type Interpretations = {
  [key in SignKey]: LuscherFunction;
}
