import { User } from "../models/userSchema.js";

export const createUserController = async (req, res, next) => {
  try {
    const result = await User.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
