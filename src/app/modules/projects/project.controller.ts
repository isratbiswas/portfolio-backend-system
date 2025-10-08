import { Request, Response } from "express";
import { CatchAsync } from "../../utils/CatchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { ProjectService } from "./project.service";

const createProject = CatchAsync(async (req: Request, res: Response) => {
  const project = await ProjectService.createProject(req.body);
  console.log(project, "pr-8");
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "project created Successfully",
    data: project,
  });
});

const getAllProject = CatchAsync(async (req: Request, res: Response) => {
  const projects = await ProjectService.getAllProject();
  console.log(projects, "israt");
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "project Retrived Successfully",
    data: projects,
  });
});

const getProjectById = CatchAsync(async (req: Request, res: Response) => {
  const projectId = req.params.id;
  const singleblog = await ProjectService.getProjectById(projectId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single project Retrived Successfully",
    data: singleblog,
  });
});
const projectUpdate = CatchAsync(async (req: Request, res: Response) => {
  const projectId = req.params.id;
  const blog = await ProjectService.projectUpdate(projectId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Retrived Successfully",
    data: blog,
  });
});

const projectDelete = CatchAsync(async (req: Request, res: Response) => {
  const projectId = req.params.id;
  const singleblog = await ProjectService.projectDelete(projectId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "project deleted  Successfully",
    data: null,
  });
});

export const ProjectController = {
  createProject,
  getAllProject,
  getProjectById,
  projectUpdate,
  projectDelete,
};
