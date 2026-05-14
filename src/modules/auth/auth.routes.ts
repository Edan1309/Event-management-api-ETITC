import {Router} from 'express';
import { authController }    from './auth.controller.js';


const router = Router();

const authcontroller = new authController();

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Registrar usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
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
router.post('/register', authcontroller.register);


/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: edwin@test.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login exitoso
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: 69d736b38b581bfa44845324
 *                         name:
 *                           type: string
 *                           example: Edwin
 *                         email:
 *                           type: string
 *                           example: edwin@test.com
 *                         role:
 *                           type: string
 *                           example: user
 *                     token:
 *                       type: string
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 */
router.post('/login', authcontroller.login);


router.get('/profile/:id', authcontroller.profile);

/**
 * @swagger
 * /api/v1/auth/update/{id}:
 *   put:
 *     summary: Actualizar usuario
 *     tags: [Auth]
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
 *         description: Usuario actualizado
 */

router.put('/update/:id',authcontroller.update);

/**
 * @swagger
 * /api/v1/auth/delete/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     tags: [Auth]
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
 *         description: Usuario eliminado
 */

router.delete('/delete/:id',authcontroller.delete);

export default router;
