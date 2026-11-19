export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export type Localized<T> = Record<Locale, T>;

export interface LocaleDetails {
  short: string;
  name: string;
  openGraph: string;
}

export const localeDetails: Localized<LocaleDetails> = {
  es: { short: 'ES', name: 'Español', openGraph: 'es_MX' },
  en: { short: 'EN', name: 'English', openGraph: 'en_US' },
};
