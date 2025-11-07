import React from 'react';

import { Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceCardProps {
  item: {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    period: string;
    description: string[];
  };
  type: 'work' | 'education';
}

const ExperienceCard = ({ item }: ExperienceCardProps) => {
  return (
    <>
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)]/10">
        {/* <Icon className="text-[var(--color-primary)]" size={24} /> */}
      </div>
      <div className="flex-grow space-y-3">
        <h4>{item.title}</h4>
        <p className="text-[var(--color-primary)]">{item.company}</p>
        <p className="text-sm text-[var(--color-text-secondary)]">{item.period}</p>
        <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
          {item.description}
        </p>
      </div>
    </>
  );
};

export default ExperienceCard;
