import React from 'react'
import assets from '../assets/assets'

const Add = () => {
  return (
    <form action="" className='flex flex-col w-full items-start gap-3'>

      <div >
        <p>Upload image</p>
        <div >
          <label htmlFor="image1">
            <img src={assets.upload} alt="" />
            <input type="file" id="image1" hidden/>
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" name="" id="" placeholder='Type'/>
      </div>

      <div>
        <p>Product Price</p>
        <input type="Number" placeholder='25'/>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
    </form>
  )
}

export default Add
