import { orderService, productService } from "../services";
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

const createOrder = async (req: Request, res: Response) => {
    const { customer_id, products } = req.body;
    // Calculate total cost
    const total_cost = calculateTotalCost(products);
    // For each product insert into orders_products with quantity
    for await (const product of products) {
        //@ts-ignore
        const productPrice = await productService.getProductById(product.product_id).price;
    };

    const addToOrdersProducts = await orderService.addOrderToOrders({customer_id, total_cost});
    //@ts-ignore
    const order_id = addToOrdersProducts.id;

    for await (const product of products) {
        const { product_id, quantity } = product
        const addToOrders = orderService.addProductsToOrder({order_id, product_id, quantity});
    };

    return res.status(200).json(addToOrdersProducts);
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
    createOrder,
    updateStatusInOrder,
    deleteOrder
};