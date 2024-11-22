import { model, Schema } from "mongoose";
import { TProjects } from "./dashboard.interface";

const projectSchema = new Schema<TProjects>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      default: [],
    },
    tech: {
      type: [String],
      default: [],
    },
    liveDemoUrl: {
      type: String,
      required: true,
    },
    githubUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = model<TProjects>('Project',projectSchema);

export default Project;
