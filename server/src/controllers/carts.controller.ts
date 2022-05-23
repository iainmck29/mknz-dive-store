import { cartService } from "../services";
import { Request, Response } from "express";

const getCartById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await cartService.getCartById(id);
    return res.status(200).json(result);
};

const createCart = async (req: Request, res: Response) => {
    const { user_id } = req.body;
    const result = await cartService.createCart(user_id);
    return res.status(200).json(result);
};

const updateCart = async(req: Request, res: Response) => {
    const { productID, quantity, cartID } = req.body;
    const result = await cartService.updateCart({productID, quantity, cartID});
    return res.status(200).json(result);
};

const deleteCart = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await cartService.deleteCart(id);
    return res.status(200).json(result);
};

export const carts = {
    getCartById,
    createCart,
    updateCart,
    deleteCart
};