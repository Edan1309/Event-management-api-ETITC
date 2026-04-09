import { Router } from "express";
import { RegistrationsController } from "./regis.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = Router();
const controller = new RegistrationsController();

router.post('/', authMiddleware, controller.register);
router.get('/:eventId', controller.getByEvent);

export default router;