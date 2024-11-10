import React from 'react'

import { useState } from "react";
const Payment = () => {

    const [selectedMethod, setSelectedMethod] = useState("upi");

  return (
    <div>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment</h2>

      {/* Payment Method Selection */}
      <div className="flex justify-around mb-6">
        <button
          onClick={() => setSelectedMethod("upi")}
          className={`px-4 py-2 rounded-md text-lg font-semibold ${
            selectedMethod === "upi"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          UPI
        </button>
        <button
          onClick={() => setSelectedMethod("card")}
          className={`px-4 py-2 rounded-md text-lg font-semibold ${
            selectedMethod === "card"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Card
        </button>
      </div>

      {/* UPI Payment Form */}
      {selectedMethod === "upi" && (
        <div>
          <label className="block mb-2 text-gray-700">Enter UPI ID</label>
          <input
            type="text"
            placeholder="example@upi"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-md">
            Pay with UPI
          </button>
        </div>
      )}

      {/* Card Payment Form */}
      {selectedMethod === "card" && (
        <div>
          <label className="block mb-2 text-gray-700">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9123 4567"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-2 text-gray-700">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-2 text-gray-700">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md">
            Pay with Card
          </button>
        </div>
      )}
    </div>
    </div>
  )
}

export default Payment
