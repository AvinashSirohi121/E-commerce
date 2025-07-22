import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "./AdsBannerSlider.css"

import { Autoplay, Navigation } from 'swiper/modules';

const AdsBannerSlider = () => {
    const adsBannerSlider =[
        {bannerImage:"https://serviceapi.spicezgold.com/download/1751598649861_1737020916820_New_Project_52.jpg", link:"",text:"Buy women products with low price", price:"₹999"},
        {bannerImage:"https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png", link:"",text:"Buy Men's Bags with low price", price:"₹900"},
        {bannerImage:"https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg", link:"",text:"Buy Apple iPhone", price:"₹45000"},
        {bannerImage:"https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg", link:"",text:"Buy men's footwear with low price", price:"₹500"}

    ]
return (
    <div className='py-[3rem] container'>
        <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className='mySwiper'
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {adsBannerSlider.map((item, index) => (
                <SwiperSlide key={index} className='adsBannerSlide' style={{ position: 'relative' }}>
                    <img className='adsBannerSlideImage' src={item.bannerImage} alt="bannerImage" />
                    <div
                        className='adsBannerSlideImage-text'
                        style={{
                            position: 'absolute',
                            top: '10%',
                            right: (index === 0 || index === 3) ? '10%' : '0%',
                            left: (index === 1 || index === 2) ? '10%' : 'auto',
                            zIndex: 2,
                            width: 'auto',
                        }}
                    >
                        <p className="w-[150px] text-[1.4rem]">
                            {item?.text}
                        </p>
                        <h3 className='mt-[1rem] text-[red] text-[1.8rem]'>{item?.price}</h3>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
)
}

export default AdsBannerSlider