import { Request, Response, NextFunction } from "express";
import User from "../models/gradeModel";
import Grade from "../models/gradeModel";

// Create a new student
export const addNewStudent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { name, email, password, classId } = req.body;

  const user = await User.create({ name, email, password, classId });
  await user.save();

  res.status(201).json({ message: "Student added successfully" });
};

// Get all grades
export const deletePost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const grades = await grade.findOne({ _id: req.params.id });
  if (!grades) {
    res.status(404).json({ message: "Grade not found" });
  } else {
    return grades;
  }
};
// Get all posts
export const getPosts = async (req: Request, res: Response, next: NextFunction): Promise<void> => { };

// Get a single post by ID
export const getPost = async (req: Request, res: Response, next: NextFunction): Promise<void> => { };

// Update a post
export const updatePost = async (req: Request, res: Response, next: NextFunction): Promise<void> => { };

// Add a comment to a post
export const addComment = async (req: Request, res: Response, next: NextFunction): Promise<void> => { };


