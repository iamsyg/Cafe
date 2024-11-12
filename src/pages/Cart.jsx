import React, { useContext, useState, useEffect } from "react";
import Payment from "../components/Payment";
import { ItemContext } from "../context/ItemContext";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ItemContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,  // Include size to be used for item removal
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handleRemoveItem = (itemId, size) => {
    // Remove item by updating quantity to 0
    updateQuantity(itemId, size, 0);
  };

  return (
    <>
      <div className="payment mt-20">
        <Payment />
      </div>
      <div className="container mx-80 w-1/2 mt-16 gap-20">
        {cartData.map((item, index) => {
          const productData = products.find(
            (ProductItems) => ProductItems._id === item._id
          );

          return (
            <div
              key={index}
              className="item flex items-center space-x-4 border p-4 rounded-md"
            >
              <img
                className="w-1/3 h-48 object-cover"
                src={productData.image}
                alt="Card Image"
              />

              <div className="p-4 flex flex-col items-start">
                <h2 className="text-xl font-semibold text-gray-800">
                  {productData.name}
                </h2>
                <p className="mt-2 text-gray-600">
                  Price: {currency} {productData.price * item.quantity}
                </p>
              </div>

              <input
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                value={item.quantity} // Use value instead of defaultValue
                onChange={(e) =>
                  updateQuantity(item._id, item.size, parseInt(e.target.value))
                }
              />

              <div
                onClick={() => handleRemoveItem(item._id, item.size)} // Remove item
              >
                <lord-icon
                  src="https://cdn.lordicon.com/hwjcdycb.json"
                  trigger="hover"
                  style={{
                    width: "30px",
                    height: "40px",
                    marginLeft: "100px",
                    cursor: "pointer",
                  }}
                ></lord-icon>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
