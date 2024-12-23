import { Router } from "express";
import {
  createUserController,
  forgotPasswordController,
  loginUserController,
  resetPasswordController,
  verifyUserController,
} from "../controller/userController.js";
import { IsAuthenticated } from "../middleware/isAuthenticated.js";

export const userRouter = Router();
userRouter.route("/add").post(createUserController);
userRouter.route("/verify-email").post(IsAuthenticated, verifyUserController);
userRouter.route("/login").post(loginUserController);
userRouter.route("/forgot-password").post(forgotPasswordController);
userRouter
  .route("/reset-password")
  .post(IsAuthenticated, resetPasswordController);
