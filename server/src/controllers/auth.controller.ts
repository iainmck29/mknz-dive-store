import passport from "passport";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { nextTick } from "process";
const isProduction = process.env.NODE_ENV === 'production'


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
                console.log(user.id)
                const token = jwt.sign({ user: body},
                    // @ts-ignore
                    'nf183yfnap9v9dfnqiov'
                    )

                res.cookie('A_JWT', token, {
                    maxAge: 1000 * 60 * 60 * 24,
                    httpOnly: false,
                    sameSite: 'lax',
                    secure: false
                })
                res.status(200).send('login successful')
            } 
        )
        })(req, res, next);
};

const logout = (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie('A_JWT');
    res.status(200).send();
    next();
}



export const auth = {
    loginUser,
    logout
}