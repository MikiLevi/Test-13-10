import mongoose, { Schema, Document, Types } from "mongoose";

export interface ITeacher extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  classes: { name: string, classId: Types.ObjectId }[];
}

const TeacherSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  classes: [{ name: String, classId: { type: Types.ObjectId, ref: 'Class' } }]
});

const Teacher = mongoose.model<ITeacher>('Teacher', TeacherSchema);
export default Teacher;
