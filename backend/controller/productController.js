import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Cloudinary configuration (if not configured globally)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const addProduct = async (req, res) => {
  try {
    const { name, price} = req.body;
    const image1 = req.files?.image1?.[0]; // Ensure image1 is accessed correctly
    const images = [image1].filter((item) => item !== undefined);

    // Upload images to Cloudinary and get URLs
    let imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
        return result.secure_url;
      })
    );

    // Prepare product data
    const productData = {
      name,
      price: Number(price),
      image: imageUrl,
    };

    console.log(productData); // Log data for debugging

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    const { id } = req.body; 
    await productModel.findByIdAndDelete(id); 
    res.json({ success: true, message: "Product removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const singleProduct=async (req, res) => {
  
    try {

        const {productId}=req.body;
        const product=await productModel.findById(productId);
        res.json({success: true, product});
        
    } catch (error) {
        
        console.log(error);
    res.json({ success: false, message: error.message });
    }
}


export { listProducts, addProduct, removeProduct, singleProduct };
