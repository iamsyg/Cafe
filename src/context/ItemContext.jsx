import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
    const currency = "Rs";
    const [search, setSearch] = useState('');
    const [cart, setCart] = useState(() => {

        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    const addToCart = (product) => {
        setCart((prevCart) => {
            const itemIndex = prevCart.findIndex(item => item.id === product.id);
            if (itemIndex === -1) {
                showToast(`${product.name} added to cart`);
                return [...prevCart, { ...product, quantity: 1 }];
            } else {
                return prevCart.map((item, index) =>
                    index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
        });
    };
    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter(item => item.id !== productId);
            showToast(`Item removed from cart`);
            return updatedCart;
        });
    };
    const incrementQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    const decrementQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                    : item
            ).filter((item) => item.quantity > 0)
        );
    };
    const clearCart = () => {
        setCart([]);
        showToast("Cart cleared");
    };
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const showToast = (message) => {
        console.log(message);
    };

    const value = {
        products,
        currency,
        search,
        setSearch,
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        totalItems,
        totalPrice
    };

    return (
        <ItemContext.Provider value={value}>
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemContextProvider;
