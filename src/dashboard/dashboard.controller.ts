import AppError from "../error/AppError";
import { TImageFiles } from "../interface/image.interface";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import httpStatus from "http-status-codes";
import { DashboardService } from "./dashboard.service";

const createPost = catchAsync(async (req, res) => {
  if (!req.files) {
    throw new AppError(400, "Please upload an image");
  }

  const result = await DashboardService.createProjectIntoDB(
    req.body,
    req.files as TImageFiles
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Post created successfully",
    data: result,
  });
});
const createBlog = catchAsync(async (req, res) => {
  if (!req.files) {
    throw new AppError(400, "Please upload an image");
  }

  const result = await DashboardService.createBlogIntoDB(
    req.body,
    req.files as TImageFiles
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Post created successfully",
    data: result,
  });
});

const getAllPost = catchAsync(async(req,res)=>{
    const result = await DashboardService.getAllProjectsFromDB();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'projects retrieved successfully',
      data: result,
    });
  })
const getAllBlog = catchAsync(async(req,res)=>{
    const result = await DashboardService.getAllBlogFromDB();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'projects retrieved successfully',
      data: result,
    });
  })

export const DashboardController = {
    createPost,
    getAllPost,
    getAllBlog,
    createBlog
}