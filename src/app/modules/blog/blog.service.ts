import AppError from "../../errorHelpers/AppError";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlog = async (payload: Partial<IBlog>) => {
  try {
    const blog = await Blog.create(payload);
    if (!blog) {
      throw new AppError(400, "blog not created");
      console.log("error");
    }
    return blog;
  } catch (error) {
    console.log(error, "something went wrong create at blog ");
  }
};

const getAllBlog = async () => {
  try {
    const blogs = await Blog.find({});
    console.log(blogs);
    if (blogs.length === 0) {
      throw new AppError(404, " blogs can not found");
    }
    return blogs;
  } catch (error) {
    console.log(error, "miru");
  }
};

const getBlogById = async (blogId: string) => {
  try {
    const blog = await Blog.findById(blogId);
    if (!blog) {
      throw new AppError(404, "blog can not match blogId");
    }
    return blog;
  } catch (error) {
    console.log(error);
  }
};
const blogUpdate = async (blogId: string, payload: Partial<IBlog>) => {
  try {
    const blog = await Blog.findByIdAndUpdate(blogId, payload, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      throw new AppError(404, "blog can not update");
    }
    return blog;
  } catch (error) {
    console.log(error);
  }
};

const blogDelete = async (blogId: string) => {
  try {
    const blog = await Blog.findByIdAndDelete(blogId);
    if (!blog) {
      throw new AppError(404, "blog can not match blogId");
    }
    return blog;
  } catch (error) {
    console.log(error);
  }
};
export const BlogService = {
  createBlog,
  getAllBlog,
  getBlogById,
  blogUpdate,
  blogDelete,
};
