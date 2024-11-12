import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Items from './pages/Items';
import Profile from './pages/Profile';
import Order from './pages/Order';
import Annapurna from './pages/Annapurna';
import Cart from './pages/Cart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Define routes
  const routerSidebar = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Sidebar />
          <Items />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <Navbar />
          <Sidebar />
          <Profile />
        </>
      ),
    },
    {
      path: "/order",
      element: (
        <>
          <Navbar />
          <Sidebar />
          <Order />
        </>
      ),
    },
    {
      path: "/annapurna",
      element: (
        <>
          <Navbar />
          <Sidebar />
          <Annapurna />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar />
          <Sidebar />
          <Cart />
        </>
      ),
    }
  ]);

  return (
    <>
      {/* ToastContainer added for global access to notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable theme="light" />
      
      <RouterProvider router={routerSidebar} />
    </>
  );
}

export default App;
