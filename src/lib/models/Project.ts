import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  shortDescription: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  tags?: string[];
  technologies: string[];
  isArchived?: boolean;
  isFeatured?: boolean;
  images?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    shortDescription: {
      type: String, required: true
    },
    description: { type: String, required: true },
    githubUrl: { type: String },
    liveUrl: { type: String },
    tags: [{ type: String }],
    technologies: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
    images: { type: String },
    isArchived: { type: Boolean, default: false },
    category: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);