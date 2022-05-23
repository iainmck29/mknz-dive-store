import { Router } from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
//import { auth } from "../controllers";

export const authRouter = Router();

authRouter.route('/register').post(/*Add controller here*/);
authRouter.route('/login').post(/*Add controller here*/)
authRouter.route('/logout').post(/*Add controller here*/)
