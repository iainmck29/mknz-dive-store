import { Router } from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
import { auth } from "../controllers";


export const authRouter = Router();

const { loginUser, logout, registerUser } = auth

authRouter.route('/register').post(registerUser);
authRouter.route('/login').post(loginUser)
authRouter.route('/logout').get(logout)
