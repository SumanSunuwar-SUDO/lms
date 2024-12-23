import { Router } from "express";
import {
  addContentController,
  createCurriculumController,
} from "../controller/curriculumController.js";

export const curriculumRouter = Router();

curriculumRouter.route("/").post(createCurriculumController);
curriculumRouter.route("/add").post(addContentController);
