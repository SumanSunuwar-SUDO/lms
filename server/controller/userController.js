import { User } from "../models/userSchema";
import bcrypt from "bcrypt";

export const createUserController = async (req, res, next) => {
  try {
    let data = req.body;
    let hashedPassword = await bcrypt.hash(data.password, 10);
    data = {
      ...data,
      password: hashedPassword,
    };

    const user = await User.create(data);

    res.status(201).json({
      success: true,
      message: "User has been created successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
