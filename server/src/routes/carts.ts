import { Router } from "express";
import { carts } from "../controllers";
import passport from "passport";

export const cartRouter = Router();

const { getCartById, createCart, updateCart, deleteCart } = carts;

cartRouter.route('/:id').get(passport.authenticate('jwt-customer', { session: false }), getCartById).put(updateCart).delete(deleteCart);
cartRouter.route('/new-cart').post(updateCart);