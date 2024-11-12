import React, { useContext } from 'react'
import { ItemContext } from '../context/ItemContext'

const CartTotal = () => {

    const {currency, getCartAmount}=useContext(ItemContext);
  return (
    <div className='w-full'>
      <div>
        <h1>Cart total</h1>
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className="flex justify-between">
            <b>Total</b>
            <b>{currency} {getCartAmount()===0?0:getCartAmount()}</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
