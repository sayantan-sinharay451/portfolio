// components/ProjectCardDetailed.tsx
'use client';

import React, { useMemo, useState } from 'react';
import { GithubIcon, ExternalLink } from 'lucide-react';
import TechnologyBadge from './TechnologyBadge';
import TextBadge from './TextBadge';

interface ProjectCardDetailedProps {
  id?: string | number;
  title: string;
  description: string;
  shortDescription?: string;
  technologies?: string[];
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string | null;
}

export default function ProjectCardDetailed({
  id,
  title,
  description,
  shortDescription,
  technologies = [],
  tags = [],
  githubUrl,
  liveUrl,
  imageUrl,
}: ProjectCardDetailedProps) {
  const [expanded, setExpanded] = useState(false);

  const initialText = shortDescription || description;
  const isExpandable = useMemo(() => description && description.length > 360, [description]);

  return (
    <article className="card-aesthetic relative overflow-hidden rounded-2xl border-none">
      {/* Image if present */}
      {imageUrl && (
        <div className="h-44 w-full overflow-hidden rounded-t-2xl md:h-56">
          {/* Use next/image in Next project for better performance (this uses standard img for portability) */}
          <img
            src={imageUrl}
            alt={`${title} screenshot`}
            className="h-full w-full object-cover object-center grayscale-[10%] transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-foreground line-clamp-2 text-2xl font-semibold md:text-3xl">
            {title}
          </h3>

          <div className="flex items-center gap-3">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon className="hover:text-primary transition" />
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" aria-label="Live Demo">
                <ExternalLink className="hover:text-primary transition" />
              </a>
            )}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((t) => (
            <TechnologyBadge key={t} name={t} size="md" />
          ))}
        </div>

        {/* tags */}
        {tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tg) => (
              <TextBadge key={tg} text={tg} size="sm" />
            ))}
          </div>
        )}

        {/* Description */}
        <div className="mt-4">
          {!expanded ? (
            <p className="text-foreground/70 line-clamp-4 leading-relaxed">{initialText}</p>
          ) : (
            <p className="text-foreground/70 leading-relaxed">{description}</p>
          )}

          {isExpandable && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="text-primary mt-3 inline-flex items-center gap-2 text-sm font-medium"
            >
              {expanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
