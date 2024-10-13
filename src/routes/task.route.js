import { Router } from "express";

import {
  createTaskController,
  getAllTasksByUserIdController,
  updateTasksController,
  deleteTaskController,
} from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.post("/task", createTaskController);
taskRouter.get("/task/:userId", getAllTasksByUserIdController);
taskRouter.patch("/task/:id", updateTasksController);
taskRouter.delete("/task/:id", deleteTaskController);

export default taskRouter;
