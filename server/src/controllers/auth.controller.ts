import passport from "passport";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { nextTick } from "process";
import { userService } from "../services";
import { hashPassword } from "../utils/helpers";


// Log in user using passport authenticate mathod
const loginUser = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
        'local',
        //@ts-ignore
        async (err, user, info) => {
            if (err || !user) {
                const error = new Error(info.message);
                return next(error);
            }
        req.login(
            user,
            { session: false },
            async (error) => {
                if (error) return next(error);

                const body = { id: user.id }
                const token = jwt.sign({ user: body},
                    //@ts-ignore
                    process.env.JWT_KEY
                    )

                res.cookie('A_JWT', token, {
                    maxAge: 1000 * 60 * 60 * 24,
                    httpOnly: true,
                    sameSite: 'none',
                    secure: true
                })
                res.status(200).send(user)
            } 
        )
        })(req, res, next);
};

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    const existingUser = await userService.getUserByUsername(username);
    if (existingUser) {
        return res.status(403).send('User with this username already exists');
    }

    const password_hash = await hashPassword(password, next)

    const newUser = await userService.newUser(username, password_hash)
}

const logout = (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie('A_JWT');
    res.status(200).send();
    next();
}



export const auth = {
    loginUser,
    logout,
    registerUser
}