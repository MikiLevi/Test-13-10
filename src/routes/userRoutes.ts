import { Router } from "express";
import { } from "../controllers/userController";
import { getGrades } from '../controllers/userController';
import { errorHandler } from "../middleware/errorHandler";

const userRouter = Router();

userRouter.get("/get", errorHandler(getGrades));
userRouter.post("/",);
userRouter.get("/:id",);
userRouter.put("/:id",);
userRouter.post("/:id/comments",);

export default userRouter;