import { MainColor } from './main-color.enum';

interface PsyFunction {
    asterisks: 1|2|3;
    ru: string;
    eng: string;
    percentage?: number;
}

export const plusFunctions: { [key: string]: PsyFunction } = {};
