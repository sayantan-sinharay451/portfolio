import React, { MouseEventHandler, useRef, useState } from 'react';
import { ExternalLink, GithubIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <Card className="card-aesthetic group relative h-[300px] overflow-hidden border-none">
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/60" />
      <CardHeader>
        <div className="relative mb-4 flex h-25 items-end justify-between">
          <CardTitle className="">
            <h3 className="group-hover:text-primary text-lg font-semibold">{title}</h3>
          </CardTitle>

          <div className="absolute top-0 right-0 flex gap-2">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge variant={'outline'} className="bg-transparent" key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="py-4">
        <CardDescription className="text-muted font-medium">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
