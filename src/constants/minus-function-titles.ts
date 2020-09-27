import { MinusFunction } from '@/types/minus-function.interface';
import { Translations } from '@/types/translations.interface';

export const minusFunctionTitles: MinusFunction<Translations<string>> = {
  physcho: {
    ru: 'Психологическая интерпретация',
    en: 'Psychological interpretation',
  },
  physio: {
    ru: 'Физиологическая интерпретация',
    en: 'Physiological interpretation',
  },
  inBrief: {
    ru: 'Коротко',
    en: 'In brief',
  },
};
