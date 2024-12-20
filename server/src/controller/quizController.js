import { Quiz } from "../models/quizModel.js";

export const createQuizController = async (req, res, next) => {
    try {
        let { topic, questions } = req.body;
        const quiz = await Quiz.create({ topic, questions });
        res.status(201).json({
            success: true,
            message: "Quiz created successfully",
            data: quiz
        });
    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

export const getAllQuizController = async (req, res, next) => {
    try {
        const allQuizes = await Quiz.find({});
        res.status(200).json({
            success: true,
            message: "Quizzes retrieved successfully",
            data: allQuizes
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving quizzes"
        });
    }
}

export const addQuizController = async (req, res, next) => {
    try {
        let id = req.params.id;
        let { questions } = req.body;

        if (!questions) {
            return res.status(400).json({
                success: false,
                message: "Questions data is required"
            });
        }


        const result = await Quiz.findByIdAndUpdate(
            id,
            { $push: { questions } },
            { new: true });

        res.status(200).json({
            success: true,
            message: "Quiz added successfully",
            data: result
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

export const deleteSpecificQuestionController = async (req, res, next) => {

    try {
        const id = req.params.id;
        const questionId = req.params.questionId;
        const result = await Quiz.findByIdAndDelete(id, questionId);

        res.status(200).json({
            success: true,
            message: "Question deleted successfully",
            data: result
        });
    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

export const getSpecificQuizController = async (req, res, next) => {
    try {
        let id = req.params.id;
        const result = await Quiz.findById(id);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Quiz not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Quiz retrieved successfully",
            data: result
        });
    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Error retrieving quiz"
        });

    }
}

export const updateQuizController = async (req, res, next) => {
    try {
        let id = req.params.id;
        let { topic, questions } = req.body;

        const result = await Quiz.findByIdAndUpdate(id, topic, questions, { new: true });
        res.status(200).json({
            success: true,
            message: "Quiz updated successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

export const deleteQuizController = async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await Quiz.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Quiz deleted successfully",
            data: result
        });

    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Error deleting quiz"
        });
    }
}




