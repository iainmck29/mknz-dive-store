import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { userService } from "../services";
import bcrypt from "bcrypt";
import { comparePassword } from "../utils/helpers";


passport.use(
    new LocalStrategy({
    usernameField: "username",
    passwordField: "password"
},
async (username, password, done) => {
    const user = await userService.getUserByUsername(username)
    if (!user) {
        return done(null, false, { message: "User not found"})
    }

    //@ts-ignore
    const match = bcrypt.compare(password, user.password_hash)

    if (!match) {
        return done(null, false, { message: " Incorrect password" });
    }
    return done(null, user, {message: "success"})
}
));

passport.use(
    'jwt-customer',
    new JWTStrategy({
        secretOrKey: process.env.JWT_KEY,
        jwtFromRequest: ExtractJwt.fromExtractors([
            (req) => {
                let token = null;
                if (req && req.cookies) {
                    token = req.cookies['A_JWT'];
                }
                return token;
            }
        ])
    },
    async (token, done) => {
        try {
            return done(null, token.user);
        } catch (err) {
            done(err);
        }
    })
)