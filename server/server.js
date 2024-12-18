import express, { json } from "express";
import { connectDB } from "./db/connectMongoose.js";
import { userRouter } from "./routes/userRouter.js";
import { courseRouter } from "./routes/courseRouter.js";
import cors from "cors";

const server = express();
const port = 1111;
connectDB();
server.use(json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("Hello, World!");
});

server.use("/user", userRouter);
server.use("/course", courseRouter);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
