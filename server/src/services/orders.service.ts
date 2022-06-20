import { query } from '../models';

type OrderedProduct = {
    order_id: number,
    product_id: number,
    quantity: number,
}

type Order = {
    userID: number,
    total: number
};


const getOrders = async () => {
    const { rows } = await query(`SELECT * FROM orders`);
    return rows;
};

const getOrderById = async (id: string) => {
    const { rows } = await query(`SELECT * FROM orders WHERE id = $1`, [id]);
    return rows;
};

const getOrdersByUserID = async (userID: string) => {
    const { rows } = await query(`SELECT * FROM orders WHERE customer_id = $1`, [userID])
    return rows;
}

const addOrderToOrders = async (order: Order) => {
    const { userID, total } = order
    const { rows } = await query(`INSERT INTO orders (
        customer_id,
        total_cost
    ) VALUES (
        $1, $2
    ) RETURNING *`, [userID, total])
    return rows[0]
}

const addProductsToOrder = async (order: OrderedProduct) => {
    const { order_id, product_id, quantity } = order
    const { rows } = await query(`INSERT INTO orders_products (
        order_id,
        product_id,
        quantity
    ) VALUES (
        $1, $2, $3
    ) RETURNING *`, [order_id, product_id, quantity]);
    return rows[0]
};

const updatePriceInOrders = async (updateValue: number) => {
    const { rows } = await query(`UPDATE orders SET total_cost = $1 RETURNING *`, [updateValue]);
    return rows[0];
};

const updateStatusInOrders = async (updateValue: string, order_id: number) => {
    const { rows } = await query(`UPDATE orders SET status = $1 WHERE id = $2 RETURNING *`, [updateValue, order_id]);
    return rows[0];
};


const updateProductQuantity = async (updateObject: OrderedProduct) => {
    const { quantity, product_id, order_id } = updateObject
    const { rows } = await query(`UPDATE orders_products SET quantity = $1 WHERE order_id = $2 AND product_id = $3 RETURNING *`, [quantity, order_id, product_id]);
    return rows[0];
};

const deleteOrderInOrders = async (id: string) => {
    const { rows } = await query(`DELETE FROM orders WHERE id = $1 RETURNING order_id`, [id]);
    return rows[0]
};

const deleteFromOrdersProducts = async (order_id: string) => {
    const { rows } = await query(`DELETE FROM orders_products WHERE order_id = $1 RETURNING *`, [order_id]);
    return rows;
};

export const orderService = {
    getOrders,
    getOrderById,
    getOrdersByUserID,
    addOrderToOrders,
    addProductsToOrder,
    updatePriceInOrders,
    updateStatusInOrders,
    updateProductQuantity,
    deleteOrderInOrders,
    deleteFromOrdersProducts
};