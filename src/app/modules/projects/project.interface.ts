export interface IProject {
  id?: string;
  title: string;
  thumbnail: string;
  repoLink?: string;
  liveLink?: string;
  description: string;
  features: string[];
  techStack?: string[];
  tags?: string[];
  isFeatured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
