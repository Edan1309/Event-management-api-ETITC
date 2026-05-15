import { Router } from "express";
import { RegistrationsController } from "./regis.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createRegistrationSchema } from "./regis.schema.js";

const router = Router();

const controller = new RegistrationsController();

/**
 * @swagger
 * /api/v1/registrations:
 *   post:
 *     summary: Registrar usuario en evento
 *     tags: [Registrations]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - eventId
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 6a059d56e766ccb68b5cdb1b
 *               eventId:
 *                 type: string
 *                 example: 6a05a6f0e766ccb68b5cdb20
 *     responses:
 *       201:
 *         description: Registro creado correctamente
 */
router.post(
    '/',
    authMiddleware,
    validate(createRegistrationSchema),
    controller.register
);

/**
 * @swagger
 * /api/v1/registrations:
 *   get:
 *     summary: Obtener todos los registros
 *     tags: [Registrations]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros
 */
router.get(
    '/',
    authMiddleware,
    controller.findAll
);

/**
 * @swagger
 * /api/v1/registrations/event/{eventId}:
 *   get:
 *     summary: Obtener registros por evento
 *     tags: [Registrations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: string
 *         example: 6a05a6f0e766ccb68b5cdb20
 *     responses:
 *       200:
 *         description: Lista de registros del evento
 */
router.get(
    '/event/:eventId',
    authMiddleware,
    controller.getByEvent
);

/**
 * @swagger
 * /api/v1/registrations/{id}:
 *   put:
 *     summary: Actualizar registro
 *     tags: [Registrations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 6a05a6f0e766ccb68b5cdb20
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 6a059d56e766ccb68b5cdb1b
 *               eventId:
 *                 type: string
 *                 example: 6a05a6f0e766ccb68b5cdb20
 *     responses:
 *       200:
 *         description: Registro actualizado correctamente
 */
router.put(
    '/:id',
    authMiddleware,
    controller.update
);

/**
 * @swagger
 * /api/v1/registrations/{id}:
 *   delete:
 *     summary: Eliminar registro
 *     tags: [Registrations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 6a05a6f0e766ccb68b5cdb20
 *     responses:
 *       200:
 *         description: Registro eliminado correctamente
 */
router.delete(
    '/:id',
    authMiddleware,
    controller.delete
);

export default router;