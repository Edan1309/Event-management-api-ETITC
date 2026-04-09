import express from 'express';
import { Router } from 'express';
import  usersRouter  from '../../modules/users/users.routes.js';
import  authRouter  from '../../modules/auth/auth.routes.js';
import { app } from '../../app.js';
import eventsRouter from '../../modules/events/events.routes.js';
import registrationsRouter from '../../modules/registrations/regis.routes.js';


const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/events', eventsRouter);
router.use('/registrations', registrationsRouter);


export default router;