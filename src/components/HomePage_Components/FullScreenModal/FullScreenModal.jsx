import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './FullscreenModal.css';
import { IoClose } from "react-icons/io5";

const FullscreenModal = ({ onClose, productDetails, setProductDetails }) => {
  // Lock scroll on mount
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow; // Reset on unmount
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={()=>{onClose();setProductDetails(null)}}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      
        <div className="close-button" onClick={()=>{onClose();setProductDetails(null)}}>
            <IoClose/>
        </div>

        <div className='product-image'>
           <img />
        </div>
        <div className='product-details'>
            <h2 className='product-heading'></h2>
            <div className='product-brand'>
                <span>
                    <p className='product-brand-heading'></p>
                    <p className='product-brand-name'></p>
                    <div className='product-rating'></div>
                    <p className='product-revoews'></p>
                </span>
            </div>
            <div>
                
            </div>

        </div>
      </div>
    </div>,
    document.body
  );
};

export default FullscreenModal;
