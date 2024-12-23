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

  content: [
    {
      header: {
        type: String,
        required: true,
      },
      context: {
        type: String,
        required: true,
      },
      objective: {
        type: Array,
        required: true,
      },
      videoUrl: {
        type: String,
      },
    },
  ],

  quiz: {
    type: mongoose.Schema.ObjectId,
    ref: "Quiz",
    required: true,
  },
});

export const Curriculum = mongoose.model("Curriculum", curriculumSchema);
