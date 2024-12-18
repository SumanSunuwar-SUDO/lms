import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  curriculum: [
    {
      title: { type: String, required: true },
      content: { type: String, required: true },
      order: { type: Number, required: true },
    },
  ],
  students: [{ type: String, required: true }],
  assignments: [{ type: String, required: true }],
});

export const Course = mongoose.model("Course", courseSchema);
