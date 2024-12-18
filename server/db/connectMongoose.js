import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/n9-lms")
    .then(() => console.log("MongoDB connected..."));
};
