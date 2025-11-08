import React from 'react';
import SectionHeading from '../../../_components/SectionHeading';
import ExperienceCard from '@/components/site/ExperienceCard';

interface Experience {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  responsibilities: string[];
  technologies: string[];
  location: string;
  isCurrent: boolean;
}

const experiences: Experience[] = [
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
    technologies: ['React', 'TypeScript', 'CSS', 'HTML', 'Git'],
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
  const transformExperiences = (item: Experience) => {
    return {
      title: item.position,
      name: item.company,
      location: item.location,
      startDate: item.startDate.toDateString(),
      endDate: item.isCurrent ? 'Present' : item.endDate?.toDateString() || '',
      period: `${item.startDate.toLocaleString('default', { month: 'short', year: 'numeric' })} - ${item.isCurrent ? 'Present' : item.endDate ? item.endDate.toLocaleString('default', { month: 'short', year: 'numeric' }) : ''}`,
      description: item.responsibilities,
      additionalDetails:
        item.technologies.length > 0 ? (
          <div className="mt-2">
            <strong className="text-gray-300">Technologies:</strong> {item.technologies.join(', ')}
          </div>
        ) : null,
    };
  };

  return (
    <section>
      <SectionHeading heading="Work Experience" />
      <div className="space-y-8">
        {experiences
          .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
          .map((experience, index) => (
            <ExperienceCard key={index} item={transformExperiences(experience)} type="work" />
          ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
