import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 rounded-l">
          <div className="add">
            <lord-icon
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
          </div>
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 rounded-l">
          <div className="add">
            <lord-icon
               src="https://cdn.lordicon.com/edcgvlnw.json"
    trigger="hover"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
          </div>
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 rounded-l">
          <div className="add">
            <lord-icon
               src="https://cdn.lordicon.com/ggirntso.json"
    trigger="hover"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
          </div>
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
