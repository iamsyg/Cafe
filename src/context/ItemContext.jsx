import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
    const currency = "Rs";
    const [search, setSearch] = useState('');
    const [cartItems, setCartItems] = useState({});

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

    const value = {
        products,
        currency,
        search,
        setSearch,
        cartItems,
        addToCart, 
        updateQuantity
    };

    return (
        <ItemContext.Provider value={value}>
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemContextProvider;
