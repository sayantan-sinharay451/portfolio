import React from 'react';
import SectionHeading from '../../../_components/SectionHeading';
import EducationCard from '@/components/site/ExperienceCard';
import { IEducation } from '@/lib/models/Education';

const educations: IEducation[] = [];

const EducationSection = () => {
  return (
    <section>
      <SectionHeading heading="Education" />
      <div className="space-y-8">
        {educations.map((education, index) => (
          <EducationCard key={index} item={education} type="education" />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
