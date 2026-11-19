import type { Locale } from '@/i18n/locales';
import { localizePath } from '@/i18n/paths';

export const sectionIds = {
  top: 'inicio',
  services: 'servicios',
  projects: 'proyectos',
  skills: 'skills',
  process: 'proceso',
  contact: 'contacto',
} as const;

export type SectionKey = keyof typeof sectionIds;

export const sectionHref = (locale: Locale, section: SectionKey): string =>
  `${localizePath(locale)}#${sectionIds[section]}`;
