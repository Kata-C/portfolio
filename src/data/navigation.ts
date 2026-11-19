import type { SectionKey } from '@/data/sections';

export const navigationSections = ['services', 'projects', 'skills', 'process'] as const satisfies readonly SectionKey[];

export type NavigationSection = (typeof navigationSections)[number];
