import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phoneNumber: { type: Number, required: true },
  password: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);
