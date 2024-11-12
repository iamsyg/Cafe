import express from "express";
import {listProducts, addProduct, removeProduct} from "../controller/productController.js"



const productRouter=express.Router();

productRouter.post("/add", addProduct)
productRouter.post("/remove", removeProduct)
productRouter.post("/list", listProducts);


export default productRouter