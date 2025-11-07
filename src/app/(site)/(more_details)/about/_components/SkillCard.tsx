import React from 'react';
import { ISkill } from '@/lib/models/Skills';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

interface SkillCardProps {
  skill: ISkill;
}

const proficiencyToValue = (proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert') => {
  switch (proficiency) {
    case 'Beginner':
      return 25;
    case 'Intermediate':
      return 50;
    case 'Advanced':
      return 75;
    case 'Expert':
      return 100;
  }
};

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      {skill.icon && (
        <Image src={skill.icon.original} alt={skill.name} width={40} height={40} />
      )}
      <div className="w-full">
        <div className="flex justify-between items-center mb-1">
          <h4 className="font-semibold">{skill.name}</h4>
          <span className="text-sm text-gray-500">{skill.proficiency}</span>
        </div>
        <Progress value={proficiencyToValue(skill.proficiency)} />
      </div>
    </div>
  );
};

export default SkillCard;