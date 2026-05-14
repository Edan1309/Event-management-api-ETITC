import { Router } from "express";
import { EventsController } from "./events.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createEventSchema } from "./events.schema.js";

const router = Router();

const controller = new EventsController();


/**
 * @swagger
 * /api/v1/events:
 *   post:
 *     summary: Crear evento
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               date:
 *                 type: string
 *               userId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Evento creado correctamente
 */
router.post('/',authMiddleware,validate(createEventSchema),controller.create);

/**
 * @swagger
 * /api/v1/events:
 *   get:
 *     summary: Obtener eventos
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Lista de eventos
 */
router.get('/', controller.findAll);

/**
 * @swagger
 * /api/v1/events/{id}:
 *   put:
 *     summary: Actualizar evento
 *     tags: [Events]
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
 *         description: Evento actualizado
 */
router.put('/:id',authMiddleware,controller.update);

/**
 * @swagger
 * /api/v1/events/{id}:
 *   delete:
 *     summary: Eliminar evento
 *     tags: [Events]
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
 *         description: Evento eliminado
 */
router.delete('/:id',authMiddleware,controller.delete);

export default router;