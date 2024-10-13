import { Request, Response } from "express";
import { addUserToDb, getAllUsersFromDb, getOneUserByNameFromDb, deleteUserByNameFromDb, checkUserAtDb } from "../service/userService";

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  if (!user) {
    throw new Error("Invalid username or email or password")
  } else {
    const newUser = await addUserToDb(req.body);
    res.status(201).json(newUser)
  }
};

// Login 
export const loginUser = async (req: Request, res: Response) => {
  const { name, password } = req.body;
  if (!name || !password) {
    throw new Error("Invalid username or password")
  } else {
    const newUser = await checkUserAtDb(req.body);
    if (!newUser) {
      throw new Error("Invalid username or password")
    }

    res.status(201).json(newUser)
  }
};

// Get all users
export const getUsers = async (req: Request, res: Response) => {
  console.log("getUsers");
  const users = await getAllUsersFromDb();
  res.status(200).json(users);
};

// Get user by name
export const getUserByName = async (req: Request, res: Response) => {
  const userName = req.params.name;
  const user = await getOneUserByNameFromDb(userName);
  if (!user) {
    throw new Error(`User with username ${userName} not found`);
  } else {
    res.status(200).json(user);
  }
};

// Delete user by name
export const deleteUserByName = async (req: Request, res: Response) => {
  const userName = req.params.name;
  const user = await deleteUserByNameFromDb(userName);
  if (!user) {
    throw new Error(`User with username ${user} not found`);
  } else {
    res.status(200).json(user);
  }
};
