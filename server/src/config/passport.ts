import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { userService } from "../services";
import bcrypt from "bcrypt";
import { comparePassword } from "../utils/helpers";


passport.use(new LocalStrategy({
    usernameField: "username",
    passwordField: "password"
},
async (username, password, done) => {
    const user = await userService.getUserByUsername(username)
    if (!user) {
        return done(null, false, { message: "User not found"})
    }

    if (!comparePassword) {
        return done(null, false, { message: " Incorrect password" });
    }

    return done(null, user, {message: "success"})
}
))