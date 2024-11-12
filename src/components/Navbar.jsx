import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ItemContext } from "../context/ItemContext";

const Navbar = () => {
  const { search, setSearch } = useContext(ItemContext);

  // Function to handle changes in the search input
  const handleSearchChange = (e) => {
    setSearch(e.target.value); // Update search context with the new value
  };

  return (
    <nav>
      <div className="container text-black flex bg-red-300 py-4 px-6 justify-between border border-black fixed top-0">
        <div className="logo flex items-center border-black px-2">
          <h1 className="font-bold text-xl gap-5">Café</h1>
          <lord-icon
            src="https://cdn.lordicon.com/szxeuwjp.json"
            trigger="hover"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
        </div>

        <div className="search flex items-center border-black border-2 rounded-lg overflow-hidden">
          <input
            className="p-2 w-96 border-none focus:outline-none rounded-none" // Removes extra rounding
            type="search"
            name="search"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange} // Handle search input change
          />
          <div className="search-icon">
            <button className="flex items-center px-3 border-l-2 border-black bg-white">
              <lord-icon
                src="https://cdn.lordicon.com/wjyqkiew.json"
                trigger="hover"
                style={{
                  width: "30px",
                  height: "40px",
                  background: "white",
                }}
              ></lord-icon>
            </button>
          </div>
        </div>

        <div className="cart-logo font-bold text-xl">
          <Link to="/cart">
            <button className="gap-2 flex items-center border-2 border-black rounded-lg bg-white px-2">
              <h2>Cart</h2>
              <lord-icon
                src="https://cdn.lordicon.com/ggirntso.json"
                trigger="hover"
                style={{ width: "30px", height: "40px" }}
              ></lord-icon>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
