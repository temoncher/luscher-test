import functionTemplate from '@/assets/i18n/function.template.json';

export type TitleType = typeof functionTemplate['title'];
export type FunctionTemplate = typeof functionTemplate;
export type FunctionKeys = keyof Omit<typeof functionTemplate, 'title'>;
