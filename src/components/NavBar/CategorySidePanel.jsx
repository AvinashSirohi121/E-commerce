import  React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoClose } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


export const CategorySidePanel=(props)=>{
  const CategoryList =[
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
  const [categoryOpen,setCategoryOpen] = useState(null);


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <img src={"https://serviceapi.spicezgold.com/download/1750047766437_logo.jpg"} alt="logo" className='scale-[80%] pt-[2rem]' />
      <div className='flex justify-between items-center pl-[1rem]'>
        <p>Shop by Caterory</p>
        <div
          className='flex justify-start items-center p-[0.5rem] rounded-full hover:bg-[#f1f0f0] cursor-pointer transition-all'
          onClick={() => {setCategoryOpen(null);props.toggelSidePanel(false)}}>
          <IoClose className='font-extrabold mr-[5px] text-[20px]'/>
        </div>
      </div>
      <List>
        {CategoryList.map((text) => (
          <React.Fragment key={text?.categoryId}>
            <ListItem disablePadding>
              <ListItemButton  className='h-[40px]'
                onClick={() => {
                  if (text?.haveSubCategory) {setCategoryOpen(categoryOpen === text?.categoryId ? null : text?.categoryId)}}}>
                <ListItemText primary={text?.categoryName} />
                {text?.haveSubCategory &&
                  (categoryOpen === text?.categoryId ? 
                    <FaChevronUp onClick={(e) => { e.stopPropagation();setCategoryOpen(null); }}/> :
                   <FaChevronDown  onClick={(e) => {e.stopPropagation();  setCategoryOpen(text?.categoryId); }} /> )}
              </ListItemButton>
            </ListItem>
            {categoryOpen === text?.categoryId &&
              text?.haveSubCategory &&  text.subCategory &&  text.subCategory.length > 0 &&
              text.subCategory.map((sc) => (
                <ListItemButton className='h-[30px]'
                  key={sc?.subCategoryId} sx={{ pl: 4 }} >
                  <ListItemText primary={sc?.subCategoryName} />
                </ListItemButton>
              ))}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={props.openSidePanel} onClose={() => {setCategoryOpen(null);props.toggelSidePanel(false)}}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
