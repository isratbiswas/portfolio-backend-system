import { Request, Response } from "express";
import { CatchAsync } from "../../utils/CatchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { BlogService } from "./blog.service";

const createBlog = CatchAsync(async (req: Request, res: Response) => {
  const blog = await BlogService.createBlog(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Blog created Successfully",
    data: blog,
  });
});

const getAllBlog = CatchAsync(async (req: Request, res: Response) => {
  const blogs = await BlogService.getAllBlog();
  console.log(blogs, "israt");
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog Retrived Successfully",
    data: blogs,
  });
});

const getBlogById = CatchAsync(async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const singleblog = await BlogService.getBlogById(blogId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Retrived Successfully",
    data: singleblog,
  });
});
const blogUpdate = CatchAsync(async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const blog = await BlogService.blogUpdate(blogId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Retrived Successfully",
    data: blog,
  });
});

const blogDelete = CatchAsync(async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const blog = await BlogService.blogDelete(blogId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog deleted  Successfully",
    data: null,
  });
});

export const BlogController = {
  createBlog,
  getAllBlog,
  getBlogById,
  blogUpdate,
  blogDelete,
};
