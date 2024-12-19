import { Router } from "express";
import {
  createUserController,
  loginUserController,
  verifyUserController,
} from "../controller/userController.js";
import { IsAuthenticated } from "../middleware/isAuthenticated.js";

export const userRouter = Router();
userRouter.route("/add").post(createUserController);
userRouter.route("/verify-email").post(IsAuthenticated, verifyUserController);
userRouter.route("/login").post(loginUserController);
