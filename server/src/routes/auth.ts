import { Router } from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
import { auth } from "../controllers";


export const authRouter = Router();

const { loginUser, logout } = auth

authRouter.route('/register').post();
authRouter.route('/login').post(loginUser)
authRouter.route('/logout').get(logout)
