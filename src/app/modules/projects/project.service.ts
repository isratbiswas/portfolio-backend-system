import AppError from "../../errorHelpers/AppError";
import { IProject } from "./project.interface";
import { Project } from "./project.model";

const createProject = async (payload: Partial<IProject>) => {
  try {
    const project = await Project.create(payload);
    console.log(project, "ps-7");
    if (!project) {
      console.log("project not created");
      throw new AppError(400, "project not created");
    }
    return project;
  } catch (error) {
    throw new AppError(400, "something went wrong create at project ");
    console.log(error, "something went wrong create at project ");
  }
};

const getAllProject = async () => {
  try {
    const projects = await Project.find({});
    console.log(projects);
    if (projects.length === 0) {
      throw new AppError(404, " projects can not found");
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
      throw new AppError(404, "project can not match blogId");
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
      throw new AppError(404, "project can not update");
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
      throw new AppError(404, "project can not match Id");
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
