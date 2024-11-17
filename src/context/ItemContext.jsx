import { createContext, useState, useEffect } from "react";

import ProductItems from "../components/ProductItems";
import axios from "axios"
// import toast from "react-toastify"

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
    const currency = "Rs";
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([])

    const [token, setToken] = useState("");


    const addToCart = (itemId, size) => {
        const cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
    };

    useEffect(() => {
        console.log("Updated cartItems:", cartItems); // Check cartItems in console
    }, [cartItems]);

    const updateQuantity=async (itemId,size, quantity) => {
        
        let cartData=structuredClone(cartItems);
        cartData[itemId][size]=quantity;
        setCartItems(cartData);
    }

    const getCartAmount= () => {
      
        let totalAmount=0;
        for(const items in cartItems)
        {
            let itemInfo=products.find((ProductItems)=>ProductItems._id===items);
            for(const item in cartItems[items])
            {
                try
                {
                    if(cartItems[items][item]>0)
                    {
                        totalAmount+=itemInfo.price * cartItems[items][item];
                    }
                }
                catch(error)
                {
                    toast.error(error.message)
                }
            }
        }
        return totalAmount;
    }

    const getProductData=async () => {
      
        try {
            
            const response=await axios.get(backendUrl + "/api/product/list")
            
            if(response.data.success)
            {
                setProducts(response.data.products)
            }
            else
            {
                toast.error(response.data.message)
            }
            
        } catch (error) {
            
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
      getProductData();
    }, [])
    
    

    const value = {
        products,
        currency,
        search,
        setSearch,
        cartItems,
        addToCart, 
        updateQuantity,
        getCartAmount, backendUrl, token, setToken 
    };

    return (
        <ItemContext.Provider value={value}>
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemContextProvider;
