import { Router } from "express";
import { createProducts, deleteProduct, getProducts, updateProduct } from "../controllers/productControllers.js";

const productRoutes = Router();

productRoutes.get('/product', getProducts);
productRoutes.post('/product', createProducts);
productRoutes.put('/product/:id', updateProduct);
productRoutes.delete('/product/:id', deleteProduct);

export default productRoutes;