import { Quiz } from "../models/quizModel.js";

export const createQuizController = async (req, res, next) => {
    try {


        const savedQuiz = await Quiz.create(req.body);
        res.status(201).json({
            success: true,
            message: "Quiz created successfully",
            data: savedQuiz
        });


    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}



export const addQuizController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const questions = req.body;
        const updatedQuiz = await Quiz.findByIdAndUpdate(
            id,
            { $push: { questions: { $each: questions } } },
            { new: true }
        );

        if (!updatedQuiz) {
            return res.status(404).json({
                success: false,
                message: 'Quiz not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Question added successfully',
            quiz: updatedQuiz
        });
    } catch (error) {
        next(error);
    }
};


//read all quiz 


export const getAllQuizController = async (req, res, next) => {
    try {

        let data = await Quiz.find({});
        res.status(200).json({
            success: true,
            data: data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

//read single quiz

export const getSingleQuizController = async (req, res, next) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: quiz
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })

    }

}

//update quiz


export const updateQuizController = async (req, res, next) => {
    try {
        let quizId = req.params.id;
        let updatedQuiz = req.body;
        const result = await Quiz.findByIdAndUpdate(quizId, updatedQuiz, { new: true });

        res.status(200).json({
            success: true,
            message: "Quiz updated successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}


//delete quiz



export const deleteQuizController = async (req, res, next) => {
    try {

        let quizId = req.params.id;
        const result = await Quiz.findByIdAndDelete(quizId);

        res.status(200).json({
            success: true,
            message: "Quiz deleted successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })

    }

}