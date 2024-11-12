import React, { useState } from "react";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("razorpay");

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment</h2>

      {/* Payment Method Selection */}
      <div className="flex justify-around mb-6">
        <button
          onClick={() => setSelectedMethod("razorpay")}
          className={`px-4 py-2 rounded-md text-lg font-semibold ${
            selectedMethod === "razorpay"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Razorpay (UPI)
        </button>
        <button
          onClick={() => setSelectedMethod("stripe")}
          className={`px-4 py-2 rounded-md text-lg font-semibold ${
            selectedMethod === "stripe"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Stripe (Card)
        </button>
      </div>

      {/* Razorpay UPI Payment Form */}
      {selectedMethod === "razorpay" && (
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Enter UPI ID</h3>
          <input
            type="text"
            placeholder="Enter your UPI ID"
            className="w-full p-2 border rounded-md mb-4"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold">
            Pay with Razorpay
          </button>
        </div>
      )}

      {/* Stripe Card Payment Form */}
      {selectedMethod === "stripe" && (
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Card Details</h3>
          <input
            type="text"
            placeholder="Card Number"
            className="w-full p-2 border rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full p-2 border rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="CVC"
            className="w-full p-2 border rounded-md mb-4"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold">
            Pay with Stripe
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
