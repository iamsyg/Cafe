import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add"
import List from "./pages/List"
import Orders from "./pages/Orders"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
          <Routes>
            <Route path="/" element={<Add />} />
            <Route path="/list" element={<List/>} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
