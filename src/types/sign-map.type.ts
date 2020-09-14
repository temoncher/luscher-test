import { Sign } from './enums/sign.enum';

export type SignMap<T> = {
  [key in Sign]: T;
}
