import { Location } from "@/types/Location";
import mongoose, { Schema, Document } from "mongoose";
import { LocationSchema } from "./Location";

export interface IExperience extends Document {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  responsibilities: string[];
  technologies: string[];
  location: Location;
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
    location: { type: LocationSchema, required: true },
    isCurrent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Experience || mongoose.model<IExperience>("Experience", ExperienceSchema);