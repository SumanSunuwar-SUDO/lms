import { Router } from "express";
import { createUserController } from "../controller/userController.js";

export const userRouter = Router();
userRouter.route("/").post(createUserController);
