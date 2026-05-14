import { z } from "zod";

export const createFeedbackSchema = z.object({

    message: z.string().min(3),

    rating: z.number().min(1).max(5),

    userId: z.string()

});