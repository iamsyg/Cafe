import {v2 as cloudiary} from "cloudinary"

const connectCloudinary=async (params) => {
    cloudiary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY

    })
}


export default connectCloudinary;