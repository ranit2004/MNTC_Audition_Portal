import mongoose from "mongoose";
import type { departmentList, roleList, genderList } from "../utils/data";

export interface IUser {
  id: String,
  name: string;
  email: string;
  rollNum?: string;
  phoneNum?: string;
  department: (typeof departmentList)[number] | "";
  role1?: (typeof roleList)[number] | "";
  role2?: (typeof roleList)[number] | "";
  gender?: (typeof genderList)[number] | "";
  answers: string[];
  creativity?: string;
  hardworking?: string;
  punctuality?: string;
  dedication?: string;
};
