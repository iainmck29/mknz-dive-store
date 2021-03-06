import { query } from "../models";

type CartProduct = {
    productID: number,
    quantity: number,
    cartID: string
};

const getCartById = async (id: string) => {
    const { rows } = await query(`SELECT * FROM cart WHERE user_id = $1`, [id]);
    return rows[0];
};

const createCart = async (user_id: string) => {
    const { rows } = await query(`INSERT INTO cart (user_id) VALUES ( $1 ) RETURNING *`, [user_id]);
    return rows[0];
};

const updateCart = async (cartProduct: CartProduct) => {
    const { productID, quantity, cartID } = cartProduct;
    const { rows } = await query(`UPDATE cart_products SET quantity = quantity + 1 WHERE cart_id = $1 AND product_id = $2 RETURNING *`, [cartID, productID]);
    return rows[0];
};

const addToCart = async (cartProduct: CartProduct) => {
    const { productID, quantity, cartID } = cartProduct;
    console.log(productID, quantity, cartID)
    const { rows } = await query(`INSERT INTO cart_products VALUES ($1, $2, $3) RETURNING *`, [cartID, productID, quantity]);
    return rows[0];
};

const checkProductInCart = async (productID: string, cartID: string) => {
    const { rows } = await query(`SELECT * FROM cart_products WHERE cart_id = $1 AND product_id = $2`, [cartID, productID]);
    if (rows.length !== 0) {
        return true;
    } else {
        return false;
    }
}

const deleteFromCart = async (cartID: string, productID: string) => {
    const { rows } = await query(`DELETE FROM cart_products WHERE product_id = $1`, [productID])
    return rows[0];
}

const getCartProducts = async (cartID: string) => {
    const { rows } = await query(`SELECT product_id, quantity FROM cart_products WHERE cart_id = $1`, [cartID])
    return rows;
}

const updateCartTotal = async (total: number, cartID: string) => {
    const { rows } = await query(`UPDATE cart SET total = $1 WHERE id = $2`, [total, cartID]);
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

const getCartTotal = async (id: string) => {
    const { rows } = await query('SELECT total FROM cart WHERE id = $1', [id]);
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
    updateCartTotal,
    getCartTotal,
    deleteFromCart
};