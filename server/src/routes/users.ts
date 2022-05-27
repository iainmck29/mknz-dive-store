import { Router } from 'express';
import { users } from "../controllers";

export const userRouter = Router();
const {getUsers, getCurrentUser, newUser, updateUser, deleteUser, getUserByUsername} = users;

userRouter.route('/').get(getUsers);
userRouter.route('/self').post(getUserByUsername);
userRouter.route('/:id').get(getCurrentUser);
userRouter.route('/create').post(newUser);
userRouter.route('/:id').put(updateUser);
userRouter.route('/:id').delete(deleteUser);