import { query } from "../models";


type Product = {
    merchant_id: number,
    description: string,
    price: number
};

enum Category {
    'mask_snorkel',
    'wetsuit',
    'bcd',
    'regulator',
    'fins',
    'computer',
    'accessories',
    'essentials'
};

const getProducts = async () => {
    const { rows } = await query(`SELECT * FROM products`);
    return rows;
};

const getProductById = async (id: string) => {
    const { rows } = await query(`SELECT * FROM products WHERE id = $1`, [id]);
    return rows[0]
};

const getProductCategories = async () => {
    const { rows } = await query(`SELECT * FROM products_categories`);
    return rows;
}

const getProductCategoriesyById = async (id: string) => {
    const { rows } = await query(`SELECT category from products_categories WHERE product_id = $1`, [id]);
    return rows;
}

const createProduct = async (product: Product) => {
    const { merchant_id, description, price } = product
    const { rows } = await query(`INSERT INTO products (
        merchant_id,
        description,
        price
    ) VALUES (
        $1, $2, $3
    ) RETURNING id`, [merchant_id, description, price]);
    return rows[0];
};

const addToCategories = async (product_id: string, category: Category) => {
    const { rows } = await query(`INSERT INTO products_categories (
        product_id,
        category
    ) VALUES (
        $1, $2
    )`, [product_id, category])
    return rows[0];
}

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

const getProductPrice = async (id: string) => {
    const { rows } = await query(`SELECT price FROM products WHERE id = $1`, [id]);
    return rows[0];
}

export const productService = {
    getProducts,
    getProductById,
    getProductCategoriesyById,
    createProduct,
    addToCategories,
    updateProduct,
    deleteProduct,
    getProductPrice
};