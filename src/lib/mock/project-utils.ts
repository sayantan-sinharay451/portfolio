import { projectSeeds } from './Project';
import { slugify } from '../utils/slugify';

export type PortfolioProject = (typeof projectSeeds)[number] & {
  slug: string;
};

export const slugifyProjectTitle = slugify;

export const portfolioProjects: PortfolioProject[] = projectSeeds.map((project) => ({
  ...project,
  slug: slugifyProjectTitle(project.title),
}));

export const getProjectBySlug = (slug: string) =>
  portfolioProjects.find((project) => project.slug === slug);
