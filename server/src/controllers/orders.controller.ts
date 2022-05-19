import { orderService } from "../services";
import { Request, Response } from "express";

const getOrders = async (req: Request, res: Response) => {
    const results = await orderService.getOrders();
    return res.status(200).json(results);
};

const getOrderById = async (req: Request, res: Response) => {
    const { id } = req.params
    const results = await orderService.getOrderById(id);
    return res.status(200).json(results)
};

const createOrder = async (req: Request, res: Response) => {
    const { customer_id, products } = req.body;

}