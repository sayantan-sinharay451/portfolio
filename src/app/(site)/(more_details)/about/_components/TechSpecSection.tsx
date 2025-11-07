import React from 'react';
import SectionHeading from '../../../_components/SectionHeading';
import { ISkill } from '@/lib/models/Skills';
import SkillCard from './SkillCard';

const skills: ISkill[] = [
  {
    name: 'JavaScript',
    proficiency: 'Expert',
    category: 'Frontend',
    icon: { original: '/icons/javascript.svg' },
  },
  {
    name: 'TypeScript',
    proficiency: 'Advanced',
    category: 'Frontend',
    icon: { original: '/icons/typescript.svg' },
  },
  {
    name: 'React',
    proficiency: 'Expert',
    category: 'Frontend',
    icon: { original: '/icons/react.svg' },
  },
  {
    name: 'Next.js',
    proficiency: 'Advanced',
    category: 'Frontend',
    icon: { original: '/icons/nextjs.svg' },
  },
  {
    name: 'Node.js',
    proficiency: 'Intermediate',
    category: 'Backend',
    icon: { original: '/icons/nodejs.svg' },
  },
  {
    name: 'Express',
    proficiency: 'Intermediate',
    category: 'Backend',
    icon: { original: '/icons/express.svg' },
  },
  {
    name: 'MongoDB',
    proficiency: 'Intermediate',
    category: 'Database',
    icon: { original: '/icons/mongodb.svg' },
  },
  {
    name: 'PostgreSQL',
    proficiency: 'Beginner',
    category: 'Database',
    icon: { original: '/icons/postgresql.svg' },
  },
];

const TechSpecSection = () => {
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, ISkill[]>);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <SectionHeading title="My Tech Stack" />
        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-6">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecSection;