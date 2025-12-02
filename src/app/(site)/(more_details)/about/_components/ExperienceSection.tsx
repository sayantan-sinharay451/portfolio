import React from 'react';
import SectionHeading from '../../../../../components/site/SectionHeading';
import ExperienceCard from '@/components/site/ExperienceCard';
import { mapExperienceToDisplay } from '@/utils/mapWorkExperience';
import { IExperience } from '@/lib/models/Experience';

const experiences: Partial<IExperience>[] = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Frontend Developer',
    startDate: new Date('2020-01-15'),
    endDate: new Date('2022-06-30'),
    responsibilities: [
      'Developed and maintained web applications using React and TypeScript.',
      'Collaborated with designers to implement responsive UI/UX designs.',
      'Optimized application performance and ensured cross-browser compatibility.',
    ],
    technologies: ['React', 'TypeScript', 'CSS3', 'HTML5', 'Git'],
    location: 'New York, NY',
    isCurrent: false,
  },
  {
    company: 'Innovatech Labs',
    position: 'Full Stack Developer',

    startDate: new Date('2022-07-01'),
    responsibilities: [
      'Designed and developed RESTful APIs using Node.js and Express.',
      'Implemented frontend features with Next.js and integrated with backend services.',
      'Worked in an Agile environment, participating in sprint planning and code reviews.',
    ],
    technologies: ['Node.js', 'Express', 'Next.js', 'MongoDB', 'Docker'],
    location: 'San Francisco, CA',
    isCurrent: true,
  },
];

const ExperienceSection = () => {
  return (
    <section>
      <SectionHeading heading="Work Experience" />
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} item={mapExperienceToDisplay(experience as IExperience)} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
