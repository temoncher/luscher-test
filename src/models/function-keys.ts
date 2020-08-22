import functionTemplate from '@/assets/i18n/function.template.json';

export type FunctionKeys = keyof Omit<typeof functionTemplate, 'title'>;
