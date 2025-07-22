import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaIndianRupeeSign } from "react-icons/fa6";
import "./FreeShipping.css"

const FreeShipping = () => {
  return (
    <div className='freeshipping-Parent container'>
        <div className='freeshipping '>

        <div className='flex justify-center gap-[1rem]'>
             <LiaShippingFastSolid className='text-[4rem]  text-black'/>
            <p className='mt-[15px] text-[1.1rem] uppercase  '>Free Shipping</p>
        </div>
            <div>
               <p className='font-medium'> Free Delivery Now On Your First Order and over ₹500 </p>
            </div>

            <div className=' font-[800] text-[1.8rem]'>
                -Only ₹500 *
            </div>
        
    
    </div>
    </div>
    
  )
}

export default FreeShipping