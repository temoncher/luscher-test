import functionTemplate from '@/assets/i18n/template.empty.json';

export type FunctionKeys = keyof Omit<typeof functionTemplate, 'title'>;
