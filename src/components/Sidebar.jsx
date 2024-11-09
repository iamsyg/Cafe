import React from "react";

const Sidebar = () => {
  return (
    <div className="container mx-auto p-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
      {/* Profile Section */}
      <div className="profile flex justify-center my-5">
        <a href="#">
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
        </a>
      </div>

      {/* Previous Orders Section in one line */}
      <div className="previous-order flex justify-center my-5 md:my-8">
        <a href="#">
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
        </a>
      </div>

      {/* Annapurna Section */}
      <div className="annapurna flex justify-center my-5 md:my-8">
        <a href="#">
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
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
