import { productService } from "../services";
import { Request, Response } from "express";

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

interface Product {
    id: number,
    merchant_id: number,
    description: string,
    img_src: string,
    price: string,
    price_id: string,
    title: string,
    categories: string[]
}



const getProducts = async (req: Request, res: Response) => {
    const results = await productService.getProducts();
        for await (let product of results) {
        //@ts-ignore
        let categories = await productService.getProductCategoriesyById(product.id)
        categories = categories.map((category) => {
            //@ts-ignore
            return category.category
        })
        //@ts-ignore
        product.categories = categories
    }
    return res.status(200).json(results);
};

const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const results = await productService.getProductById(id);
    return res.status(200).json(results);
};

const createProduct = async (req: Request, res: Response) => {
    const { merchant_id, description, price, categories } = req.body;
    const newProduct = await productService.createProduct({ merchant_id, description, price });
    // Add product and category to product_categories
    // @ts-ignore
    const product_id = newProduct.id
    for await (const category of categories) {
        const addToCategory = productService.addToCategories(product_id, category);
    }
    return res.status(200).json(newProduct);
};

const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { merchant_id, description, price } = req.body;
    const results = await productService.updateProduct({merchant_id, description, price}, id);
    return res.status(200).json(results);
};

const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const results = await productService.deleteProduct(id);
    return res.status(200).json(results);
};

export const products = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};