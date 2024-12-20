import jwt from "jsonwebtoken";
import { secretKey } from "../config/config.js";

export const IsAuthenticated = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    let isValidToken = await jwt.verify(token, secretKey);
    if (!isValidToken) {
      res.status(404).json({
        message: "Invalid token",
      });
    }
    req._id = isValidToken.id;
    next();
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
