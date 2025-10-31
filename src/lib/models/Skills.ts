import mongoose, { Schema, Document } from 'mongoose';

export interface ISkill extends Document {
  name: string;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category?: string;
  yearsOfExperience?: number;
  endorsements?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const SkillSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    proficiency: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
      required: true,
    },
    category: { type: String },
    yearsOfExperience: { type: Number, min: 0 },
    endorsements: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Skill || mongoose.model<ISkill>('Skill', SkillSchema);