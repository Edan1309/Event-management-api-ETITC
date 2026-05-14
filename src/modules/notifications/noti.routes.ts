import { Router } from "express";
import { NotificationsController } from "./noti.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createNotificationSchema } from "./noti.schema.js";

const router = Router();

const controller = new NotificationsController();

/**
 * @swagger
 * /api/v1/notifications:
 *   post:
 *     summary: Crear notificación
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - message
 *               - userId
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Evento actualizado"
 *               message:
 *                 type: string
 *                 example: "Nueva información disponible"
 *               userId:
 *                 type: string
 *                 example: 6a059d56e766ccb68b5cdb1b
 *     responses:
 *       201:
 *         description: Notificación creada correctamente
 */
router.post('/',authMiddleware,validate(createNotificationSchema),controller.create
);

/**
 * @swagger
 * /api/v1/notifications/{userId}:
 *   get:
 *     summary: Obtener notificaciones por usuario
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         example: 6a059d56e766ccb68b5cdb1b
 *     responses:
 *       200:
 *         description: Lista de notificaciones del usuario
 */
router.get('/:userId',authMiddleware,controller.findByUser);

/**
 * @swagger
 * /api/v1/notifications/{id}:
 *   put:
 *     summary: Actualizar notificación
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Evento actualizado
 *               message:
 *                 type: string
 *                 example: Nueva información del evento
 *     responses:
 *       200:
 *         description: Notificación actualizada
 */
router.put('/:id',authMiddleware, controller.update);

/**
 * @swagger
 * /api/v1/notifications/{id}:
 *   delete:
 *     summary: Eliminar notificación
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Notificación eliminada
 */
router.delete('/:id',authMiddleware,controller.delete);


export default router;