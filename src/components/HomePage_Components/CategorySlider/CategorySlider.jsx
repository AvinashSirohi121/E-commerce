import React from 'react'
import "./CategorySlider.css"

const CategorySlider = () => {

    const categroyIcons = [
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
    <div className='homeCatSlider  '>
        <div className='CategorySlider_Container'>
            {categroyIcons.map((c,index)=>(
                <div key={index} 
                className='categroyIcons' >
                    <img  className='w-[80px] ' src={c?.imageLink} alt={c.catName}/>
                    <h3>{c.catName}</h3>
                </div>
            ))}
            
       
        </div>

    </div>
  )
}

export default CategorySlider