import React from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { Location } from '@/types/Location';

export interface ExperienceDisplay {
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  location?: Location;
  startDate: Date;
  endDate?: Date;
  details: string[];
  icon?: React.ReactNode;
  extra?: React.ReactNode;
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
                <MapPin size={15} /> {item.location.city}, {item.location.country}
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
