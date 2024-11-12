import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Items from './pages/Items';
import Profile from './pages/Profile';
import Order from './pages/Order';
import Annapurna from './pages/Annapurna';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './pages/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0);

  // Define routes
  const routerSidebar = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
         <Navbar/>
          <Sidebar />
          <Items />  {/** ProductID*/}
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
        <Navbar/>
          <Sidebar />
          <Profile />
        </>
      ),
    },
    {
      path: "/order",
      element: (
        <>
        <Navbar/>
          <Sidebar />
          <Order />
        </>
      ),
    },
    {
      path: "/annapurna",
      element: (
        <>
        <Navbar/>
          <Sidebar />
          <Annapurna />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
        <Navbar/>
        <Sidebar />
        <Cart/>
        </>
      )
    }
  ]);

  return (
    <>
      {/* <Navbar /> */}
      
      <RouterProvider router={routerSidebar} />
    </>
  );
}

export default App;
