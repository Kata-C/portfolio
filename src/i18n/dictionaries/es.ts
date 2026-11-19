import type { Dictionary } from '@/i18n/Dictionary';

export const es: Dictionary = {
  meta: {
    tagline: 'Sitios y apps con alma de producto',
    notFound: 'Página no encontrada',
  },
  header: {
    navigation: 'Principal',
    language: 'Idioma',
    contact: 'Contactar',
  },
  navigation: {
    services: 'Servicios',
    projects: 'Proyectos',
    skills: 'Skills',
    process: 'Proceso',
  },
  footer: {
    backToTop: 'Volver arriba',
  },
  profile: {
    intro: (name) => `Soy ${name}, desarrolladora independiente.`,
    description:
      'Diseño y construyo sitios web, apps y sistemas de gestión rápidos, claros y hechos a la medida de tu negocio.',
    location: 'Mazatlán, México',
    remote: 'trabajo remoto',
  },
  hero: {
    available: 'Disponible para proyectos',
    headline: [{ text: 'Sitios y apps' }, { text: 'con alma de producto.', accent: true }],
    primaryAction: 'Hablemos de tu proyecto',
    secondaryAction: 'Ver proyectos',
    previewAddress: 'tuproyecto.com',
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Lo que puedo hacer por ti.',
    lede: 'Desde la primera idea hasta el lanzamiento. Un solo punto de contacto, de principio a fin.',
  },
  projects: {
    eyebrow: 'Proyectos',
    title: 'Trabajo reciente.',
    lede: 'Una selección de lo que he diseñado y construido.',
    action: 'Ver proyecto',
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Herramientas que domino.',
    lede: 'Elijo la tecnología según tu proyecto, no al revés.',
  },
  process: {
    eyebrow: 'Proceso',
    title: 'Simple, de principio a fin.',
    steps: [
      { title: 'Conversamos', description: 'Entiendo tu idea, tus metas y a quién va dirigida.' },
      { title: 'Diseño', description: 'Ves cómo se verá antes de escribir código.' },
      { title: 'Construyo', description: 'Código limpio, rápido y listo para crecer.' },
      { title: 'Lanzamos', description: 'Publico tu proyecto y lo ajustamos juntos.' },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos de',
    accent: 'tu idea.',
    lede: 'Cuéntame qué quieres construir y te respondo en [24 horas].',
    form: {
      projectType: '¿Qué necesitas?',
      projectTypes: ['Sitio web', 'App', 'Sistema de gestión', 'Otro'],
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Correo',
      emailPlaceholder: 'tu@correo.com',
      message: 'Tu proyecto',
      messagePlaceholder: 'Cuéntame tu idea en pocas líneas',
      submit: 'Enviar mensaje',
      error: 'No pude enviar tu mensaje. Intenta de nuevo o escríbeme a',
      reset: 'Enviar otro mensaje',
      mailSubject: 'Nuevo proyecto',
    },
    results: {
      delivered: {
        status: 'Mensaje enviado',
        title: 'Gracias. Te escribo pronto.',
        body: 'Mientras tanto, puedes revisar mis proyectos.',
      },
      'handed-off': {
        status: 'Correo listo',
        title: 'Tu mensaje te espera en tu app de correo.',
        body: 'Envíalo desde ahí y te respondo pronto.',
      },
    },
    details: {
      email: 'Correo directo',
      socials: 'Redes',
      location: 'Ubicación',
    },
  },
  project: {
    back: 'Proyectos',
    allProjects: 'Todos los proyectos',
    liveSite: 'Ver sitio en vivo',
    sourceCode: 'Ver código',
    facts: {
      label: 'Datos del proyecto',
      client: 'Cliente',
      role: 'Mi rol',
      duration: 'Duración',
      stack: 'Stack',
    },
    showcase: {
      label: 'Vista principal',
      alt: (title) => `Captura principal de ${title}`,
      emptyLabel: 'Espacio para la captura principal del proyecto',
      placeholder: '[Captura principal · 1440×900]',
    },
    narrative: {
      label: 'El reto y la solución',
      challenge: 'El reto',
      solution: 'La solución',
    },
    features: {
      eyebrow: 'Lo más destacado',
      title: 'Detalles que importan.',
    },
    gallery: {
      eyebrow: 'Galería',
      title: 'En cada pantalla.',
      desktop: {
        alt: (title) => `${title} en escritorio`,
        emptyLabel: 'Espacio para una captura de escritorio',
        placeholder: '[Captura · escritorio]',
      },
      mobile: {
        alt: (title) => `${title} en móvil`,
        emptyLabel: 'Espacio para una captura en móvil',
        placeholder: '[Móvil]',
      },
      detail: {
        alt: (title) => `Detalle de ${title}`,
        emptyLabel: 'Espacio para una captura de detalle',
        placeholder: '[Captura · detalle]',
      },
    },
    outcome: {
      eyebrow: 'Resultado',
    },
    closing: {
      label: 'Siguiente proyecto',
      next: 'Siguiente proyecto',
      title: '¿Tienes una idea parecida?',
      lede: 'Cuéntamela y vemos cómo hacerla realidad.',
      action: 'Hablemos',
    },
  },
  notFound: {
    headline: [{ text: 'Esta página' }, { text: 'no existe.', accent: true }],
    lede: 'Puede que el enlace haya cambiado. Desde el inicio encuentras todo.',
    action: 'Volver al inicio',
  },
};
