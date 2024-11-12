import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
    const currency = "Rs";
    const [search, setSearch] = useState('');  // Add search state

    const value = {
       products, 
       currency,
       search,    // Provide the search state
       setSearch  // Provide the setSearch function
    };

    return (
        <ItemContext.Provider value={value}>
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemContextProvider;
