import React from 'react'


const Navbar = ({setToken}) => {
  return (
    <div className='flex bg-red-300 items-center py-2 px-[4%] justify-between border-b-2'>
        <h1 className="font-bold text-xl gap-5">CaféSync</h1>
        <button onClick={()=>setToken("")} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar