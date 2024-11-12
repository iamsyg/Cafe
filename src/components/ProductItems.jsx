import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify'; // Only import `toast` here
import { useState } from 'react';
import assets from '../assets/assets';
import { useEffect } from 'react';
import Items from '../pages/Items';

const ProductItems = ({ id, image, name, price }) => {
    const {products, currency, addToCart } = useContext(ItemContext);

    const {productId}=useParams();
    // const [image, setImage] = useState('')

    // const fetchProductData=async () => {
      
    //     products.map((item)=>{
    //         if(item._id===productId)
    //         {
    //             setProductData(item);
    //             setImage(item.image[0]);
    //             console.log(item);
    //             return null;
    //         }
    //     })
    // }

    // useEffect(() => {
    //   fetchProductData();
    
    // }, [productId])
    
    

    const handleAddToCart = () => {
        addToCart(id, name);

        // Show toast notification
        toast.success("Added to cart", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    };

    return  (
        
        <div className="max-w-xs mx-auto bg-slate-100 rounded-lg shadow-lg overflow-hidden">

            
            <img
                className="w-full h-48 object-cover"
                src={image}
                alt={name}
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                <p className="mt-2 text-gray-600">
                    Price: {currency} {price}
                </p>
                <Link to="">
                    <button 
                        onClick={handleAddToCart}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Add to Cart
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductItems;
