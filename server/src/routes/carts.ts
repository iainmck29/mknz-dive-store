import { Router } from "express";
import { carts } from "../controllers";
import passport from "passport";

export const cartRouter = Router();

const { getCartById, createCart, updateCart, deleteCart, getCartProducts, addToCart, deleteFromCart, updateCartTotal, getCartTotal } = carts;

cartRouter.route('/:id').get(getCartById).put(updateCart).delete(deleteCart);
cartRouter.route('/add').post(addToCart, updateCartTotal);
cartRouter.route('/:cartID/delete/:productID').delete(deleteFromCart, updateCartTotal)
cartRouter.route('/:id/get-products').get(getCartProducts, updateCartTotal);
cartRouter.route('/new-cart').post(createCart);
cartRouter.route('/:cartID/total').get(getCartTotal);

// passport.authenticate('jwt-customer', { session: false }), 