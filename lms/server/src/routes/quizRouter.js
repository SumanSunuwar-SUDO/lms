import { Router } from "express";
import {
    addQuizController,
    createQuizController,
    deleteQuizController,
    getAllQuizController,
    getSingleQuizController,
    updateQuizController
} from "../controller/quizController.js";

export const quizRouter = Router();
quizRouter.route("/").post(createQuizController);
quizRouter.route('/all-quiz').get(getAllQuizController);
quizRouter.route("/single-quiz/:id").get(getSingleQuizController);
quizRouter.route("/add-quiz/:id").patch(addQuizController);
quizRouter.route("/update-quiz/:id").patch(updateQuizController);
quizRouter.route("/delete-quiz/:id").delete(deleteQuizController);

