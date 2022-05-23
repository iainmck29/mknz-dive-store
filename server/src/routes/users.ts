import { Router } from 'express';
import { users } from "../controllers";

export const userRouter = Router();
const {getUsers, getCurrentUser, newUser, updateUser, deleteUser, getUserByUsername} = users;

userRouter.route('/').get(getUsers);
userRouter.route('/self').get(getUserByUsername);
userRouter.route('/:id').get(getCurrentUser);
userRouter.route('/new-user').post(newUser);
userRouter.route('/:id').put(updateUser);
userRouter.route('/:id').delete(deleteUser);