import * as React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "./PopularProducts.css"
import ProductSlider from '../ProductSlider/ProductSlider';

const ProularProducts = () => {
      const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const productCategory = [
       {imageLink: "https://serviceapi.spicezgold.com/download/1752711374918_1000013786.png", catName:"fashion"},
       {imageLink: "https://serviceapi.spicezgold.com/download/1741660988059_ele.png",catName:"Electronics"},
        {imageLink:"https://serviceapi.spicezgold.com/download/1741661045887_bag.png",catName:"Bags"},
        {imageLink:"https://serviceapi.spicezgold.com/download/1741661061379_foot.png", catName:"Footwear"},
        {imageLink:"https://serviceapi.spicezgold.com/download/1741661077633_gro.png", catName:"Groceries"},
       {imageLink: "https://serviceapi.spicezgold.com/download/1741661092792_beauty.png", catName:"Beauty"},
       {imageLink: "https://serviceapi.spicezgold.com/download/1741661105893_well.png", catName:"Wellness"},
       {imageLink: "https://serviceapi.spicezgold.com/download/1749273446706_jw.png", catName:"Jewellery"},
    ]

  return (
    
        <div className="container popularProducts">
            <div className='flex items-center justify-between'>
              <div className='leftSec'>
                <h2 className='text-[25px] font-[600]'>Popular Products</h2>
                <p className='text-[14px] font-[400]'>Do not miss the current offers until the end of the March</p> 
            </div>
            <div className='rightSec w-[60%] bg-red-300'>
                 <Box sx={{  bgcolor: 'background.paper' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                       {productCategory.map((i,index)=>(
                        <Tab key={index} label={i.catName}/>
                       ))}
                    </Tabs>
                    </Box>

            </div>

            </div>

            <ProductSlider items={7}/>
          </div>
   
  )
}

export default ProularProducts