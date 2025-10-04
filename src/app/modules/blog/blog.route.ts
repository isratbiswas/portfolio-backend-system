import { Router } from "express";
import { BlogController } from "./blog.controller";

const router = Router();
router.get("/all-blog", BlogController.getAllBlog);
router.post("/create-blog", BlogController.createBlog);
router.get("/:id", BlogController.getBlogById);
router.patch("/:id", BlogController.blogUpdate);
router.delete("/:id", BlogController.blogDelete);

export const BlogRoutes = router;
