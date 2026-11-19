import { defineConfig, envField } from 'astro/config';
import { defaultLocale, locales } from './src/i18n/locales';

export default defineConfig({
  i18n: {
    locales: [...locales],
    defaultLocale,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  env: {
    schema: {
      PUBLIC_CONTACT_ENDPOINT: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },
});
