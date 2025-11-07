import React from 'react';
import SectionHeading from '../../../_components/SectionHeading';
import EducationCard from '@/components/site/EducationCard';
import { IEducation } from '@/lib/models/Education';

const educations: IEducation[] = [
  {
    institution: 'University of Technology',
    degree: 'Bachelor of Science',
    fieldOfStudy: 'Computer Science',
    startDate: new Date('2016-09-01'),
    endDate: new Date('2020-06-15'),
    description: 'Graduated with honors. Specialized in software engineering and artificial intelligence.',
  },
  {
    institution: 'Online Learning Platform',
    degree: 'Certified Full-Stack Web Developer',
    fieldOfStudy: 'Web Development',
    startDate: new Date('2020-07-01'),
    endDate: new Date('2020-12-31'),
    description: 'Completed an intensive bootcamp covering the MERN stack, data structures, and algorithms.',
  },
];

const EducationSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <SectionHeading title="Education" />
        <div className="space-y-8">
          {educations.map((education, index) => (
            <EducationCard
              key={index}
              item={{
                title: education.degree,
                institution: education.institution,
                startDate: education.startDate.toLocaleDateString(),
                endDate: education.endDate.toLocaleDateString(),
                period: `${education.startDate.getFullYear()} - ${education.endDate.getFullYear()}`,
                description: [education.description],
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
