import { Router } from "express";
import { createUser, getUser, getUsers } from "../controllers/classController";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:username", getUser);

export default userRouter;
