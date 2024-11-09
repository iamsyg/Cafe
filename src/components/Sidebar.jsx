import React from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed top-20 left-0 h-screen w-1/5 bg-peach text-black text-2xl border border-black mt-2">
      {/* Items Section */}
      <div className="items flex justify-center my-5">
        <Link to="/">
          <button className="flex gap-2 md:gap-3 items-center p-2 md:p-3">
            <h2 className="text-base md:text-lg font-semibold">Items</h2>
            <lord-icon
              src="https://cdn.lordicon.com/kdduutaw.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#121331,secondary:#000000"
              style={{ width: "20px", height: "20px" }}
            ></lord-icon>
          </button>
        </Link>
      </div>
      {/* Profile Section */}
      <div className="profile flex justify-center my-5">
        <Link to="/profile">
          <button className="flex gap-2 md:gap-3 items-center p-2 md:p-3">
            <h2 className="text-base md:text-lg font-semibold">Profile</h2>
            <lord-icon
              src="https://cdn.lordicon.com/kdduutaw.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#121331,secondary:#000000"
              style={{ width: "20px", height: "20px" }}
            ></lord-icon>
          </button>
        </Link>
      </div>

      {/* Orders Section */}
      <div className="previous-order flex justify-center my-5 md:my-8">
        <Link to="/order">
          <button className="flex items-center gap-2 md:gap-3 p-2 md:p-3 whitespace-nowrap">
            <h2 className="text-base md:text-lg font-semibold">Orders</h2>
            <lord-icon
              src="https://cdn.lordicon.com/jprtoagx.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#121331,secondary:#000000"
              style={{ width: "20px", height: "20px" }}
            ></lord-icon>
          </button>
        </Link>
      </div>

      {/* Annapurna Section */}
      <div className="annapurna flex justify-center my-5 md:my-8">
        <Link to="/annapurna">
          <button className="flex gap-2 md:gap-3 items-center p-2 md:p-3">
            <h2 className="text-base md:text-lg font-semibold">Annapurna</h2>
            <lord-icon
              src="https://cdn.lordicon.com/evyyfapb.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#121331,secondary:#000000"
              style={{ width: "20px", height: "20px" }}
            ></lord-icon>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
