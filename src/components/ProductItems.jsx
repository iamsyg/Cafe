import React, { useContext } from 'react'
import { ItemContext } from '../context/ItemContext'
import assets from "../assets/assets";
import { Link } from 'react-router-dom';

const ProductItems = ({id, image, name, price}) => {

    const {currency}=useContext(ItemContext);

  return (
    <div className="max-w-xs mx-auto bg-slate-100 rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            // src="https://via.placeholder.com/400x300"
            src={image}
            alt="Card Image"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Name: {name}</h2>
            <p className="mt-2 text-gray-600">
              Price:{currency} {price}
            </p>
            <Link to="">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
            </Link>
            
          </div>
        </div>
  )
}

export default ProductItems
