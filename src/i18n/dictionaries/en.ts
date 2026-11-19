import type { Dictionary } from '@/i18n/Dictionary';

export const en: Dictionary = {
  meta: {
    tagline: 'Websites and apps built like products',
    notFound: 'Page not found',
  },
  header: {
    navigation: 'Main',
    language: 'Language',
    contact: 'Contact',
  },
  navigation: {
    services: 'Services',
    projects: 'Projects',
    skills: 'Skills',
    process: 'Process',
  },
  footer: {
    backToTop: 'Back to top',
  },
  profile: {
    intro: (name) => `I'm ${name}, an independent developer.`,
    description:
      'I design and build fast, clear websites, apps and management systems tailored to your business.',
    location: 'Mazatlán, Mexico',
    remote: 'remote work',
  },
  hero: {
    available: 'Available for projects',
    headline: [{ text: 'Websites and apps' }, { text: 'built like products.', accent: true }],
    primaryAction: "Let's talk about your project",
    secondaryAction: 'View projects',
    previewAddress: 'yourproject.com',
  },
  services: {
    eyebrow: 'Services',
    title: 'What I can do for you.',
    lede: 'From the first idea to launch. One point of contact, from start to finish.',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Recent work.',
    lede: "A selection of what I've designed and built.",
    action: 'View project',
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Tools I work with.',
    lede: 'I choose the technology for your project, not the other way around.',
  },
  process: {
    eyebrow: 'Process',
    title: 'Simple, from start to finish.',
    steps: [
      { title: 'We talk', description: 'I get to know your idea, your goals and who it is for.' },
      { title: 'Design', description: 'You see how it will look before any code is written.' },
      { title: 'Build', description: 'Clean, fast code that is ready to grow.' },
      { title: 'Launch', description: 'I publish your project and we fine tune it together.' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about",
    accent: 'your idea.',
    lede: "Tell me what you want to build and I'll get back to you within [24 hours].",
    form: {
      projectType: 'What do you need?',
      projectTypes: ['Website', 'App', 'Management system', 'Other'],
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      message: 'Your project',
      messagePlaceholder: 'Tell me your idea in a few lines',
      submit: 'Send message',
      error: "I couldn't send your message. Try again or email me at",
      reset: 'Send another message',
      mailSubject: 'New project',
    },
    results: {
      delivered: {
        status: 'Message sent',
        title: "Thanks. I'll be in touch soon.",
        body: 'In the meantime, take a look at my projects.',
      },
      'handed-off': {
        status: 'Email ready',
        title: 'Your message is waiting in your email app.',
        body: "Send it from there and I'll reply soon.",
      },
    },
    details: {
      email: 'Direct email',
      socials: 'Social',
      location: 'Location',
    },
  },
  project: {
    back: 'Projects',
    allProjects: 'All projects',
    liveSite: 'View live site',
    sourceCode: 'View code',
    facts: {
      label: 'Project details',
      client: 'Client',
      role: 'My role',
      duration: 'Duration',
      stack: 'Stack',
    },
    showcase: {
      label: 'Main view',
      alt: (title) => `Main screenshot of ${title}`,
      emptyLabel: 'Space for the main project screenshot',
      placeholder: '[Main screenshot · 1440×900]',
    },
    narrative: {
      label: 'The challenge and the solution',
      challenge: 'The challenge',
      solution: 'The solution',
    },
    features: {
      eyebrow: 'Highlights',
      title: 'Details that matter.',
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'On every screen.',
      desktop: {
        alt: (title) => `${title} on desktop`,
        emptyLabel: 'Space for a desktop screenshot',
        placeholder: '[Screenshot · desktop]',
      },
      mobile: {
        alt: (title) => `${title} on mobile`,
        emptyLabel: 'Space for a mobile screenshot',
        placeholder: '[Mobile]',
      },
      detail: {
        alt: (title) => `Detail of ${title}`,
        emptyLabel: 'Space for a detail screenshot',
        placeholder: '[Screenshot · detail]',
      },
    },
    outcome: {
      eyebrow: 'Outcome',
    },
    closing: {
      label: 'Next project',
      next: 'Next project',
      title: 'Have a similar idea?',
      lede: "Tell me about it and let's make it happen.",
      action: "Let's talk",
    },
  },
  notFound: {
    headline: [{ text: 'This page' }, { text: "doesn't exist.", accent: true }],
    lede: 'The link may have changed. You can find everything from the home page.',
    action: 'Back to home',
  },
};
