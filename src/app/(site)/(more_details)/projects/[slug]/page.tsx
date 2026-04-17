import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';

import { getProjectBySlug } from '@/lib/mock/project-utils';
import { Button } from '@/components/ui/button';
import TechnologyBadge from '@/components/site/TechnologyBadge';
import TextBadge from '@/components/site/TextBadge';

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="section-spacing">
      <div className="mb-10">
        <Button asChild variant="ghost" className="mb-6 px-0 text-sm">
          <Link href="/projects">
            <ArrowLeft className="size-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="max-w-4xl space-y-5">
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => <TextBadge key={tag} text={tag} />)}
          </div>

          <h1 className="text-transparent-gradient w-fit">{project.title}</h1>

          <p className="max-w-3xl text-lg text-[var(--color-text-secondary)]">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Preview
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            )}

            {project.githubUrl && (
              <Button asChild variant="outline">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  Source Code
                  <Github className="size-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="card-aesthetic space-y-6 p-6 md:p-8">
          <div>
            <h2 className="mb-3 font-heading text-3xl text-white">Overview</h2>
            <p className="text-[var(--color-text-secondary)]">{project.description}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.24),transparent_52%),linear-gradient(180deg,rgba(17,24,39,0.95),rgba(3,7,18,0.96))] p-6">
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-primary-light/80">
              Project Snapshot
            </p>
            <p className="max-w-2xl text-base text-[var(--color-text-secondary)]">
              This case study highlights the product thinking, technical execution, and UI craft
              behind the project. Add screenshots here once assets are ready for launch.
            </p>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="card-aesthetic p-6">
            <h3 className="mb-4 font-heading text-2xl text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <TechnologyBadge key={technology} name={technology} size="sm" variant="filled" />
              ))}
            </div>
          </div>

          <div className="card-aesthetic p-6">
            <h3 className="mb-4 font-heading text-2xl text-white">Project Type</h3>
            <p className="text-[var(--color-text-secondary)]">{project.category}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
