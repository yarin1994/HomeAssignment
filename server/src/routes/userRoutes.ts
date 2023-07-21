import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/:id', userController.getUser.bind(userController));

export default userRouter;
