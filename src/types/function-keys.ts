import functionTemplate from '@/assets/i18n/empty.template.json';

export type FunctionKeys = keyof Omit<typeof functionTemplate, 'title'>;
