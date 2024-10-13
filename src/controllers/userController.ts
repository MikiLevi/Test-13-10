import { Request, Response, NextFunction } from "express";
import User, { Student } from "../models/gradeModel";

// Create a new student
export const createUser = async (req: Request, res: Response) => {

  const user = await User.create(req.body);
  res.status(201).json({ user });
};

// Get all grades

export const getGrades = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user: Student[] = await User.find();
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message || error });
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


