import { cartService, orderService, productService } from "../services";
import { Request, Response } from "express";
import { calculateTotalCost } from "../utils/helpers";

const getOrders = async (req: Request, res: Response) => {
    const results = await orderService.getOrders();
    return res.status(200).json(results);
};

const getOrderById = async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await orderService.getOrderById(id);
    return res.status(200).json(result)
};

const getOrdersByUserID = async (req: Request, res: Response) => {
    const { userID } = req.body;
    const result = await orderService.getOrdersByUserID(userID)
    return res.status(200).json(result);
}

const createOrder = async (req: Request, res: Response) => {
    const { userID, cartID, cartProducts } = req.body;
    // MAKE SURE NOT RETURNING OBJECT
    const total = await cartService.getCartTotal(cartID)

    //@ts-ignore
    const addToOrdersProducts = await orderService.addOrderToOrders({userID, total: total.total});
    //@ts-ignore
    const orderID = addToOrdersProducts.id;

    cartProducts.forEach(async (product: any) => {
        await orderService.addProductsToOrder({order_id: orderID, product_id: product.product_id, quantity: product.quantity})
    });

    //DELETE CART
    cartService.deleteCart(cartID)

    return res.status(200).json(orderID);
};


const updateStatusInOrder = async (req: Request, res: Response) => {
    const { order_id, status } = req.body;
    const result = await orderService.updateStatusInOrders(status, order_id);
    return res.status(200).json(result);
}

const deleteOrder = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deleteFromOrders = await orderService.deleteOrderInOrders(id);
    const deleteFromOrdersProducts = await orderService.deleteFromOrdersProducts(id);
    return res.status(204).json(deleteFromOrders);
}


export const orders = {
    getOrders,
    getOrderById,
    getOrdersByUserID,
    createOrder,
    updateStatusInOrder,
    deleteOrder
};