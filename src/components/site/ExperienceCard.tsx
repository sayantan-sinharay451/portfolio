import React from 'react';
import { Briefcase, GraduationCap, Award, BookOpen, MapPin } from 'lucide-react';

export interface ExperienceDisplay {
  type: 'work' | 'education' | 'certification' | 'volunteer' | 'award';
  title: string; // e.g., Software Engineer / B.Tech / Certificate Name
  subtitle: string; // company / institution / provider
  location?: string;
  startDate: Date;
  endDate?: Date;
  details: string[]; // bullet points
  icon?: React.ReactNode;
  extra?: React.ReactNode; // react elements like tags
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
    case 'volunteer':
      return <BookOpen className={commonClass} size={24} />;
    case 'award':
      return <Award className={commonClass} size={24} />;
    default:
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
  console.log(item);
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
                <MapPin size={15} /> {item.location}
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

        {/* Extra UI Elements (tags, links, etc.) */}
        {item.extra && <div className="pt-2">{item.extra}</div>}
      </div>
    </div>
  );
};

export default ExperienceCard;
