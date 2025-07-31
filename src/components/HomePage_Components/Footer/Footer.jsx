import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import LowerFooter from './LowerFooter';

import "./Footer.css"
const Footer = () => {

    const upperFooter = [
        {icon:LiaShippingFastSolid, 
            heading:"Free Shipping",
            desc:"For all Orders Over ₹1000"
        },
        {icon:PiKeyReturn, 
            heading:"30 Days Returns",
            desc:"For an Exchange Product"
        },
        {icon:IoWalletOutline, 
            heading:"Secured Payment",
            desc:"Payment Cards Accepted"
        },
        {icon:LiaGiftSolid, 
            heading:"Special Gifts",
            desc:"Out First Product Order"
        },
        {icon:BiSupport, 
            heading:"Support 24/7",
            desc:"Contact us Anytime"
        },
    ]
  return (
    <div className='footer'>
        <div className='upperFooter_parent'>
            <div className='upper-footer'>
                {upperFooter.map((item,index)=>{
                    const Icon = item.icon;
                    return (
                        <div key={index} className='upper-Footer-icons-parent'>
                        <Icon className='upper-Footer-icons'/>
                        <p className='upper-Footer-icons-heading'>{item.heading}</p>
                        <p className='upper-Footer-icons-desc'>{item.desc}</p>
                    </div>
                    )
                })}
            </div>
        </div>
        <LowerFooter/>

    </div>
  )
}

export default Footer