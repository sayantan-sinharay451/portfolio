import React from 'react';
import { GraduationCap } from 'lucide-react';

interface EducationCardProps {
  item: {
    title: string;
    institution: string;
    startDate: string;
    endDate: string;
    period: string;
    description: string[];
  };
}

const EducationCard = ({ item }: EducationCardProps) => {
  return (
    <div className="flex gap-6">
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <GraduationCap className="text-primary" size={24} />
      </div>
      <div className="flex-grow space-y-2">
        <h4 className="text-lg font-semibold">{item.title}</h4>
        <p className="text-primary">{item.institution}</p>
        <p className="text-sm text-gray-500">{item.period}</p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          {item.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationCard;
