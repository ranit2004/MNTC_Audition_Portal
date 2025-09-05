import mongoose from "mongoose";

const DB = process.env["MONGO_URI"]!;

export default async function dbConnect() {
  if (mongoose.connection?.readyState) return;
  try {
    await mongoose.connect(DB);
  } catch (error) {
    console.log((error as Error).message);
  }
}
