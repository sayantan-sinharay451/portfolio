import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  name: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  blogUrl?: string;
  tags?: string[];
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProjectSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    githubUrl: { type: String },
    liveUrl: { type: String },
    blogUrl: { type: String },
    tags: [{ type: String }],
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);