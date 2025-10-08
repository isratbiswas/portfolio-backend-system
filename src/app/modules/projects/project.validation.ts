// import { z } from "zod";

// export const ProjectSchema = z.object({
//   id: z.string().optional(),
//   title: z.string().min(1),
//   thumbnail: z.string().url(),
//   repoLink: z.string().url().optional(),
//   liveLink: z.string().url().optional(),
//   description: z.string().min(1),
//   features: z.array(z.string()).min(0),
//   techStack: z.array(z.string()).optional(),
//   tags: z.array(z.string()).optional(),
//   isFeatured: z.boolean().optional(),
//   createdAt: z.string().optional(),
//   updatedAt: z.string().optional(),
// });

// export type ProjectFromZod = z.infer<typeof ProjectSchema>;
