import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import "./Header.css"

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
                                <ul className='flex gap-[10px] bg-pink-600 justify-between items-center '>
                                    <li className='list-none'>
                                        <Link to="/help-center"
                                        className='text-[12px] link font-[500] transition no-underline'
                                        >Help Center</Link>
                                    </li>
                                    <li className='list-none'>
                                        <Link to="/order-tracking"
                                        className='text-[12px] link font-[500] transition no-underline'
                                        >Order Tracking</Link>
                                    </li>
                                    
                                </ul>
                        </div>
                    </div>
                </div>
            </div>

       
            <div className='header container flex items-center justify-between'>

                <div className='col1 w-[30%]'>
                    <Link to="/">
                    <img src={""} alt="logo"/>
                    </Link>
                </div>

                <div className='col2 w-[40%]'>
                        <SearchBar/>
                </div>

                <div className='col3 w-[30%]'>
                    <div className='login-register'>
                        

                    </div>

                </div>
            </div>

          
        

        </header>
    )
}

export default Header