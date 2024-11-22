import express from "express";
import { multerUpload } from "../config/multer.config";
import { DashboardController } from "./dashboard.controller";

const router = express.Router();

router.post(
  "/create",
  multerUpload.fields([{ name: "itemImages" }]),
  DashboardController.createPost
);
router.post(
  "/post",
  multerUpload.fields([{ name: "itemImages" }]),
  DashboardController.createBlog
);
router.get('/',DashboardController.getAllPost);
router.get('/blog',DashboardController.getAllBlog);

export const DashboardRoutes = router;
