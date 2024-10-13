import { Router } from "express";
import { createUser, getUserByName, getUsers, deleteUserByName, loginUser } from "../controllers/userController";
import { errorHandler } from "../middleware/errorHandler";
const userRouter = Router();


userRouter.post("/register", errorHandler(createUser));
userRouter.post("/login", errorHandler(loginUser));
userRouter.get("/", errorHandler(getUsers));
userRouter.get("/:username", errorHandler(getUserByName));
userRouter.delete("/:username", errorHandler(deleteUserByName));


export default userRouter;
