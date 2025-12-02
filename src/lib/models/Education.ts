import { Location } from "@/types/Location";
import mongoose, { Schema, Document } from "mongoose";
import { LocationSchema } from "./Location";

export interface IEducation extends Document {
  institution: string;
  degree: string;
  location?: Location;
  fieldOfStudy: string;
  startDate: Date;
  endDate?: Date;
  grade?: string;
  activities?: string[];
  description?: string;
  curriculum?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const EducationSchema: Schema = new Schema(
  {
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    location: { type: LocationSchema, required: true },
    fieldOfStudy: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    grade: { type: String },
    activities: { type: [String] },
    curriculum: { type: [String] },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Education ||
  mongoose.model<IEducation>("Education", EducationSchema);
