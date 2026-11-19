import type { Localized } from '@/i18n/locales';

export type CodeTone = 'keyword' | 'name' | 'string';

export interface CodeToken {
  text: string;
  tone?: CodeTone;
}

export type CodeLine = CodeToken[];

export const heroSnippet: Localized<CodeLine[]> = {
  es: [
    [{ text: 'const', tone: 'keyword' }, { text: ' ' }, { text: 'proyecto', tone: 'name' }, { text: ' = {' }],
    [{ text: '  tipo: ' }, { text: '"sitio web"', tone: 'string' }, { text: ',' }],
    [{ text: '  diseño: ' }, { text: '"a medida"', tone: 'string' }, { text: ',' }],
    [{ text: '  rendimiento: ' }, { text: '"rápido"', tone: 'string' }, { text: ',' }],
    [{ text: '  responsive: ' }, { text: 'true', tone: 'keyword' }, { text: ',' }],
    [{ text: '};' }],
    [],
    [{ text: 'lanzar', tone: 'name' }, { text: '(proyecto);' }],
  ],
  en: [
    [{ text: 'const', tone: 'keyword' }, { text: ' ' }, { text: 'project', tone: 'name' }, { text: ' = {' }],
    [{ text: '  type: ' }, { text: '"website"', tone: 'string' }, { text: ',' }],
    [{ text: '  design: ' }, { text: '"custom"', tone: 'string' }, { text: ',' }],
    [{ text: '  performance: ' }, { text: '"fast"', tone: 'string' }, { text: ',' }],
    [{ text: '  responsive: ' }, { text: 'true', tone: 'keyword' }, { text: ',' }],
    [{ text: '};' }],
    [],
    [{ text: 'launch', tone: 'name' }, { text: '(project);' }],
  ],
};
