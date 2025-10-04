import { Router } from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middlewares/validRequest";
import { UserSchema } from "./user.validation";

const router = Router();
router.post(
  "/register",
  // validateRequest(UserSchema),
  UserController.createUser
);

export const UserRoutes = router;
