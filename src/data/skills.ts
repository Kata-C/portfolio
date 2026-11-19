import type { Localized } from '@/i18n/locales';
import type { Localize } from '@/i18n/localize';

export interface SkillGroupCopy {
  name: string;
  items: string[];
}

export interface SkillGroupData {
  copy: Localized<SkillGroupCopy>;
}

export type SkillGroup = Localize<SkillGroupData>;

const frontend = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'];
const apps = ['React Native', 'Expo', 'App Store · Google Play'];
const backend = ['Node.js', 'NestJS', 'PostgreSQL', 'AWS'];
const design = ['Figma', 'UI/UX'];

export const skillGroups: SkillGroupData[] = [
  {
    copy: {
      es: { name: 'Frontend', items: frontend },
      en: { name: 'Frontend', items: frontend },
    },
  },
  {
    copy: {
      es: { name: 'Apps', items: [...apps, 'Notificaciones push', 'Compras in-app'] },
      en: { name: 'Apps', items: [...apps, 'Push notifications', 'In-app purchases'] },
    },
  },
  {
    copy: {
      es: { name: 'Backend', items: [...backend, 'APIs REST', 'WebSocket'] },
      en: { name: 'Backend', items: [...backend, 'REST APIs', 'WebSocket'] },
    },
  },
  {
    copy: {
      es: { name: 'Diseño', items: design },
      en: { name: 'Design', items: design },
    },
  },
];
