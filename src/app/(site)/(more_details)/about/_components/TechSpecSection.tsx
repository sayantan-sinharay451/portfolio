import React from 'react';
import SectionHeading from '../../../../../components/site/SectionHeading';
import { ISkill } from '@/lib/models/Skills';
import SkillCard from './SkillCard';
import * as icons from 'simple-icons';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import SkillIcon from '@/components/site/SkillIcon';

const skills: Partial<ISkill>[] = [
  {
    name: 'JavaScript',
    proficiency: 'Expert',
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    proficiency: 'Advanced',
    category: 'Frontend',
  },
  {
    name: 'React',
    proficiency: 'Expert',
    category: 'Frontend',
  },
  {
    name: 'Next.js',
    proficiency: 'Advanced',
    category: 'Frontend',
  },
  {
    name: 'Node.js',
    proficiency: 'Intermediate',
    category: 'Backend',
  },
  {
    name: 'Express',
    proficiency: 'Intermediate',
    category: 'Backend',
  },
  {
    name: 'MongoDB',
    proficiency: 'Intermediate',
    category: 'Database',
  },
  {
    name: 'PostgreSQL',
    proficiency: 'Beginner',
    category: 'Database',
  },
];

const TechSpecSection = () => {
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      const category = skill.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    },
    {} as Record<string, ISkill[]>
  );
  return (
    <section>
      <SectionHeading heading="My Tech Stack" />
      <div className="space-y-12">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category}>
            <h3 className="mb-6 text-2xl font-semibold">{category}</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSpecSection;
