# Portafolio

Sitio estático en Astro con el sistema de diseño Ultravioleta, en español e inglés.

## Comandos

- `npm run dev`: servidor local en http://localhost:4321
- `npm run check`: revisión de tipos
- `npm run build`: genera el sitio en `dist/`

## Idiomas

- Español en `/` e inglés en `/en/`. La lista de idiomas vive en `src/i18n/locales.ts`.
- Los textos de la interfaz están en `src/i18n/dictionaries/` (`es.ts` y `en.ts`), con la forma definida en `src/i18n/Dictionary.ts`.
- Lo que tiene partes que no se traducen (servicios, skills, proyectos) guarda el texto en un bloque `copy` con una llave por idioma.
- Si agregas un idioma, TypeScript y el build marcan cada texto que falta traducir.

## Dónde se edita el contenido

- `src/data/site.ts`: nombre, correo, redes y disponibilidad
- `src/data/`: servicios, skills y el código del hero
- `src/content/projects/`: un archivo YAML por proyecto, el nombre del archivo es la URL; arriba van los datos compartidos y en `copy` los textos de cada idioma
- Las capturas de un proyecto se declaran en `media` (`cover`, `desktop`, `mobile`, `detail`) con rutas relativas al YAML; las imágenes viven en `src/assets/projects/<proyecto>/` y lo que no se declara no se muestra (sin portada no hay vista principal, sin capturas no hay galería)
- `liveUrl` y `repoUrl` pintan los botones del encabezado del proyecto; `links` agrega botones con etiqueta propia (por ejemplo App Store y Google Play)
- `preview` elige la ilustración de la tarjeta en el inicio: `browser`, `phone`, `chart` o `code`

## Contacto

Sin configuración, el formulario abre la app de correo del visitante con el mensaje listo.
Con `PUBLIC_CONTACT_ENDPOINT` en `.env`, envía un POST con JSON (`idioma`, `tipo`, `nombre`, `email`, `mensaje`) a ese servicio.

## Al publicar

Define `site` en `astro.config.ts` con el dominio final. Sin eso no se generan las etiquetas `hreflang` que le dicen a Google qué página corresponde a cada idioma.
