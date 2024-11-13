

const addProduct = async (req, res) => {
  

    try {
        
        const {name, description, price, category}=req.body;

        const image1= req.files.image1 && req.files.image1[0];

        console.log(name, description, price, category)
        console.log(image1);

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

