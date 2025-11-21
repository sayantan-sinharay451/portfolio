import mongoose, { Schema, Document } from "mongoose";

export interface IExperience extends Document {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  responsibilities: string[];
  technologies: string[];
  location: string;
  isCurrent: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const ExperienceSchema: Schema = new Schema(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    responsibilities: [{ type: String }],
    technologies: [{ type: String }],
    location: { type: String },
    isCurrent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Experience || mongoose.model<IExperience>("Experience", ExperienceSchema);