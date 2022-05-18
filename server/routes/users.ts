import { Router } from 'express';
import { getUsers, getCurrentUser, newUser, updateUser, deleteUser } from "../controllers";

export const userRouter = Router();

userRouter.route('/').get(getUsers);
userRouter.route('/:id').get(getCurrentUser);
userRouter.route('/new-user').post(newUser);
userRouter.route('/:id').put(updateUser);
userRouter.route('/:id').delete(deleteUser);
