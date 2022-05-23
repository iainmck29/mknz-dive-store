import { Router } from "express";
import { products } from "../controllers";

export const productRouter = Router();
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = products;

productRouter.route('/').get(getProducts);
productRouter.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);
productRouter.route('/new-product').post(createProduct);
