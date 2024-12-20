import { User } from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secretKey } from "../config/config.js";
import { sendEmail } from "../utils/sendMail.js";

export const createUserController = async (req, res, next) => {
  try {
    let data = req.body;
    let hashedPassword = await bcrypt.hash(data.password, 10);
    data = {
      ...data,
      password: hashedPassword,
    };

    const user = await User.create(data);

    let infoObj = {
      id: user._id,
    };

    let expiryInfo = {
      expiresIn: "1d",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    await sendEmail({
      to: data.email,
      subject: "Account registered successfully",
      html: `<h1>Hello ${data.username}.</h1>
      <br />
      <p>You have successfully registered for our platform. Please click on below button to verify its you.</p>
      <br />
      <center>
      <a href="http://locahost:5173/verify?token=${token}">
      <button>Click Me</button>
      </a>
      </center>
      `,
    });

    res.status(201).json({
      success: true,
      message: "User has been created successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyUserController = async (req, res, next) => {
  try {
    const id = req._id;
    const user = await User.findByIdAndUpdate(
      id,
      {
        isVerified: true,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "User has been verified successfully.",
      result: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUserController = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("Invalid Credentials");
    }

    if (user.isVerified === false) {
      throw new Error("Invalid Credentials");
    }

    let isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid Credentials");
    }

    let infoObj = {
      id: user._id,
    };
    let expiryInfo = {
      expiresIn: "24h",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    res.status(200).json({
      success: true,
      message: "User has been logged in successfully.",
      result: user,
      token: token,
    });
  } catch (error) {
    res.status(405).json({
      success: false,
      message: error.message,
    });
  }
};
