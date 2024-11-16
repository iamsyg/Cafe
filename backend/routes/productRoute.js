import express from "express";
import { listProducts, addProduct, removeProduct, singleProduct } from "../controller/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

// POST request for adding a product
productRouter.post("/add", adminAuth, upload.fields([{ name: "image1", maxCount: 1 }]), addProduct);

// POST request for removing a product
productRouter.post("/remove", adminAuth, removeProduct);

// GET request for fetching a list of products (change to GET)
productRouter.get("/list", listProducts);

// POST request for fetching a single product
productRouter.post("/single", singleProduct);

export default productRouter;
