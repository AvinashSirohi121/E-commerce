import React from 'react'
import "./Navbar.css"
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdOutlineRocketLaunch } from "react-icons/md";

const Navbar = () => {
    const navbarList =[
        {name:"Home",link:"/"},
        {name:"Fashion",link:"/"},
        {name:"Electronics",link:"/"},
        {name:"Bags",link:"/"},
        {name:"Footwear",link:"/"},
        {name:"Groceries",link:"/"},
        {name:"Beauty",link:"/"},
        {name:"Wellness",link:"/"},
        {name:"Jewellery",link:"/"},
    ]
  return (
    <div className="container navbar">
      <div className="navbar_col1">
        <div className="menuHeading">
          <RiMenu2Fill className="meunIcon" />
          SHOP BY CATEGORIES
        </div>
        <FaAngleDown />
      </div>

      <div className="navbar_col2">
        <ul className="navbar_col2_list">
          {navbarList &&
            navbarList.length > 0 &&
            navbarList.map((item, index) => (
              <li key={index} className="navbar_col2_listItems">
                <Link className="link" to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="navbar_col3">
            <MdOutlineRocketLaunch/>
            <p>Free Internationl Delivery</p>
      </div>
    </div>
  );
}

export default Navbar