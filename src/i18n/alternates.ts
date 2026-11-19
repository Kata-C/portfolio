import { locales, type Locale } from '@/i18n/locales';
import { localizePath } from '@/i18n/paths';

export interface Alternate {
  locale: Locale;
  href: string;
}

export const alternatesFor = (path: string): Alternate[] =>
  locales.map((locale) => ({ locale, href: localizePath(locale, path) }));
