import React, { Suspense, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy loading components
const Items = React.lazy(() => import('./pages/Items'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Order = React.lazy(() => import('./pages/Order'));
const Annapurna = React.lazy(() => import('./pages/Annapurna'));
const Cart = React.lazy(() => import('./pages/Cart'));

function App() {
  const routerSidebar = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Sidebar />
          <Items />
        </Suspense>
      ),
    },
    {
      path: "/profile",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Sidebar />
          <Profile />
        </Suspense>
      ),
    },
    {
      path: "/order",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Sidebar />
          <Order />
        </Suspense>
      ),
    },
    {
      path: "/annapurna",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Sidebar />
          <Annapurna />
        </Suspense>
      ),
    },
    {
      path: "/cart",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Sidebar />
          <Cart />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Sidebar />
          <Login />
          {/* Login component here */}
        </Suspense>
      ),
    },
  ]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable theme="light" />
      <RouterProvider router={routerSidebar} />
    </>
  );
}

export default App;
