import { Request } from "express";
import { IAuthProvider, IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;
  console.log(payload);
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    throw new Error("user already exist");
  }
  const authProvider: IAuthProvider = {
    provider: "credentials",
    providerId: email as string,
  };
  const user = await User.create({
    email,
    password,
    auth: [authProvider],
    ...rest,
  });
  console.log(user, "nagib");
  return user;
};
export const UserService = {
  createUser,
};
