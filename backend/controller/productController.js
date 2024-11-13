import { v2 as cloudiary } from "cloudinary";

const addProduct = async (req, res) => {
  

    try {
        
        const {name, description, price, category}=req.body;

        const image1= req.files.image1 && req.files.image1[0];

        const images=[image1].filter((item)=>item!==undefined)

        let imageUrl=await Promise.all(
            images.map(async (item)=>{
                 
                let result=await cloudiary.uploader.upload(item.path, {resource_type:"image"});
                return result.secure_url;
            })
        )

        console.log(name, description, price, category)
        console.log(imageUrl);

        res.json({})
    } catch (error) {
        
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


const listProducts = async (req, res) => {
  
}

const removeProduct = async (req, res) => {
  
}



export {listProducts, addProduct, removeProduct}

