import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Items from './components/Items';
import Profile from './pages/Profile';
import Order from './pages/Order';
import Annapurna from './pages/Annapurna';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './pages/Cart';

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
          <Items />
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

  // const routerNav = createBrowserRouter([

  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <Navbar />
  //         <Items />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/profile",
  //     element: (
  //       <>
  //         <Sidebar />
  //         <Profile />
  //       </>
  //     ),
  //   },
  // ])

  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={routerSidebar} />
    </>
  );
}

export default App;
