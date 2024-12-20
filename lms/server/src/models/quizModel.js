import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    topic: {
        type: String, required: true
    },
    questions: [{
        text: {
            type: String, required: true
        },
        options: [{
            text: {
                type: String, required: true
            },
            isCorrect: {
                type: Boolean, required: true
            }
        }],
        order: {
            type: Number, required: true
        },
        explanation: {
            type: String
        }
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const Quiz = mongoose.model("Quiz", quizSchema);