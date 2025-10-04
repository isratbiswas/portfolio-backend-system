import AppError from "../../errorHelpers/AppError";
import { IProject } from "./project.interface";
import { Project } from "./project.model";

const createProject = async (payload: Partial<IProject>) => {
  try {
    const project = await Project.create(payload);
    if (!project) {
      throw new AppError(400, "blog not created");
      console.log("error");
    }
    return project;
  } catch (error) {
    console.log(error, "something went wrong create at blog ");
  }
};

const getAllProject = async () => {
  try {
    const projects = await Project.find({});
    console.log(projects);
    if (projects.length === 0) {
      throw new AppError(404, " blogs can not found");
    }
    return projects;
  } catch (error) {
    console.log(error, "miru");
  }
};

const getProjectById = async (projectId: string) => {
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      throw new AppError(404, "blog can not match blogId");
    }
    return project;
  } catch (error) {
    console.log(error);
  }
};
const projectUpdate = async (projectId: string, payload: Partial<IProject>) => {
  try {
    const project = await Project.findByIdAndUpdate(projectId, payload, {
      new: true,
      runValidators: true,
    });
    if (!project) {
      throw new AppError(404, "blog can not update");
    }
    return project;
  } catch (error) {
    console.log(error);
  }
};

const projectDelete = async (projectId: string) => {
  try {
    const project = await Project.findByIdAndDelete(projectId);
    if (!project) {
      throw new AppError(404, "blog can not match blogId");
    }
    return project;
  } catch (error) {
    console.log(error);
  }
};
export const ProjectService = {
  createProject,
  getAllProject,
  getProjectById,
  projectUpdate,
  projectDelete,
};
