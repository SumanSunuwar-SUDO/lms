import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phoneNumber: { type: Number, required: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, required: true, default: false },
});

export const User = mongoose.model("User", userSchema);
