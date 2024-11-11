import React, { useContext, useState, useEffect } from "react";
import { ItemContext } from "../context/ItemContext";
import ProductItems from "../components/ProductItems";

const Items = () => {
  const { products } = useContext(ItemContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="container mx-80 w-3/4 mt-24 flex flex-wrap gap-20">
      {latestProducts.map((item, index) => (
        <ProductItems
          key={index}
          id={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Items;
