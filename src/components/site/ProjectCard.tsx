import React, { useMemo, useState } from 'react';
import { ExternalLink, GithubIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

type ProjectCardProps = {
  _id?: string;
  title: string;
  shortDescription?: string;
  description: string;
  technologies: string[];
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
};
import TechnologyBadge from './TechnologyBadge';
import TextBadge from './TextBadge';
import Link from 'next/link';

const ProjectCard = ({
  _id,
  title,
  shortDescription,
  description,
  technologies,
  tags,
  githubUrl,
  liveUrl,
  isFeatured,
}: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const isExpandable = useMemo(() => description && description.length > 300, [description]);

  const displayDescription = useMemo(() => {
    if (!description) return '';
    if (!isExpandable || expanded) return description;
    return description.slice(0, 300) + '...';
  }, [description, isExpandable, expanded]);
  return (
    <Card className="card-aesthetic group relative overflow-hidden border-none p-6 md:p-8">
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/60" />
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-3 py-5">
          <h3 className="text-foreground group-hover:text-primary line-clamp-2 text-2xl font-semibold md:text-3xl">
            {title}
          </h3>

          <div className="mb-auto flex gap-3">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon size={20} className="hover:text-primary transition" />
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" aria-label="Live Demo">
                <ExternalLink size={20} className="hover:text-primary transition" />
              </a>
            )}
          </div>
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          {tags &&
            tags.length > 0 &&
            tags.map((tg: string) => <TextBadge key={tg} text={tg} size="sm" />)}
        </div>
      </CardHeader>

      <CardContent className="py-4">
        <h5>Technologies:</h5>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((t) => (
            <TechnologyBadge key={t} name={t} size="sm" variant="filled" />
          ))}
        </div>
        <CardDescription className="text-muted py-4 font-medium">
          <div className="mt-4">
            {isFeatured ? (
              <p className="text-foreground/70 line-clamp-4 leading-relaxed">{shortDescription}</p>
            ) : (
              <p className="text-foreground/70 leading-relaxed">{displayDescription}</p>
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
        </CardDescription>
        {!isFeatured && (
          <Link
            href={`/projects/${_id ?? ''}`}
            className="hover:!text-primary text-sm font-medium transition hover:!underline"
          >
            View project →
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
