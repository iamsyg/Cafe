import { createContext, useState, useEffect } from "react";

import ProductItems from "../components/ProductItems";
import axios from "axios"

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
    const currency = "Rs";
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([])


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

                }
            }
        }
        return totalAmount;
    }

    const getProductData=async () => {
      
        try {
            
            const response=await axios.get(backendUrl + "/api/product/list")
            console.log(response.data)
            
        } catch (error) {
            
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
        getCartAmount, backendUrl
    };

    return (
        <ItemContext.Provider value={value}>
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemContextProvider;
