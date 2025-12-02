import mongoose, { Schema, Document } from "mongoose";

interface SocialLink {
  name: string;
  url: string;
}

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  aboutMe?: string;
  image?: string;
  github?: string;
  linkedin?: string;
  socialLinks?: SocialLink[];
  createdAt?: Date;
  updatedAt?: Date;
}

const SocialLinksSchema: Schema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
}, { _id: false });


const UserSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    aboutMe: { type: String, required: true },
    image: { type: String },
    github: { type: String },
    linkedin: { type: String },
    socialLinks: { type: [SocialLinksSchema], required: false },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

