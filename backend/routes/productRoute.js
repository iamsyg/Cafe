import express from "express";
import {listProducts, addProduct, removeProduct, singleProduct} from "../controller/productController.js"
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";



const productRouter=express.Router();

productRouter.post("/add",adminAuth, upload.fields([{name: "image1", maxCount: 1}]), addProduct)
productRouter.post("/remove",adminAuth, removeProduct)
productRouter.post("/list", listProducts);
productRouter.post("/single", singleProduct);


export default productRouter