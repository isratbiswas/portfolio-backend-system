import { z } from "zod";

export const AuthProviderSchema = z.object({
  provider: z.string(),
  providerId: z.string().optional(),
});

export const UserSchema = z.object({
  _id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(5, "Password must be at least 6 characters"),
  role: z.literal("ADMIN"), // since role can only be "ADMINN"
  isVerified: z.boolean().default(false),
  auth: z.array(AuthProviderSchema).optional(),
});
