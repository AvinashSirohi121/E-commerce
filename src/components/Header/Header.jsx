import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import "./Header.css"
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: 2,
    border: `3px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
    return (
        <header>
            <div className=' mb-5 h-[40px] flex items-center top-strip border-b-[1px] border-gray-500'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='col1 w-[50%] text-ellipsis '>

                            <p className='text-[14px] '>
                                Get upto 50% off new season stypes, limited time offer
                            </p>
                        </div>
                        <div className='cols2 '>
                                <ul className='flex gap-[2rem] justify-between items-center '>
                                    <li className='list-none'>
                                        <Link to="/help-center"
                                        className='text-[14px] link font-[500] transition no-underline'
                                        >Help Center</Link>
                                    </li>
                                    <li className='list-none'>
                                        <Link to="/order-tracking"
                                        className='text-[14px] link font-[500] transition no-underline'
                                        >Order Tracking</Link>
                                    </li>
                                    
                                </ul>
                        </div>
                    </div>
                </div>
            </div>

       
            <div className='header'>
            <div className='container flex items-center justify-between'>

                <div className='header_col1 '>
                    <Link to="/">
                    <img src={"https://serviceapi.spicezgold.com/download/1750047766437_logo.jpg"} alt="logo"/>
                    </Link>
                </div>

                <div className='header_col2 '>
                        <SearchBar/>
                </div>

                <div className='header_col3 '>
                    <div className='login-register'>
                        <span><Link className='link' to="/login">Login |</Link></span>
                       <span><Link  className='link' to="/register"> Register</Link></span>

                    </div>

                    <div className='wishList-cart'>
                        <div className='wishList-cart-icon'>
                            <Tooltip title="Wishlist" placement="bottom">
                                <IconButton aria-label="wishlist">
                                    <StyledBadge badgeContent={4} color="primary">
                                        <FaRegHeart className='wishList-cart-button'/>
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div className='wishList-cart-icon'>
                             <Tooltip title="Cart" placement="bottom">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color="secondary">
                                    <MdOutlineShoppingCart className='wishList-cart-button'/>
                                </StyledBadge>
                            </IconButton>
                             </Tooltip>
                        </div>
                       

                    </div>

                </div>
            </div>
            </div>

          
        

        </header>
    )
}

export default Header