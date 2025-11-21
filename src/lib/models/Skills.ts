import mongoose, { Schema, Document } from 'mongoose';

export enum ProficiencyLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  Expert = 'Expert',
}

export enum SkillCategory {
  Language = 'Language',
  Frontend = 'Frontend',
  Backend = 'Backend',
  Database = 'Database',
  DevOps = 'DevOps',
  Other = 'Other',
}

export interface ISkill extends Document {
  name: string;
  proficiency: string;
  category?: string;
  yearsOfExperience?: number;
  endorsements?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const SkillSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    proficiency: {
      type: String,
      enum: Object.values(ProficiencyLevel),
      required: true,
    },
    category: {
      type: String,
      enum: Object.values(SkillCategory),
      required: true
    },
    yearsOfExperience: { type: Number, min: 0 },
    endorsements: { type: [String] },
  },
  { timestamps: true }
);



export default mongoose.models.Skill || mongoose.model<ISkill>('Skill', SkillSchema);