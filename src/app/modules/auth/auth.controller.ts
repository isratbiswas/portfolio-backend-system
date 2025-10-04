import { Request, Response } from "express";
import { CatchAsync } from "../../utils/CatchAsync";
import { AuthService } from "./auth.service";
import httpStatus from "http-status-codes";
import sendResponse from "../../utils/sendResponse";

const credentialsLogin = CatchAsync(async (req: Request, res: Response) => {
  const loginInfo = await AuthService.credentialsLogin(req.body);
  console.log(loginInfo);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "User successfully Logged in",
    data: loginInfo,
  });
});

export const AuthController = {
  credentialsLogin,
};
