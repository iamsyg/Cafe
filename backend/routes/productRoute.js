import express from "express";
import {listProducts, addProduct, removeProduct} from "../controller/productController.js"
import upload from "../middleware/multer.js";



const productRouter=express.Router();

productRouter.post("/add", upload.fields([{name: "image1", maxCount: 1}]), addProduct)
productRouter.post("/remove", removeProduct)
productRouter.post("/list", listProducts);


export default productRouter