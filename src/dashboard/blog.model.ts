import { model, Schema } from "mongoose";
import { TBlog } from "./dashboard.interface";

const blogSchema = new Schema<TBlog>(
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
  },
  {
    timestamps: true,
  }
);

const Blog = model<TBlog>('Blog',blogSchema);

export default Blog;
