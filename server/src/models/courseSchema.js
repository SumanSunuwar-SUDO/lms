import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true["Title field is required"],
    unique: true,
  },
  courseDescription: {
    type: String,
    required: true["Course description field is required"],
  },
  instructor: {
    type: String,
    required: true["Instructor field is required"],
  },
  duration: {
    type: String,
    required: true["Duration field is required"],
  },
  level: {
    type: String,
    required: true["Level field is required"],
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
  curriculum: {
    type: mongoose.Schema.ObjectId,
    ref: "Curriculum",
    required: true,
    unique: true,
  },
  students: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  assignments: [{ type: mongoose.Schema.ObjectId, ref: "Assignment" }],
  quiz: [{ type: mongoose.Schema.ObjectId, ref: "Quiz" }],
});

export const Course = mongoose.model("Course", courseSchema);
