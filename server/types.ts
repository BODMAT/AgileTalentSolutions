import { z } from 'zod';

export const ProfileSchema = z.object({
    id: z.number(),
    name: z.string(),
    skills: z.array(z.string()),
    description: z.string().optional(),
    rating: z.number().min(0).max(5).optional(),
    imgURL: z.string().url().optional(),
});

export type Profile = z.infer<typeof ProfileSchema>;

