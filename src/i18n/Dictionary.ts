import type { NavigationSection } from '@/data/navigation';
import type { HeadlineLine } from '@/lib/headline';
import type { DeliveryOutcome } from '@/scripts/contact/ContactChannel';

export interface HeadingCopy {
  eyebrow: string;
  title: string;
}

export interface SectionCopy extends HeadingCopy {
  lede: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ContactResultCopy {
  status: string;
  title: string;
  body: string;
}

export interface MediaCopy {
  alt: (title: string) => string;
  emptyLabel: string;
  placeholder: string;
}

export interface Dictionary {
  meta: {
    tagline: string;
    notFound: string;
  };
  header: {
    navigation: string;
    language: string;
    contact: string;
  };
  navigation: Record<NavigationSection, string>;
  footer: {
    backToTop: string;
  };
  profile: {
    intro: (name: string) => string;
    description: string;
    location: string;
    remote: string;
  };
  hero: {
    available: string;
    headline: HeadlineLine[];
    primaryAction: string;
    secondaryAction: string;
    previewAddress: string;
  };
  services: SectionCopy;
  projects: SectionCopy & {
    action: string;
  };
  skills: SectionCopy;
  process: HeadingCopy & {
    steps: ProcessStep[];
  };
  contact: HeadingCopy & {
    accent: string;
    lede: string;
    form: {
      projectType: string;
      projectTypes: string[];
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      error: string;
      reset: string;
      mailSubject: string;
    };
    results: Record<DeliveryOutcome, ContactResultCopy>;
    details: {
      email: string;
      socials: string;
      location: string;
    };
  };
  project: {
    back: string;
    allProjects: string;
    liveSite: string;
    sourceCode: string;
    facts: {
      label: string;
      client: string;
      role: string;
      duration: string;
      stack: string;
    };
    showcase: MediaCopy & {
      label: string;
    };
    narrative: {
      label: string;
      challenge: string;
      solution: string;
    };
    features: HeadingCopy;
    gallery: HeadingCopy & {
      desktop: MediaCopy;
      mobile: MediaCopy;
      detail: MediaCopy;
    };
    outcome: {
      eyebrow: string;
    };
    closing: {
      label: string;
      next: string;
      title: string;
      lede: string;
      action: string;
    };
  };
  notFound: {
    headline: HeadlineLine[];
    lede: string;
    action: string;
  };
}
