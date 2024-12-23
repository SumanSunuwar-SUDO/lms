import { Router } from "express";
import {
  addContentController,
  createCurriculumController,
  getContentController,
  getCurriculumController,
} from "../controller/curriculumController.js";

export const curriculumRouter = Router();

curriculumRouter.route("/").post(createCurriculumController);
curriculumRouter.route("/add").post(addContentController);
curriculumRouter.route("/").get(getCurriculumController);

curriculumRouter.route("/content/:id").get(getContentController);
