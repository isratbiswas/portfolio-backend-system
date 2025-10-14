import { Request, Response } from "express";
import { CatchAsync } from "../../utils/CatchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { ProjectService } from "./project.service";
// import { MulterRequest } from "../../types/express";

const createProject = CatchAsync(async (req: Request, res: Response) => {
  // const { title, repoLink, liveLink, description, tags, features } = req.body;

  // Parse tags and features (if sent as JSON string)
  // const parsedTags = tags ? JSON.parse(tags) : [];
  // const parsedFeatures = features ? JSON.parse(features) : [];

  // Get uploaded file (if any)
  const thumbnail = req.file ? `/uploads/${req.file.filename}` : "";

  // Call service layer
  const project = await ProjectService.createProject(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Project created successfully",
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
