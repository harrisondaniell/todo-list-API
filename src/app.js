import express from "express";
import userRouter from "./routes/user.route.js";
import taskRouter from "./routes/task.route.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(taskRouter);

export default app;
