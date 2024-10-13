import mongoose, { Schema, Document, Types } from "mongoose";

export interface IClass extends Document {
    _id: Types.ObjectId;
    name: string;
    teacher: Types.ObjectId;
    students: Types.ObjectId[];
}

const ClassSchema: Schema = new Schema({
    name: { type: String, required: true },
    teacher: { type: Types.ObjectId, ref: 'Teacher', required: true },
    students: [{ type: Types.ObjectId, ref: 'Student' }]
});

const Class = mongoose.model<IClass>('Class', ClassSchema);
export default Class;
