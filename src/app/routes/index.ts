import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { BlogRoutes } from "../modules/blog/blog.route";
import { ProjectRoutes } from "../modules/projects/project.route";
import { AuthRoutes } from "../modules/auth/auth.route";

export const router = Router();
const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/blog",
    route: BlogRoutes,
  },
  {
    path: "/project",
    route: ProjectRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
