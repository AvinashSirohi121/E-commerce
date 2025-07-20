import React, { useState } from 'react'
import "./Navbar.css"
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdOutlineRocketLaunch } from "react-icons/md";
import { CategorySidePanel } from './CategorySidePanel';

const Navbar = () => {
    const navbarList =[
        
        {
          categoryId:11,
          categoryName:"Home",
          categoryLink:"/",
          haveSubCategory:false,
          
        },
        {
          categoryId:1,
          categoryName:"Fashion",
          categoryLink:"/",
          haveSubCategory:true,
          subCategory:[
            {subCategoryId:10,subCategoryName:"Men",subCategoryLink:"/"},
            {subCategoryId:11,subCategoryName:"Women",subCategoryLink:"/"},
            {subCategoryId:12,subCategoryName:"Kids",subCategoryLink:"/"}
          ]
        },
        {
          categoryId:2,
          categoryName:"Electronics",
          categoryLink:"/",
          haveSubCategory:true,
          subCategory:[
            {subCategoryId:20,subCategoryName:"Mobile",subCategoryLink:"/"},
            {subCategoryId:21,subCategoryName:"Loptops",subCategoryLink:"/"},
            {subCategoryId:22,subCategoryName:"Smart Watch",subCategoryLink:"/"}
          ]
        },
        {
          categoryId:3,
          categoryName:"Bags",
          categoryLink:"/",
          haveSubCategory:true,
          subCategory:[
            {subCategoryId:30,subCategoryName:"Mens Bags",subCategoryLink:"/"},
            {subCategoryId:31,subCategoryName:"Womens Bags",subCategoryLink:"/"}
          ]
        },
        {
          categoryId:4,
          categoryName:"Footwear",
          categoryLink:"/",
          haveSubCategory:true,
          subCategory:[
            {subCategoryId:40,subCategoryName:"Men Footwear",subCategoryLink:"/"},
            {subCategoryId:41,subCategoryName:"Women Footwear",subCategoryLink:"/"},
            {subCategoryId:42,subCategoryName:"Kids Footwear",subCategoryLink:"/"}
          ]
        },
        {categoryId:5,categoryName:"Groceries",categoryLink:"/"},
        {categoryId:6,categoryName:"Beauty",categoryLink:"/"},
        {categoryId:7,categoryName:"Wellness",categoryLink:"/"},
        {categoryId:8,categoryName:"Jewellery",categoryLink:"/"},
  ]


    const [openSidePanel,setOpenSidePanel] = useState(false);
    const [categoryOpen , setCategoryOpen] = useState(null)

    const toggelSidePanel =(val)=>{
        console.log("openSidePanel =>",openSidePanel)
        setOpenSidePanel(val)
    }
    
  const handleMouseEnter = (categoryId) => {
    setCategoryOpen(categoryId);
  };

  const handleMouseLeave = () => {
    setCategoryOpen(null);
  };

  return (
    <>
      <div className="container navbar">
        <div className="navbar_col1" onClick={() => toggelSidePanel(true)}>
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
              navbarList.map((item) => (
                <React.Fragment key={item.categoryId}>
                  <li
                    className="navbar_col2_listItems relative"
                    onMouseEnter={() => handleMouseEnter(item.categoryId)}
                    onMouseLeave={handleMouseLeave}
                    style={{ position: "relative" }}
                  >
                    <Link className="link" to={item?.categoryLink}>
                      {item?.categoryName}
                    </Link>
                    {categoryOpen === item.categoryId &&
                      item.haveSubCategory &&
                      item?.subCategory &&
                      item.subCategory.length > 0 && (
                        <ul
                          className="subcategory-dropdown"
                          style={{
                            listStyle:"none",
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            background: "#00000",
                            boxShadow: "0 2px 8px rgba(0,0,8,0.1)",
                            zIndex: 10,
                            borderRadius:"10px",
                            minWidth: "150px",
                          }}
                          onMouseEnter={() => handleMouseEnter(item.categoryId)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {item.subCategory.map((sc) => (
                            <li
                              className='link hover:bg-[#eeeded] transition-shadow'
                              key={sc.subCategoryId}
                              style={{

                                padding: "8px 16px",
                                cursor: "pointer",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {sc?.subCategoryName}
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                </React.Fragment>
              ))}
          </ul>
        </div>
        <div className="navbar_col3">
          <MdOutlineRocketLaunch />
          <p>Free Internationl Delivery</p>
        </div>
      </div>

      <CategorySidePanel
        toggelSidePanel={toggelSidePanel}
        openSidePanel={openSidePanel}
      />
    </>
  );
}

export default Navbar