import { cartService, productService } from "../services";
import { NextFunction, query, Request, Response } from "express";
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

const addToCart = async (req: Request, res: Response, next: NextFunction) => {
    const { cartID } = req.params;
    const { productID, quantity } = req.body;
    const checkCart = await cartService.checkProductInCart(productID, cartID)
    if (checkCart) {
        const result = await cartService.updateCart({productID, quantity, cartID})
        res.status(200).json(result)
        next();
    } else {
        const result = await cartService.addToCart({productID, quantity, cartID})
        res.status(200).json(result);
        next();
    }
}

const deleteFromCart = async (req: Request, res: Response, next: NextFunction) => {
    const { productID, cartID } = req.params;
    const result = await cartService.deleteFromCart(cartID, productID)
    res.status(204).send()
    next();
}

const updateCartTotal = async (req: Request, res: Response) => {
    const { cartID } = req.params;
    const products = await cartService.getCartProducts(cartID);
    const productData = await getProductData(products);
    //@ts-ignore
    const total = calculateTotalCost(productData);
    const result = await cartService.updateCartTotal(total, cartID);
    return result
}

const getCartTotal = async (req: Request, res: Response) => {
    const { cartID } = req.params;
    const total = await cartService.getCartTotal(cartID);
    return res.status(200).json(total);
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

const getCartProducts = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await cartService.getCartProducts(id);
    return res.status(200).json(result);
}

// Helpers

const getProductData = async (products: any) => {
    return Promise.all(products.map(async (product: any) => {
        const data = await productService.getProductById(product.product_id)
        //@ts-ignore
        return { quantity: product.quantity, price: data.price };
    }))
}



export const carts = {
    getCartById,
    createCart,
    updateCart,
    deleteCart,
    updateCartTotal,
    addToCart,
    getCartProducts,
    deleteFromCart,
    getCartTotal
};