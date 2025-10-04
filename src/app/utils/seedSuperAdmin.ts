import { envVars } from "../config/env";

import bcryptjs from "bcryptjs";
import { User } from "../modules/user/user.model";
import { IAuthProvider, IUser } from "../modules/user/user.interface";

export const createAdmin = async () => {
  try {
    const isSuperAdminExist = await User.findOne({
      email: envVars.ADMIN_EMAIL,
    });
    if (isSuperAdminExist) {
      console.log("Super Admin already Exists");
      return;
    }
    const hashedPassword = await bcryptjs.hash(
      envVars.ADMIN_PASSWORD,
      Number(envVars.BCRYPT_SALT_ROUND)
    );
    console.log(envVars.ADMIN_PASSWORD, "password");
    console.log(envVars.ADMIN_EMAIL, "email");
    console.log(hashedPassword);
    const authProvider: IAuthProvider = {
      provider: "credentials",
      providerId: envVars.ADMIN_EMAIL,
    };

    const payload: IUser = {
      name: "Admin",
      role: "ADMIN",
      email: envVars.ADMIN_EMAIL,
      password: hashedPassword,
      isVerified: true,
      auth: [authProvider],
    };

    const superAdmin = await User.create(payload);
    console.log("super admin created successfully!! \n");
    console.log(superAdmin);
  } catch (error) {
    console.log(error);
  }
};
