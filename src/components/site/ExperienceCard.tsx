import React from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { Location } from '@/types/Location';
import TechnologyBadge from '@/components/site/TechnologyBadge';
import { Badge } from '@/components/ui/badge';

export interface ExperienceDisplay {
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  location?: Location | string;
  startDate: Date;
  endDate?: Date;
  details: string[];
  icon?: React.ReactNode;
  // structured, serializable fields for extra UI
  technologies?: string[];
  grade?: string;
  activities?: string[];
  curriculum?: string[];
} 

interface ExperienceCardProps {
  item: ExperienceDisplay;
}

const getIcon = (item: ExperienceDisplay) => {
  if (item.icon) return item.icon;

  const commonClass = 'text-primary';

  switch (item.type) {
    case 'education':
      return <GraduationCap className={commonClass} size={24} />;
    case 'work':
      return <Briefcase className={commonClass} size={24} />;
  }
};

const formatePeriod = (startDate: Date, endDate?: Date | undefined): string => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  });

  const start = formatter.format(startDate);
  const end = endDate ? formatter.format(endDate) : 'Present';

  return `${start} - ${end}`;
};

const ExperienceCard = ({ item }: ExperienceCardProps) => {
  return (
    <div className="flex gap-6">
      <div className="bg-primary/30 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl">
        {getIcon(item)}
      </div>
      <div className="flex flex-grow flex-col gap-4">
        {/* Title and Period */}
        <div>
          <div className="flex items-start justify-between gap-0">
            <h4 className="!text-lg leading-tight !font-bold">{item.title}</h4>
            <p className="text-sm font-light">{formatePeriod(item.startDate, item.endDate)}</p>
          </div>
          {/* Subtitle + Location */}
          <div className="text-primary flex flex-wrap items-center gap-3 font-medium">
            <span>{item.subtitle}</span>

            {item.location && (
              <span className="flex items-center gap-1 text-sm">
                <MapPin size={15} />{' '}
                {typeof item.location === 'string'
                  ? item.location
                  : [item.location.city, item.location.state, item.location.country]
                      .filter(Boolean)
                      .join(', ')}
              </span>
            )}
          </div>
        </div>
        {/* Description List */}
        {item?.details?.length > 0 && (
          <ul className="text-muted list-inside list-disc space-y-1 leading-relaxed">
            {item.details.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        )}

        {/* Technologies (for work) */}
        {item.technologies && item.technologies.length > 0 && (
          <div className="pt-2">
            <div className="flex flex-wrap gap-4 pt-1">
              {item.technologies.map((tech) => (
                <TechnologyBadge key={tech} name={tech} />
              ))}
            </div>
          </div>
        )}

        {/* Education-specific extras */}
        {item.type === 'education' && (
          <div className="pt-2 space-y-3">
            {item.grade && (
              <div className="bg-primary/10 border-primary/30 text-primary inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium shadow-[0_0_10px_rgba(16,185,129,0.25)] backdrop-blur-md">
                <span>Grade / CGPA:</span>
                <span className="font-semibold text-white">{item.grade}</span>
              </div>
            )}

            {item.activities && item.activities.length > 0 && (
              <div>
                <h5 className="text-primary mb-1 text-sm font-semibold">Activities & Contributions</h5>
                <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                  {item.activities.map((act, i) => (
                    <li key={i}>{act}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.curriculum && item.curriculum.length > 0 && (
              <div className="pt-2">
                <h5 className="text-primary mb-2 text-sm font-semibold">Curriculum Highlights</h5>

                <div className="flex flex-wrap gap-3">
                  {item.curriculum.map((course) => (
                    <Badge variant="outline" key={course}>
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
