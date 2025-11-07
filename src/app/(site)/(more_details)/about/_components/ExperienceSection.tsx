import React from 'react';
import SectionHeading from '../../../_components/SectionHeading';
import ExperienceCard from '@/components/site/ExperienceCard';
import { IExperience } from '@/lib/models/Experience';

const experiences: IExperience[] = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Senior Frontend Developer',
    startDate: new Date('2020-01-15'),
    endDate: new Date('2023-08-31'),
    description:
      'Led the development of a new e-commerce platform using React and Next.js. Collaborated with cross-functional teams to deliver high-quality features. Mentored junior developers and conducted code reviews.',
  },
  {
    company: 'Web Wizards LLC',
    position: 'Full Stack Developer',
    startDate: new Date('2018-06-01'),
    endDate: new Date('2019-12-31'),
    description:
      'Developed and maintained web applications for various clients using the MERN stack. Worked on both frontend and backend development, from UI design to database management.',
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <SectionHeading title="Work Experience" />
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              item={{
                title: experience.position,
                company: experience.company,
                startDate: experience.startDate.toLocaleDateString(),
                endDate: experience.endDate.toLocaleDateString(),
                period: `${experience.startDate.getFullYear()} - ${experience.endDate.getFullYear()}`,
                description: [experience.description],
              }}
              type="work"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
