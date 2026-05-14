import { Router } from "express";
import { RegistrationsController } from "./regis.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createRegistrationSchema } from "./regis.schema.js";

const router = Router();

const controller = new RegistrationsController();

router.post(
    '/',
    authMiddleware,
    validate(createRegistrationSchema),
    controller.register
);

router.get(
    '/:eventId',
    authMiddleware,
    controller.getByEvent
);

export default router;