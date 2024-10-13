import { Router } from "express";
import {
  addNewStudent,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  addComment,
} from "../controllers/userController";

const postRouter = Router();

postRouter.post("/", addNewStudent);
postRouter.get("/", getPosts);
postRouter.get("/:id", getPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);
postRouter.post("/:id/comments", addComment);

export default postRouter;
