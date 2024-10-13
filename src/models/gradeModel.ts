import mongoose, { Schema } from "mongoose";
import { IUser } from "../models/userModel";

export interface Student extends IUser {
  grade: number;
}

const studentSchema: Schema = new Schema({
  grade: { type: Number, required: true },
});

const Grade = mongoose.model<Student>('Grade', studentSchema);
export default Grade;
