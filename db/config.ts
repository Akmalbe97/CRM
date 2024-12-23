import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connectDB(): Promise<void> {
  try {
    const MONGODB_URL = process.env.MONGODB_URL as string;
    if (!MONGODB_URL) {
      console.log("Sizning urlda muammo bor");
    }
    await mongoose.connect(MONGODB_URL);
    console.log("connected");
  } catch (error) {
    console.error(error);
  }
}

export default connectDB;
