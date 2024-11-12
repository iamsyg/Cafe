import React, { useContext } from "react";
import { useState } from "react";
import Payment from "../components/Payment";
import { ItemContext } from "../context/ItemContext";
import { useEffect } from "react";
import assets from "../assets/assets";

const Cart = () => {
  

  const { products, currency, cartItems } = useContext(ItemContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <>
      <div className="payment mt-20 ">
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
                  Price: ${productData.price * item.quantity} Billion
                </p>
              </div>

              <input
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
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
          );
        })}

        {/* <div className="item flex items-center space-x-4 border p-4 rounded-md">
          <img
            className="w-1/3 h-48 object-cover"
            src="public/sandwich.jpeg"
            alt="Card Image"
          />

          <div className="p-4 flex flex-col items-start">
            <h2 className="text-xl font-semibold text-gray-800">Sandwich</h2>
            <p className="mt-2 text-gray-600">
              Price: ${11 * quantity} Billion
            </p>
          </div>

          <div className="buttons flex items-center border p-2 rounded space-x-2">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-lg font-semibold rounded"
            >
              -
            </button>

            <span className="text-lg font-semibold px-4">{quantity}</span>

            <button
              onClick={increaseQuantity}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-lg font-semibold rounded"
            >
              +
            </button>
          </div>
        </div>
        <div className="item flex items-center space-x-4 border p-4 rounded-md">
          <img
            className="w-1/3 h-48 object-cover"
            src="public/sandwich.jpeg"
            alt="Card Image"
          />

          <div className="p-4 flex flex-col items-start">
            <h2 className="text-xl font-semibold text-gray-800">Sandwich</h2>
            <p className="mt-2 text-gray-600">
              Price: ${11 * quantity} Billion
            </p>
          </div>

          <div className="buttons flex items-center border p-2 rounded space-x-2">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-lg font-semibold rounded"
            >
              -
            </button>

            <span className="text-lg font-semibold px-4">{quantity}</span>

            <button
              onClick={increaseQuantity}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-lg font-semibold rounded"
            >
              +
            </button>
          </div>
        </div>
        <div className="item flex items-center space-x-4 border p-4 rounded-md">
          <img
            className="w-1/3 h-48 object-cover"
            src="public/sandwich.jpeg"
            alt="Card Image"
          />

          <div className="p-4 flex flex-col items-start">
            <h2 className="text-xl font-semibold text-gray-800">Sandwich</h2>
            <p className="mt-2 text-gray-600">
              Price: ${11 * quantity} Billion
            </p>
          </div>

          <div className="buttons flex items-center border p-2 rounded space-x-2">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-lg font-semibold rounded"
            >
              -
            </button>

            <span className="text-lg font-semibold px-4">{quantity}</span>

            <button
              onClick={increaseQuantity}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-lg font-semibold rounded"
            >
              +
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Cart;
