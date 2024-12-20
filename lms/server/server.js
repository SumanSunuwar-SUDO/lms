import express, { json } from "express";
import cors from "cors";
import { connectDB } from "./src/db/connectMongoose.js";
import { userRouter } from "./src/routes/userRouter.js";
import { courseRouter } from "./src/routes/courseRouter.js";

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
