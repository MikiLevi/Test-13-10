import mongoose, { Schema, Document, Types } from "mongoose";

export interface IStudent extends Document {
    _id: Types.ObjectId;
    name: string;
    email: string;
    password: string;
    class: Types.ObjectId;
}

const StudentSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    class: { type: Types.ObjectId, ref: 'Class', required: true }
});

const Student = mongoose.model<IStudent>('Student', StudentSchema);
export default Student;
