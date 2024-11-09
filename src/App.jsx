import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Items from './components/Items';
import Profile from './pages/Profile';
import Order from './pages/Order';
import Annapurna from './pages/Annapurna';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  // Define routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Sidebar />
          <Items />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <Sidebar />
          <Profile />
        </>
      ),
    },
    {
      path: "/order",
      element: (
        <>
          <Sidebar />
          <Order />
        </>
      ),
    },
    {
      path: "/annapurna",
      element: (
        <>
          <Sidebar />
          <Annapurna />
        </>
      ),
    },
  ]);

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
