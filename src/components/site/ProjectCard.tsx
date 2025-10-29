import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
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
  onClick,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      // whileHover={{ y: -8, scale: 1.015 }}
      className=""
      onClick={onClick}
    >
      <Card>
        <CardHeader className="w-full">
          <div className="" id="card-avatar">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/90 p-2 transition-colors hover:bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-5 w-5 text-[var(--color-text)]" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/90 p-2 transition-colors hover:bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-5 w-5 text-[var(--color-text)]" />
              </a>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle>
            <h3>{title}</h3>
          </CardTitle>
          <CardDescription>
            <p className="text-muted-foreground line-clamp-2 text-base leading-relaxed">
              {description}
            </p>
          </CardDescription>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
