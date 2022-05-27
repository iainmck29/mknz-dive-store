import { query } from "../models";

type CartProduct = {
    productID: number,
    quantity: number,
    cartID: number
};

const getCartById = async (id: string) => {
    const { rows } = await query(`SELECT * FROM cart WHERE id = $1`, [id]);
    return rows[0];
};

const createCart = async (user_id: string) => {
    const { rows } = await query(`INSERT INTO cart (user_id) VALUES ( $1 ) RETURNING *`, [user_id]);
    return rows[0];
};

const updateCart = async (cartProduct: CartProduct) => {
    const { productID, quantity, cartID } = cartProduct;
    const { rows } = await query(`UPDATE cart_products (product_id, quantity) VALUES ($1, $2) WHERE cart_id = $3 RETURNING *`, [productID, quantity, cartID]);
    return rows[0];
};

const addToCart = async (cartProduct: CartProduct) => {
    const { productID, quantity, cartID } = cartProduct;
    const { rows } = await query(`INSERT INTO cart_products (cart_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *`, [cartID, productID, quantity]);
    return rows[0];
};

const checkProductInCart = async (productID: string, cartID: string) => {
    const { rows } = await query(`SELECT * FROM cart_products WHERE cart_id = $1 AND product_id = $2`, [cartID, productID]);
    if (rows) {
        return true;
    } else {
        return false;
    }
}

const getCartProducts = async (cartID: string) => {
    const { rows } = await query(`SELECT product_id, quantity FROM cart_products WHERE cart_id = $1`, [cartID])
    return rows;
}

const updateCartTotal = async (total: number, cartID: number) => {
    const { rows } = await query(`UPDATE cart(total) VALUES ($1) WHERE id = $2`, [total, cartID]);
    return rows[0];
};

const deleteCart = async (id: string) => {
    const { rows } = await query(`DELETE FROM cart WHERE id = $1`, [id]);
    return rows[0];
};

const deleteCartFromCartProducts = async (id: string) => {
    const { rows } = await query(`DELETE FROM cart_products WHERE cart_id = $1`, [id]);
    return rows[0];
};

export const cartService = {
    getCartById,
    createCart,
    updateCart,
    deleteCart,
    deleteCartFromCartProducts,
    checkProductInCart,
    addToCart,
    getCartProducts,
    updateCartTotal
};