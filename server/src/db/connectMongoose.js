import mongoose from "mongoose";
import { databaseURI } from "../config/config.js";

export const connectDB = async () => {
  await mongoose
    .connect(databaseURI)
    .then(() => console.log("MongoDB connected..."));
};
