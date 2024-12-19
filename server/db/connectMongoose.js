import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://lazyfox916:lms-n9@lms-n9.x4ejl.mongodb.net/?retryWrites=true&w=majority&appName=lms-n9`
    )
    .then(() => console.log("MongoDB connected..."));
};
