import { ExperienceDisplay } from '@/components/site/ExperienceCard';
import { IEducation } from '../models/Education';
import TechnologyBadge from '@/components/site/TechnologyBadge';
import { Badge } from '@/components/ui/badge';

export const mapEducationToDisplay = (edu: IEducation): ExperienceDisplay => {
  const hasActivities = edu.activities && edu.activities.length > 0;
  const hasCurriculum = edu.curriculum && edu.curriculum.length > 0;

  return {
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

    // All rich UI goes in extra
    extra: (
      <div className="space-y-5">
        {/* ⭐ Grade Block */}
        {edu.grade && (
          <div className="bg-primary/10 border-primary/30 text-primary inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium shadow-[0_0_10px_rgba(16,185,129,0.25)] backdrop-blur-md">
            <span>Grade / CGPA:</span>
            <span className="font-semibold text-white">{edu.grade}</span>
          </div>
        )}

        {/* 🏆 Activities List */}
        {hasActivities && (
          <div>
            <h5 className="text-primary mb-1 text-sm font-semibold">Activities & Contributions</h5>
            <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
              {edu.activities!.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 📘 Curriculum / Courses */}
        {hasCurriculum && (
          <div className="pt-2">
            <h5 className="text-primary mb-2 text-sm font-semibold">Curriculum Highlights</h5>

            <div className="flex flex-wrap gap-3">
              {edu.curriculum!.map((course) => (
                <Badge variant="outline" key={course}>
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    ),
  };
};
