import type { Localized } from '@/i18n/locales';
import type { Localize } from '@/i18n/localize';

export type ServiceIconName = 'website' | 'app' | 'system';

export interface ServiceCopy {
  title: string;
  description: string;
  tags: string[];
}

export interface ServiceData {
  icon: ServiceIconName;
  copy: Localized<ServiceCopy>;
}

export type Service = Localize<ServiceData>;

export const services: ServiceData[] = [
  {
    icon: 'website',
    copy: {
      es: {
        title: 'Sitios web',
        description:
          'Landing pages, portafolios y sitios para negocios. Rápidos, responsivos y fáciles de actualizar.',
        tags: ['landing', 'portafolio', 'negocio'],
      },
      en: {
        title: 'Websites',
        description: 'Landing pages, portfolios and business sites. Fast, responsive and easy to update.',
        tags: ['landing', 'portfolio', 'business'],
      },
    },
  },
  {
    icon: 'app',
    copy: {
      es: {
        title: 'Apps',
        description:
          'Aplicaciones web y móviles con flujos simples, buen rendimiento y una experiencia que se siente nativa.',
        tags: ['web app', 'iOS', 'Android'],
      },
      en: {
        title: 'Apps',
        description: 'Web and mobile apps with simple flows, solid performance and an experience that feels native.',
        tags: ['web app', 'iOS', 'Android'],
      },
    },
  },
  {
    icon: 'system',
    copy: {
      es: {
        title: 'Sistemas de gestión',
        description: 'Herramientas internas hechas a la medida de tu negocio.',
        tags: ['a la medida', 'uso interno'],
      },
      en: {
        title: 'Management systems',
        description: 'Internal tools built around the way your business works.',
        tags: ['custom', 'internal use'],
      },
    },
  },
];
