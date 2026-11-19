import type { Locale, Localized } from '@/i18n/locales';

export interface HasCopy {
  copy: Localized<object>;
}

export type Localize<Entity extends HasCopy> = Omit<Entity, 'copy'> & Entity['copy'][Locale];

export const localize = <Entity extends HasCopy>(entity: Entity, locale: Locale): Localize<Entity> => {
  const { copy, ...shared } = entity;
  return { ...shared, ...copy[locale] };
};
