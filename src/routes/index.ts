import { Router } from "express";

import { DashboardRoutes } from "../dashboard/dashboard.route";

const router = Router();

// This array maps paths to specific route handlers
const moduleRoutes = [
  {
    path: "/api/portfolio",
    route: DashboardRoutes,
  },
];

// Use each route in the application
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
