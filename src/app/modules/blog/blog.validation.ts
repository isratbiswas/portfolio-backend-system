import { z } from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  thumbnail: z.string().url().optional(),
});

export type CreateBlogInput = z.infer<typeof createBlogSchema>;

export const updateBlogSchema = createBlogSchema.partial();
export type UpdateBlogInput = z.infer<typeof updateBlogSchema>;

export const paramsSchema = z.object({
  blogId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ObjectId"),
});
export type ParamsInput = z.infer<typeof paramsSchema>;
