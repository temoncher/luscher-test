import { Interpretations } from '@/types/interpretations';
import { Translations } from '@/types/translations.interface';
import { Sign } from '@/types/enums/sign.enum';

export const getInterpretation = async (lang: keyof Translations<any> | 'multi'): Promise<Interpretations> => {
  const [
    plusFunctionJson,
    asteriskFunctionJson,
    equalFunctionJson,
    minusFunctionJson,
  ] = await Promise.all([
    import(`@/assets/i18n/${lang}/${lang}.plus.json`).then((module) => module.default),
    import(`@/assets/i18n/${lang}/${lang}.asterisk.json`).then((module) => module.default),
    import(`@/assets/i18n/${lang}/${lang}.equal.json`).then((module) => module.default),
    import(`@/assets/i18n/${lang}/${lang}.minus.json`).then((module) => module.default),
  ]);

  return {
    [Sign.PLUS]: plusFunctionJson,
    [Sign.ASTERISK]: asteriskFunctionJson,
    [Sign.EQUAL]: equalFunctionJson,
    [Sign.MINUS]: minusFunctionJson,
  };
};
