import { query } from "../models";


type Product = {
    merchant_id: number,
    description: string,
    price: number
};

const getProducts = async () => {
    const { rows } = await query(`SELECT * FROM products`);
    return rows;
};

const getProductById = async (id: string) => {
    const { rows } = await query(`SELECT * FROM products WHERE id = $1`, [id]);
};

const createProduct = async (product: Product) => {
    const { merchant_id, description, price } = product
    const { rows } = await query(`INSERT INTO products (
        merchant_id,
        description,
        price
    ) VALUES (
        $1, $2, $3
    ) RETURNING *`, [merchant_id, description, price]);
    return rows[0];
};

const updateProduct = async (product: Product, id: string) => {
    const { merchant_id, description, price } = product;
    const { rows } = await query(`UPDATE products SET 
    merchant_id = $1,
    description = $2,
    price = $3
    WHERE id = $4
    RETURNING *`, [merchant_id, description, price, id]);
    return rows[0];
};

const deleteProduct = async (id: string) => {
    const { rows } = await query(`DELETE FROM products WHERE id = $1`, [id]);
    return rows[0];
};

export const productService = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};