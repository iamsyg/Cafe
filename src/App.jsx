import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Items from './components/Items'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="sidebar w-1/5 bg-peach text-black fixed top-20 left-0 h-screen p-4 text-2xl border border-black mt-2">
      <Sidebar/>
      </div>
      <Items/>
    </>
  )
}

export default App
