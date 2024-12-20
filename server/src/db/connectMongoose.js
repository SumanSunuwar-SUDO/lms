import mongoose from "mongoose";
import { databaseURI } from "../config/config.js";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/lms")
    .then(() => console.log("MongoDB connected..."));
};
