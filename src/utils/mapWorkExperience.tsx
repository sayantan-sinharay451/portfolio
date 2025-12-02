import TechnologyBadge from '@/components/site/TechnologyBadge';
import { IExperience } from '../lib/models/Experience';
import { ExperienceDisplay } from '@/components/site/ExperienceCard';

export const mapExperienceToDisplay = (exp: IExperience): ExperienceDisplay => ({
  type: 'work',
  title: exp.position,
  subtitle: exp.company,
  startDate: new Date(exp.startDate),
  endDate: exp.endDate ? new Date(exp.endDate) : undefined,
  location: exp.location,
  details: [...exp.responsibilities],
  extra:
    exp.technologies && exp.technologies.length > 0 ? (
      <div className="flex flex-wrap gap-4 pt-1">
        {exp.technologies.map((tech) => (
          <TechnologyBadge key={tech} name={tech} />
        ))}
      </div>
    ) : null,
});
