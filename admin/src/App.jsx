import React from "react";
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
import Login from "./components/Login";
import { ToastContainer } from 'react-toastify';

export const backendUrl=import.meta.env.VITE_BACKEND_URL

function App() {
  const [count, setCount] = useState(0);
  const[token,setToken]=useState('');

 

  return (
    <div className="bg-gray-50 min=h-screen">
      <ToastContainer/>
    {token === ""
      ? <Login setToken={setToken} /> : <>
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
    }
    </div>
  );
}

export default App;
