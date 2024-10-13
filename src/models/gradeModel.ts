import mongoose, { Schema, Document, Types } from "mongoose";

export interface IGrade extends Document {
  _id: Types.ObjectId;
  student: Types.ObjectId;
  subject: string;
  grade: number;
  note: string;
}

const GradeSchema: Schema = new Schema({
  student: { type: Types.ObjectId, ref: 'Student', required: true },
  subject: { type: String, required: true },
  grade: { type: Number, required: true },
  note: { type: String, required: true }
});

const Grade = mongoose.model<IGrade>('Grade', GradeSchema);
export default Grade;
