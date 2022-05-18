import { Router } from 'express';
import { getUsers, getCurrentUser, newUser } from "../controllers";

export const userRouter = Router();

userRouter.route('/').get(getUsers);
userRouter.route('/:id').get(getCurrentUser);
userRouter.route('/new-user').post(newUser);

