import { createContext } from "react";
import { products } from "../assets/assets";

export const ItemContext = createContext(); // Add parentheses to create the context

const ItemContextProvider = (props) => {
    const currency = "Rs";

    const value = {
       products, currency
    };

    return (
        <ItemContext.Provider value={value}>
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemContextProvider;
