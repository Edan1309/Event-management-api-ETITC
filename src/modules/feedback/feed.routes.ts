import { Router } from "express";
import { FeedbackController } from "./feed.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createFeedbackSchema } from "./feed.schema.js";

const router = Router();

const controller = new FeedbackController();

/**
 * @swagger
 * /api/v1/feedback:
 *   post:
 *     summary: Crear feedback
 *     tags: [Feedback]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *               - rating
 *               - userId
 *             properties:
 *               message:
 *                 type: string
 *                 example: Excelente evento
 *               rating:
 *                 type: number
 *                 example: 5
 *               userId:
 *                 type: string
 *                 example: 69d736b38b581bfa44845324
 *     responses:
 *       201:
 *         description: Feedback creado correctamente
 */
router.post('/',authMiddleware,validate(createFeedbackSchema),controller.create);

/**
 * @swagger
 * /api/v1/feedback:
 *   get:
 *     summary: Obtener feedbacks
 *     tags: [Feedback]
 *     responses:
 *       200:
 *         description: Lista de feedbacks
 */
router.get('/',controller.findAll);

/**
 * @swagger
 * /api/v1/feedback/{id}:
 *   put:
 *     summary: Actualizar feedback
 *     tags: [Feedback]
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
 *               message:
 *                 type: string
 *                 example: Muy buen evento
 *               rating:
 *                 type: number
 *                 example: 4
 *     responses:
 *       200:
 *         description: Feedback actualizado
 */
router.put('/:id',authMiddleware,controller.update);

/**
 * @swagger
 * /api/v1/feedback/{id}:
 *   delete:
 *     summary: Eliminar feedback
 *     tags: [Feedback]
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
 *         description: Feedback eliminado
 */
router.delete('/:id',authMiddleware,controller.delete);

export default router;