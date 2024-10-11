import { Router } from "express";

import {
    createUserController,
    getAllUsersController,
    updateUserController,
    deleteUserController
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/user", createUserController);
userRouter.get("/users", getAllUsersController);
userRouter.patch("/user/:id", updateUserController);
userRouter.delete("/user/:id", deleteUserController);

export default userRouter;