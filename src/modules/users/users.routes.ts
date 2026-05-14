import { Router } from "express";
import { UsersController } from "./users.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { createUserSchema } from "./users.schema.js";

const router = Router();

const usersController = new UsersController();

/**
 * @swagger
 * /api/v1/users/register:
 *   post:
 *     summary: Registrar usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Edwin
 *               email:
 *                 type: string
 *                 example: edwin@test.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: Usuario registrado correctamente
 */
router.post(
    '/register',
    validate(createUserSchema),
    usersController.register
);

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Obtener usuarios
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get(
    '/',
    authMiddleware,
    usersController.findallUsers
);
export default router;