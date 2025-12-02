// components/ProjectsGrid.tsx
'use client';

import React from 'react';
import ProjectCardFeatured from './ProjectCardFeatured';
import ProjectCardDetailed from './ProjectCardDetailed';

type Mode = 'featured' | 'detailed';

interface Project {
  _id?: string;
  id?: string | number;
  title: string;
  shortDescription?: string;
  description?: string;
  technologies?: string[];
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string | null;
}

interface ProjectsGridProps {
  projects: Project[];
  mode?: Mode;
  columns?: number; // desired columns on desktop
}

export default function ProjectsGrid({
  projects,
  mode = 'featured',
  columns = 3,
}: ProjectsGridProps) {
  // grid class based on columns
  const gridCols =
    {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid gap-8 ${gridCols}`}>
      {projects.map((p) =>
        mode === 'featured' ? (
          <ProjectCardFeatured
            key={p._id || p.id || p.title}
            id={p._id || p.id}
            title={p.title}
            shortDescription={p.shortDescription}
            description={p.description}
            technologies={p.technologies}
            tags={p.tags}
            githubUrl={p.githubUrl}
            liveUrl={p.liveUrl}
            imageUrl={p.imageUrl}
          />
        ) : (
          <ProjectCardDetailed
            key={p._id || p.id || p.title}
            id={p._id || p.id}
            title={p.title}
            description={p.description || ''}
            shortDescription={p.shortDescription}
            technologies={p.technologies}
            tags={p.tags}
            githubUrl={p.githubUrl}
            liveUrl={p.liveUrl}
            imageUrl={p.imageUrl}
          />
        )
      )}
    </div>
  );
}
