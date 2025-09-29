import { Request, Response } from "express";
import { CatchAsync } from "../../utils/CatchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { UserService } from "./user.service";

const createUser = CatchAsync(async (req: Request, res: Response) => {
  const user = await UserService.createUser(req.body);
  console.log(user, "israt");
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "User created successfully",
    data: user,
  });
});

export const UserController = {
  createUser,
};
