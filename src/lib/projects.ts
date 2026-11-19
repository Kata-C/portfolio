import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n/locales';
import { localize, type Localize } from '@/i18n/localize';
import { localizePath } from '@/i18n/paths';

type ProjectEntry = CollectionEntry<'projects'>;

type ProjectData = ProjectEntry['data'];

export type ProjectPreviewKind = ProjectData['preview'];

export type Project = Localize<ProjectData> & {
  slug: string;
  href: string;
  label: string;
};

export const projectRoute = (slug: string): string => `/projects/${slug}/`;

const toProject = (entry: ProjectEntry, locale: Locale): Project => {
  const project = localize(entry.data, locale);

  return {
    ...project,
    slug: entry.id,
    href: localizePath(locale, projectRoute(entry.id)),
    label: `${project.category} · ${project.year}`,
  };
};

export const getProjects = async (locale: Locale): Promise<Project[]> => {
  const entries = await getCollection('projects');

  return entries
    .sort((first, second) => first.data.order - second.data.order)
    .map((entry) => toProject(entry, locale));
};

export const findNextProject = (projects: Project[], current: Project): Project => {
  const position = projects.findIndex((project) => project.slug === current.slug);
  return projects[(position + 1) % projects.length] ?? current;
};
