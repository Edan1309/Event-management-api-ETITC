import { Router } from "express";
import { EventsController } from "./events.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = Router();
const controller = new EventsController();

router.post('/', authMiddleware, controller.create);
router.get('/', controller.findAll);

export default router;