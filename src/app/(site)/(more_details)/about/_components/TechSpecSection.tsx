import React from 'react';
import SectionHeading from '../../../../../components/site/SectionHeading';
import { ISkill } from '@/lib/models/Skills';
import SkillCard from './SkillCard';
import { SkillCategory } from '@/lib/models/Skills';

const skills: ISkill[] = [
  {
    name: 'JavaScript',
    proficiency: 'Expert',
    category: SkillCategory.Language,
  },
  {
    name: 'TypeScript',
    proficiency: 'Advanced',
    category: SkillCategory.Language,
  },
  {
    name: 'React',
    proficiency: 'Expert',
    category: SkillCategory.Frontend,
  },
  {
    name: 'Next.js',
    proficiency: 'Advanced',
    category: SkillCategory.Frontend,
  },
  {
    name: 'Node.js',
    proficiency: 'Intermediate',
    category: SkillCategory.Backend,
  },
  {
    name: 'Express',
    proficiency: 'Intermediate',
    category: SkillCategory.Backend,
  },
  {
    name: 'MongoDB',
    proficiency: 'Intermediate',
    category: SkillCategory.Database,
  },
  {
    name: 'PostgreSQL',
    proficiency: 'Beginner',
    category: SkillCategory.Database,
  },
].map((skill) => skill as ISkill);

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
      <SectionHeading heading="My Tech Stack" id="tech-spec-section" />
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
