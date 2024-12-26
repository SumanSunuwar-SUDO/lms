import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    curriculumId: {
      type: mongoose.Schema.ObjectId,
      ref: "Curriculum",
      required: true,
    },

    topic: {
      type: String,
      required: true,
    },
    questions: [
      {
        text: {
          type: String,
          required: true,
        },
        options: [
          {
            text: {
              type: String,
              required: true,
            },
            isCorrect: {
              type: Boolean,
              required: true,
            },
          },
        ],
        order: {
          type: Number,
          required: true,
        },
        explanation: {
          type: String,
          required: true,
        },
      },
    ],

    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      onUpdate: Date.now,
    },
  },
  { timestamps: true }
);

export const Quiz = mongoose.model("Quiz", quizSchema);
