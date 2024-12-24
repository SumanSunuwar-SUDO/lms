import { Assignment } from "../models/assignmentModel.js";
import { Course } from "../models/courseSchema.js";

export const createAssignmentsController = async (req, res, next) => {
    try {
        const data = req.body;

        const results = await Assignment.create(data)

        res.status(201).json({
            success: true,
            message: "Assignments created successfully",
            data: results
        })



    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create assignments",
            error: error.message
        })

    }
}