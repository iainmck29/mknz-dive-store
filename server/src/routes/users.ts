import { Router } from 'express';
import { users } from "../controllers";
import passport from 'passport';

export const userRouter = Router();
const {getUsers, getCurrentUser, newUser, updateUser, deleteUser, getUserByUsername} = users;

userRouter.route('/').get(passport.authenticate('jwt-customer', {session: false}), getUsers);
userRouter.route('/profile/:id').post(passport.authenticate('jwt-customer', {session: false}), getUserByUsername);
userRouter.route('/:id').get(passport.authenticate('jwt-customer', {session: false}), getCurrentUser);
userRouter.route('/create').post(newUser);
userRouter.route('/:id').put(passport.authenticate('jwt-customer', {session: false}), updateUser);
userRouter.route('/:id').delete(passport.authenticate('jwt-customer', {session: false}), deleteUser);