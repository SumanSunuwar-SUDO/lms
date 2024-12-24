import mongoose from "mongoose";

const assignmentModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true,
        //future date is required...
        validate: {
            validator: function (currentDate) {
                return currentDate > Date.now();
            },
            message: "Due date must be a future date."

        }

    },
    status: {
        type: String,
        enum: ["Pending", "In Progress", "Completed"],
        default: "Pending"
    },

    courses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses",
        required: true
    },

    allowLateSubmission: {
        type: Boolean,
        required: true,
        default: false
    },
    codeArea: {
        type: String,
        required: true,
    },

    submittedAssignments: {
        students: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true
        },
        submissionDate: {
            type: Date,
            required: true
        }

    },
    gitCloneReference: [{
        type: String,
        required: true,
        match: /^(https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)$/,
    }],

    createdAt: {
        type: Date,
        default: Date.now
    },



}, { timestamps: true })


export const Assignment = mongoose.model("Assignment", assignmentModel);