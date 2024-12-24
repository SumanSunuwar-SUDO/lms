import { Router } from "express";
import { handleSingeFileController } from "../controller/fileController.js";
import upload from "../utils/sendFiles.js";
export const fileRouter = Router();

fileRouter.route("/single").post(upload.single('document'), handleSingeFileController);
