import mongoose, { Schema } from "mongoose";
import { User } from "./userModel";

export interface Student extends User {
  grade: number;
}

const studentSchema: Schema = new Schema({
  grade: { type: Number, required: true },
});

const Grade = mongoose.model<Student>('Grade', studentSchema);
export default Grade;
