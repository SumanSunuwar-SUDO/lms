import mongoose from "mongoose";

const curriculumSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.ObjectId,
    ref: "Course",
  },
  title: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  content: [
    {
      question: {
        type: String,
        required: true,
      },
      context: {
        type: String,
        required: true,
      },
    },
  ],
});

export const Curriculum = mongoose.model("Curriculum", curriculumSchema);
