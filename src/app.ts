import dotenv from "dotenv";
import express, { Request, Response } from "express";
import connectDB from "./app/config/db";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./app/routes";
import notFound from "./app/middlewares/notFound";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandle";
import { envVars } from "./app/config/env";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: envVars.FRONTEND_URL,
    credentials: true,
  })
);
app.use("/api/v1", router);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to my Portfolio",
  });
});

app.use(globalErrorHandler);
app.use(notFound);
export default app;
