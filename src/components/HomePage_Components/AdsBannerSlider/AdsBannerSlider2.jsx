import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "./AdsBannerSlider.css"

import { Autoplay, Navigation } from 'swiper/modules';

const AdsBannerSlider2 = () => {
    const adsBannerSlider =[
        {bannerImage:"https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp", link:"",},
        {bannerImage:"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp", link:"",},
        {bannerImage:"https://serviceapi.spicezgold.com/download/1741669057847_banner5.webp", link:"",},
        {bannerImage:"https://serviceapi.spicezgold.com/download/1742453755529_1741669087880_banner6.webp", link:"",},
        {bannerImage:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1749714609_Fashion-Banner--632-x-368--1-.jpg", link:"",},
        {bannerImage:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1752236026_HPMC_Banners_3.jpg", link:"",},
        {bannerImage:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1750224050_Wednesday-Bonus_HPMC.jpg", link:"",},

    ]
return (
    <div className='py-[3rem] container'>
        <Swiper
            slidesPerView={4}
            spaceBetween={10}
            loop={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className='mySwiper'
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {adsBannerSlider.map((item, index) => (
                <SwiperSlide key={index} className='adsBannerSlide2' style={{ perspective: '1000px' }}>
                    <img
                        className="adsBannerSlideImage2"
                        src={item.bannerImage}
                        alt="bannerImage"
                        style={{
                            transition: 'transform 0.2s',
                            willChange: 'transform',
                          
                        }}
                        // onMouseEnter={e => {
                        //      e.currentTarget.style.transform = index % 2 === 0 ? 'rotateZ(5deg) ' : 'rotateZ(-5deg) ';
                        // }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'none';
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
)
}

export default AdsBannerSlider2