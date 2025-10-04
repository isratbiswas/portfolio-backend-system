import { model, Schema } from "mongoose";
import { IProject } from "./project.interface";

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    repoLink: { type: String },
    liveLink: { type: String },
    description: { type: String, required: true },
    features: { type: [String], default: [] },
    techStack: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Project = model<IProject>("Project", ProjectSchema);
