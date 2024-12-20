import { Router } from "express";
import { addQuizController, createQuizController, deleteQuizController, deleteSpecificQuestionController, getAllQuizController, getSpecificQuizController, updateQuizController } from "../controller/quizController.js";



export const quizRouter = Router();
quizRouter.route("/").post(createQuizController);
quizRouter.route("/all-quiz").get(getAllQuizController);
quizRouter.route("/single-quiz/:id").get(getSpecificQuizController);
quizRouter.route("/update-quiz/:id").patch(updateQuizController);
quizRouter.route("/delete-quiz/:id").delete(deleteQuizController);
quizRouter.route("/delete-specific-questions/:id").delete(deleteSpecificQuestionController);
quizRouter.route("/add-quiz/:id").patch(addQuizController);
