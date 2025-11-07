import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  aboutMe?: string;
  image?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    personalWebsite?: string;
  };
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
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    aboutMe: { type: String },
    image: { type: String },
    socialLinks: { type: [SocialLinksSchema] },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

