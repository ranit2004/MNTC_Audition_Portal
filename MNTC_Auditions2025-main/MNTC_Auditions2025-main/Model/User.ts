import mongoose, { Model } from "mongoose";
import { departmentList, genderList, roleList } from "../utils/data";
import { IUser } from "../types/types";

interface IUserModel extends Model<IUser> { }


const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    rollNum: {
      type: String,

    },
    phoneNum: {
      type: String,
    },
    department: {
      type: String,
      enum: departmentList,
    },
    role1: {
      type: String,
      enum: roleList,
    },
    role2: {
      type: String,
      enum: roleList,
    },
    gender: {
      type: String,
      enum: genderList,
    },
    answers: {
      type: [String],
    },
    creativity: {
      type: Number,
      min: 1,
      max: 10,
    },
    hardworking: {
      type: Number,
      min: 1,
      max: 10,
    },
    punctuality: {
      type: Number,
      min: 1,
      max: 10,
    },
    dedication: {
      type: Number,
      min: 1,
      max: 10,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models?.User || mongoose.model<IUser, IUserModel>("User", UserSchema);
export default User;
