import { SignKey } from '@/types/enums/sign.enum';
import { Interpretation } from './luscher-function.type';

export type Interpretations = {
  [key in SignKey]: Interpretation;
}
