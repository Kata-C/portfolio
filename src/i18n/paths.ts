import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from '@/i18n/locales';

export const localizePath = (locale: Locale, path = '/'): string => getRelativeLocaleUrl(locale, path);

export const localeParam = (locale: Locale): string | undefined =>
  localizePath(locale).replaceAll('/', '') || undefined;
