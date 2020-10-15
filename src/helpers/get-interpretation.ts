import { Interpretation } from '@/types/interpretation.type';
import { Translations } from '@/types/translations.interface';
import { Sign } from '@/types/enums/sign.enum';
import { SignMap } from '@/types/sign-map.type';

/**
 * Getting interpretation from .json files using passed language
 * @param lang Interpretation language
 */
export const getInterpretation = async (
  lang: keyof Translations<unknown> | 'multi',
): Promise<SignMap<Interpretation>> => {
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
