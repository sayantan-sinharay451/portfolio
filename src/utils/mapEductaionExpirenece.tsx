import { ExperienceDisplay } from '@/components/site/ExperienceCard';
import { IEducation } from '../lib/models/Education';

export const mapEducationToDisplay = (edu: IEducation): ExperienceDisplay => ({
  type: 'education',
  title: edu.degree,
  subtitle: edu.institution,
  location: edu.location,
  startDate: new Date(edu.startDate),
  endDate: edu.endDate ? new Date(edu.endDate) : undefined,

  // Clean, simple factual details ONLY
  details: [
    `Field of Study: ${edu.fieldOfStudy}`,
    edu.description ? `Summary: ${edu.description}` : '',
  ].filter(Boolean),

  // Structured extra data
  grade: edu.grade,
  activities: edu.activities && edu.activities.length > 0 ? [...edu.activities] : undefined,
  curriculum: edu.curriculum && edu.curriculum.length > 0 ? [...edu.curriculum] : undefined,
});
