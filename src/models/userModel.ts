import mongoose, { Schema, Document, Types } from "mongoose";


export interface User extends Document {
    _id: Types.ObjectId;
    name: string;
    email: string;
    password: string;
    class: { name: string; classId: Types.ObjectId };
    status: "Teacher" | "Stutent";
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    class: { name: String, classId: { type: Types.ObjectId, ref: 'Class' } },
    status: { type: String, enum: ["Teacher", "Student"] }
});

const User = mongoose.model<User>('User', userSchema);
export default User;