import { z } from "zod";

export const createRegistrationSchema = z.object({
    userId: z.string(),
    eventId: z.string()
});