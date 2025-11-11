import { z } from 'zod';

export const projectSchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(6, 'Title must be at least 5 characters long'),
  description: z.string().min(10, 'Description must be at least 10 characters long'),
  techStack: z.array(z.string()).min(1, 'At least one technology must be selected'),
  githubUrl: z.string().url('Invalid GitHub URL'),
  liveUrl: z.string().url('Invalid live URL').optional().or(z.literal('')),
  thumbnail: z.string().optional(),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;
