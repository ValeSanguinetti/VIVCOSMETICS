import express from "express";
import { controller } from "../controllers/products.controller.js"

const router = express.Router();

router.get("/", controller.getProducts);
router.post("/", controller.createProduct);
router.put("/:id", controller.updateProduct);
router.get("/:id", controller.getProduct);
router.delete("/products/:id", controller.deleteProduct);
export default router;