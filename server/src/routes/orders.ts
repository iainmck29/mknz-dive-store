import { Router } from "express";
import { orders } from "../controllers";

export const orderRouter = Router();

const { getOrders, getOrderById, createOrder, updateStatusInOrder, deleteOrder } = orders;

orderRouter.route('/').get(getOrders);
orderRouter.route('/:id').get(getOrderById).put(updateStatusInOrder).delete(deleteOrder);
orderRouter.route('/new-order').post(createOrder);