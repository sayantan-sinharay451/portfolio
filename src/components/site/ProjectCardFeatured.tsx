// components/ProjectCardFeatured.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { GithubIcon, ExternalLink } from 'lucide-react';
import TechnologyBadge from './TechnologyBadge';
import TextBadge from './TextBadge';

interface ProjectCardProps {
  id?: string | number;
  title: string;
  shortDescription?: string; // use shortDescription when available
  description?: string;
  technologies?: string[]; // list of tech names
  tags?: string[]; // text tags like 'API Integration'
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string | null; // not used in featured by default
  onClick?: () => void;
}

export default function ProjectCardFeatured({
  id,
  title,
  shortDescription,
  description,
  technologies = [],
  tags = [],
  githubUrl,
  liveUrl,
  imageUrl,
  onClick,
}: ProjectCardProps) {
  // Prefer shortDescription for featured; fallback to description
  const desc = shortDescription || description || '';

  return (
    <article
      role="article"
      className="card-aesthetic group relative min-h-[220px] overflow-hidden border-none p-6"
    >
      {/* top-right action icons */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-3 opacity-80">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub"
            className="hover:text-primary rounded p-1 transition"
          >
            <GithubIcon />
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Live Demo"
            className="hover:text-primary rounded p-1 transition"
          >
            <ExternalLink />
          </a>
        )}
      </div>

      {/* Title */}
      <h3
        className="text-foreground mb-3 line-clamp-2 text-lg font-semibold md:text-xl"
        title={title}
      >
        {title}
      </h3>

      {/* badges */}
      <div className="mb-4 flex flex-wrap gap-2">
        {technologies.slice(0, 6).map((t) => (
          <TechnologyBadge key={t} name={t} size="sm" variant="filled" />
        ))}

        {/* tags (text keywords) */}
        {tags.slice(0, 3).map((tag) => (
          <TextBadge key={tag} text={tag} size="sm" />
        ))}
      </div>

      {/* description — clamp to 3 lines */}
      <p className="text-foreground/60 mb-6 line-clamp-3 text-sm">{desc}</p>

      {/* CTA — small link to project detail or open modal */}
      <div className="mt-auto">
        <Link
          href={`/projects/${id ?? ''}`}
          className="text-primary text-sm font-medium hover:underline"
          onClick={onClick}
        >
          View project →
        </Link>
      </div>
    </article>
  );
}
