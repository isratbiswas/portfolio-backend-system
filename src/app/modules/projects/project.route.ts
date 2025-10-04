import { Router } from "express";
import { ProjectController } from "./project.controller";

const router = Router();
router.get("/all-project", ProjectController.getAllProject);
router.post("/create-project", ProjectController.createProject);
router.get("/:id", ProjectController.getProjectById);
router.patch("/:id", ProjectController.projectUpdate);
router.delete("/:id", ProjectController.projectDelete);

export const ProjectRoutes = router;
