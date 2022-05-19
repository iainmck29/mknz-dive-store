import { query } from '../models';

type OrderedProduct = {
    order_id: number,
    product_id: number,
    quantity: number,
    total_cost: number
}

type Order = {
    customer_id: number,
    total_cost: number
};


const getOrders = async () => {
    const { rows } = await query(`SELECT * FROM orders`);
    return rows;
};

const getOrderById = async (id: string) => {
    const { rows } = await query(`SELECT * FROM orders WHERE id = $1`, [id]);
    return rows;
};

const addOrderToOrders = async (order: Order) => {
    const { customer_id, total_cost } = order
    const { rows } = await query(`INSERT INTO orders (
        customer_id,
        total_cost
    ) VALUES (
        $1, $2
    ) RETURNING *`, [customer_id, total_cost])
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

const updateCostInOrders = async (updateValue: number) => {
    const { rows } = await query(`UPDATE orders SET total_cost = $1 RETURNING *`, [updateValue]);
    return rows[0];
};

const updateStatusInOrders = async (updateValue: string) => {
    const { rows } = await query(`UPDATE orders SET status = $1 RETURNING *`, [updateValue]);
    return rows[0];
};

const updateProductQuantity = async (updateValue: number) => {
    const { rows } = await query(`UPDATE orders_products SET quantity = $1 RETURNING *`, [updateValue]);
    return rows[0];
};

const deleteOrderInOrders = async (id: string) => {
    const { rows } = await query(`DELETE FROM orders WHERE id = $1 RETURNING order_id`, [id]);
};

const deleteFromOrdersProducts = async (order_id: number) => {
    const { rows } = await query(`DELETE FROM orders_products WHERE order_id = $1 RETURNING *`, [order_id]);
    return rows;
};

export const orderService = {
    getOrders,
    getOrderById,
    addOrderToOrders,
    addProductsToOrder,
    updateCostInOrders,
    updateStatusInOrders,
    updateProductQuantity,
    deleteOrderInOrders,
    deleteFromOrdersProducts
};