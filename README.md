
## Commands

- `npm run dev`: http://localhost:4321
- `npm run check`: revisión de tipos
- `npm run build`: genera el sitio en `dist/`

## Language

- Spanish `/`, english `/en/`. Language list in `src/i18n/locales.ts`.
- Interface texts in `src/i18n/dictionaries/` (`es.ts` y `en.ts`), `src/i18n/Dictionary.ts`.


## Contact

- `PUBLIC_CONTACT_ENDPOINT` in `.env`, sends POST with JSON

## Al publicar

- `site` in `astro.config.ts` - domain (without this 'hreflang' labels are not generated)

