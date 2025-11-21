import React from 'react';
import SectionHeading from '../../../_components/SectionHeading';
import EducationCard from '@/components/site/ExperienceCard';
import { IEducation } from '@/lib/models/Education';
import { mapEducationToDisplay } from '@/lib/helper/mapEductaionExpirenece';

const educations: Partial<IEducation>[] = [
  {
    institution: 'University of Engineering and Management, Jaipur',
    degree: 'B.Tech',
    fieldOfStudy: 'Computer Science & Engineering',
    startDate: new Date('2019-07-01'),
    endDate: new Date('2023-06-01'),
    grade: 'SGPA: 7.45',
    activities: [
      'Organized 150+ student coding contests',
      'Competitive programming participation (CodeChef, LeetCode, GFG, HackerRank, Codeforces)',
    ],
    description:
      'Completed a Bachelor of Technology in Computer Science & Engineering with exposure to competitive programming, academic research, and leadership in coding communities. Published a research paper on slope stability study and actively engaged in programming contests.',
  },
];

const EducationSection = () => {
  return (
    <section>
      <SectionHeading heading="Education" />
      <div className="space-y-8">
        {educations.map((education, index) => (
          <EducationCard key={index} item={mapEducationToDisplay(education as IEducation)} />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
