import { ExperienceDisplay } from "@/components/site/ExperienceCard";
import { IEducation } from "../models/Education";

export const mapEducationToDisplay = (edu: IEducation): ExperienceDisplay => ({
  type: "education",
  title: edu.degree,
  subtitle: edu.institution,
  startDate: new Date(edu.startDate),
  endDate: edu.endDate ? new Date(edu.endDate) : undefined,
  details: [
    `Field of Study: ${edu.fieldOfStudy}`,
    edu.grade ? `Grade: ${edu.grade}` : "",
    ...(edu.activities ?? []),
    edu.description ?? "",
  ].filter(Boolean),
});