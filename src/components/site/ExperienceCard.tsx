import React from 'react';
import { Briefcase, GraduationCap, MapPin, Pin } from 'lucide-react';

interface ExperienceCardProps {
  item: {
    title: string;
    name: string;
    subTitle?: string;
    location?: string;
    additionalDetails?: React.ReactNode;
    startDate: string;
    endDate: string;
    period: string;
    description: string[];
    icon?: React.ReactNode;
  };
  type: 'work' | 'education';
}

const Icon = ({ item, type }: ExperienceCardProps) => {
  if (item.icon) {
    return item.icon;
  } else {
    if (type === 'education') {
      return <GraduationCap className="text-primary" size={24} />;
    } else {
      return <Briefcase className="text-primary" size={24} />;
    }
  }
};

const ExperienceCard = ({ item, type }: ExperienceCardProps) => {
  return (
    <div className="flex gap-6">
      <div className="bg-primary/10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg">
        <Icon item={item} type={type} />
      </div>
      <div className="flex-grow space-y-2">
        <h4 className="text-lg font-semibold">{item.title}</h4>
        <p className="text-sm text-gray-500">{item.subTitle}</p>
        <div className="text-primary flex items-center gap-4">
          <p className="">{item.name}</p>
          <div className="flex items-center gap-1 text-sm">
            <MapPin size={15} /> {item.location}
          </div>
        </div>
        <p className="text-sm text-gray-500">{item.period}</p>
        <ul className="list-inside list-disc space-y-1 text-gray-400">
          {item.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
        <div>{item.additionalDetails}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
