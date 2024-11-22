import { TImageFiles } from "../interface/image.interface";
import Blog from "./blog.model";
import { TBlog, TProjects } from "./dashboard.interface";
import Project from "./dashboard.model";

const createProjectIntoDB = async (
  payload: Omit<TProjects, "createdAt" | "updatedAt" | "isDeleted">,
  images: TImageFiles
) => {
  const { itemImages } = images;
  payload.images = itemImages.map((image) => image.path);

  const result = await Project.create(payload);
  return result;
  
};

const createBlogIntoDB = async (
    payload: Omit<TBlog, "createdAt" | "updatedAt" | "isDeleted">,
    images: TImageFiles
  ) => {
    const { itemImages } = images;
    payload.images = itemImages.map((image) => image.path);
  
    const result = await Blog.create(payload);
    return result;
    
  };

const getAllProjectsFromDB = async ()=>{
    const result = await Project.find();
    return result;
}
const getAllBlogFromDB = async ()=>{
    const result = await Blog.find();
    return result;
}

export const DashboardService = {
    createProjectIntoDB,
    getAllProjectsFromDB,
    createBlogIntoDB,
    getAllBlogFromDB
}
