import { cartService } from "../services";
import { query, Request, Response } from "express";
import { calculateTotalCost } from "../utils/helpers";

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

const addToCart = async (req: Request, res: Response) => {
    const { productID, quantity, cartID } = req.body;
    const checkCart = await cartService.checkProductInCart(productID, cartID)
    if (checkCart) {
        const result = await cartService.updateCart({productID, quantity, cartID})
        return res.status(200).json(result)
    } else {
        const result = await cartService.addToCart({productID, quantity, cartID})
        return res.status(200).json(result);
    }
    
}

const updateCartTotal = async (req: Request, res: Response) => {
    const { cartID } = req.body;
    const products = await cartService.getCartProducts(cartID);
    //@ts-ignore
    const total = calculateTotalCost(products);
    const result = await cartService.updateCartTotal(total, cartID);
    return result;
}

const updateCart = async(req: Request, res: Response) => {
    const { products, cartID } = req.body;
    // for await (const product of products) {
        // @ts-ignore
        const { productID, quantity } = product
        const result = await cartService.updateCart({productID, quantity, cartID});
    // }

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
    deleteCart,
    updateCartTotal,
    addToCart
};