import { Schema } from "mongoose";

export const LocationSchema = new Schema(
  {
    country: { type: String, required: true },
    state: { type: String },
    city: { type: String },
    remote: { type: Boolean, default: false },
  },
  { _id: false }
);
