import { Router } from "express";

import {
  createUserController,
  getAllUsersController,
  updateUserController,
  deleteUserController,
} from "../controllers/user.controller.js";
import { Auth } from "../middlewares/auth.js";

const userRouter = Router();

userRouter.post("/user", createUserController);
userRouter.get("/users", Auth.private, getAllUsersController);
userRouter.patch("/user/:id", Auth.private, updateUserController);
userRouter.delete("/user/:id", Auth.private, deleteUserController);

export default userRouter;
