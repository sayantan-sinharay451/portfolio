import React from 'react';
import { ISkill, ProficiencyLevel } from '@/lib/models/Skills';
import { Progress } from '@/components/ui/progress';
import SkillIcon from '@/components/site/SkillIcon';

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
    <div className="border-primary-light/30 flex items-center gap-4 rounded-md border-2 p-4">
      <SkillIcon name={skill.name} size={48} />
      <div className="w-full">
        <div className="mb-1 flex items-center justify-between">
          <h4 className="font-semibold">{skill.name}</h4>
          <span className="text-muted text-sm">{skill.proficiency}</span>
        </div>
        <Progress value={proficiencyToValue(skill.proficiency as ProficiencyLevel)} />
      </div>
    </div>
  );
};

export default SkillCard;
