import mongoose from "mongoose";
import { envVars } from "./env";
import { createAdmin } from "../utils/seedSuperAdmin";

const connectDB = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    console.log("connected db successfully ✅");
  } catch (error) {
    console.error("MongoDB connection failed ❌", error);
    process.exit(1);
  }
};
(async () => {
  await createAdmin();
})();

export default connectDB;
