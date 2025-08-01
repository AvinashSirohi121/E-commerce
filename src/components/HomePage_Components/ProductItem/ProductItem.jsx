import React, { useState } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";

import { TiStarOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import "./ProductItem.css"
import { MdZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import FullscreenModal from '../FullScreenModal/FullScreenModal';

const ProductItem = ({product}) => {
  const [showModal,setShowModal]= useState(false);
  const [productDetails, setProductDetails] = useState(null);

    const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<TiStarFullOutline  key={i} className=" text-[#f1bc35]" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<TiStarHalfOutline key={i} className=" text-[#f1bc35]" />);
    } else {
      stars.push(< TiStarOutline key={i} className="text-[gray]" />);
    }
  }

  return stars;
};

const zoomItem =(item)=>{
  setShowModal(true)
  setProductDetails(item)
}
  return (
    <div className='' style={{position:"relative"}}>
    <div className='product'>
        <p className='product-discount'>{`${Math.ceil(product?.discountPercentage)}%`}</p>
       
        <img className='product-image w-[80%]' src={product?.thumbnail} alt={product?.title}/>
        
         <div className='productImage-hover'>
            <div className='productImage-hover-items'> <MdZoomOutMap onClick={()=>zoomItem(product)} className='productImage-hover-item' /></div>
            <div className='productImage-hover-items'><FaRegHeart className='productImage-hover-item'/></div>
           
            
        </div>
        
        <div className='product-info'>
            <h4 className='product-title'>{`${product?.title.substring(0,20)}...`}</h4>
            <p className='product-desc'>{`${product?.description.substring(0,30)}...`}</p>
            {product?.rating && 
            <div>
                {renderStars(product?.rating)}
            </div>    
            }
            <div className='product-price'>
                <s className='product-price-original'>{`₹${(product?.price*85*1.2).toFixed(0)}.00`}</s>
                <p className='product-price-effected'>{`₹${(product?.price*85).toFixed(0)}.00`}</p>
            </div>

            
        </div>
        <div className='product_addToCart'>
                <MdOutlineShoppingCart />
                <p className='product-addToCart-title'>Add to Cart</p>

            </div>
    </div>

     
       {showModal && (
        <FullscreenModal 
        onClose={() => {setShowModal(false);setProductDetails(null)}} 
        productDetails={productDetails}
        setProductDetails={setProductDetails}
        />
      )}
    </div>
    
  )
}

export default ProductItem