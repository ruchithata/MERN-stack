import { Router } from "express";
import { createProducts, deleteProduct, getProducts, updateProduct } from "../controllers/productControllers.js";

const productRoutes = Router();

productRoutes.get('/', getProducts);
productRoutes.post('/', createProducts);
productRoutes.put('/:id', updateProduct);
productRoutes.delete('/:id', deleteProduct);

export default productRoutes;