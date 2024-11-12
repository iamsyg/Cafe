import mongoose from "mongoose";

const connectDB = async () => {
  
    mongoose.connection.on("connected", ()=>{
        console.log("DB Connect");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/CafeSync`)
}

export default connectDB
