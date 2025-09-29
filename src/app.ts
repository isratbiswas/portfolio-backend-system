import dotenv from "dotenv";
import express, { Request, Response } from "express";
import connectDB from "./app/config/db";
import { router } from "./app/routes";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use("/api/v1", router);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to my Portfolio",
  });
});

export default app;
