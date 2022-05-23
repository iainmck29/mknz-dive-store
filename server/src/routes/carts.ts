import { Router } from "express";
import { carts } from "../controllers";

export const cartRouter = Router();

const { getCartById, createCart, updateCart, deleteCart } = carts;

cartRouter.route('/:id').get(getCartById).put(updateCart).delete(deleteCart);
cartRouter.route('/new-cart').post(updateCart);