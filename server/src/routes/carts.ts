import { Router } from "express";
import { carts } from "../controllers";
import passport from "passport";

export const cartRouter = Router();

const { getCartById, createCart, updateCart, deleteCart, getCartProducts, addToCart, deleteFromCart, updateCartTotal, getCartTotal } = carts;

cartRouter.route('/:id').get(passport.authenticate('jwt-customer', { session: false }), getCartById).put(updateCart).delete(deleteCart);
cartRouter.route('/:cartID/add').post(passport.authenticate('jwt-customer', { session: false }), addToCart, updateCartTotal);
cartRouter.route('/:cartID/delete/:productID').delete(passport.authenticate('jwt-customer', { session: false }), deleteFromCart, updateCartTotal)
cartRouter.route('/:id/get-products').get(passport.authenticate('jwt-customer', { session: false }), getCartProducts, updateCartTotal);
cartRouter.route('/new-cart').post(passport.authenticate('jwt-customer', { session: false }), createCart);
cartRouter.route('/:cartID/total').get(passport.authenticate('jwt-customer', { session: false }), getCartTotal);

