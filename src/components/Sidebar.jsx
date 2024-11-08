import React from "react";

const Sidebar = () => {
  return (
    <div className="container ">
      <div className="profile flex  justify-center my-5">
        <a href="">
          <button className="flex gap-3 items-center">
            <h2>Profile</h2>
            <lord-icon
              src="https://cdn.lordicon.com/kdduutaw.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#121331,secondary:#000000"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
          </button>
        </a>
      </div>
      <div className="previous-order flex justify-center my-10">
        <a href="">
          <button className="flex gap-3 items-center">
            <h2>Previous orders</h2>
            <lord-icon
              src="https://cdn.lordicon.com/jprtoagx.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#121331,secondary:#000000"
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>
          </button>
        </a>
      </div>
      <div className="annapurna flex justify-center my-10">
        <a href="">
          <button className="flex gap-3 items-center">
            <h2>Annapurna</h2>
            <lord-icon
              src="https://cdn.lordicon.com/evyyfapb.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#121331,secondary:#000000"
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
