import { z } from "zod";

export const createEventSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(5),
    date: z.string(),
    userId: z.string()
});