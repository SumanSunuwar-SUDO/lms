import { Router } from "express";
import {
  addCourseCurriculumController,
  createCourseController,
  getAllCourseController,
} from "../controller/courseController.js";

export const courseRouter = Router();
courseRouter.route("/").post(createCourseController);
courseRouter.route("/").get(getAllCourseController);
courseRouter.route("/add").post(addCourseCurriculumController);
