import express from 'express';
import { Router } from 'express';
import  usersRouter  from '../../modules/users/users.routes.js';
import  authRouter  from '../../modules/auth/auth.routes.js';
import { app } from '../../app.js';
import eventsRouter from '../../modules/events/events.routes.js';
import registrationsRouter from '../../modules/registrations/regis.routes.js';
import notificationsRouter from '../../modules/notifications/noti.routes.js';
import feedbackRouter from '../../modules/feedback/feed.routes.js';


const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/events', eventsRouter);
router.use('/registrations', registrationsRouter);
router.use('/notifications', notificationsRouter);
router.use('/feedback', feedbackRouter);

export default router;