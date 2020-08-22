import { TitleType } from './json-types';

export type Translations<T> = {
  [key in keyof TitleType]: T;
}
