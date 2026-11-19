import type { Dictionary } from '@/i18n/Dictionary';
import { en } from '@/i18n/dictionaries/en';
import { es } from '@/i18n/dictionaries/es';
import type { Locale, Localized } from '@/i18n/locales';

const dictionaries: Localized<Dictionary> = { es, en };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
