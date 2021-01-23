import {Router} from 'express';
import {celebrate, Joi, Segments} from 'celebrate';
import SessionsController from '../controllers/SessionController';

const sessionsController = new SessionsController();

const sessionRouter = Router();

sessionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]:{
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  }),
  sessionsController.create
);

export default sessionRouter;

