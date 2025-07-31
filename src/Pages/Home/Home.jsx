import React from 'react'
import Header from '../../components/HomePage_Components/Header/Header'
import Navbar from "../../components/HomePage_Components/NavBar/Navbar"
import Slider from '../../components/HomePage_Components/BannerSlider/Slider'
import CategorySlider from '../../components/HomePage_Components/CategorySlider/CategorySlider'
import AdsBannerSlider from '../../components/HomePage_Components/AdsBannerSlider/AdsBannerSlider'
import AdsBannerSlider2 from '../../components/HomePage_Components/AdsBannerSlider/AdsBannerSlider2'
import "./Home.css"
import ProularProducts from '../../components/HomePage_Components/Popular_Products/ProularProducts'
import FreeShipping from '../../components/HomePage_Components/FreeShipping/FreeShipping'
import Footer from '../../components/HomePage_Components/Footer/Footer'
const Home = () => {

  return (
    <div>
      <Header/>
      <Navbar/>
      
      <div className='home'>
        <Slider/>
        <CategorySlider className="py-8"/>
      </div>
      <section className='py-8 mb-20'>
            <ProularProducts/>
        </section>
       <section className='middleSection'>
        <FreeShipping/>
        
        <AdsBannerSlider/>
          <ProularProducts/>
        <AdsBannerSlider2/>
      </section>
     
      <Footer/>
     
    </div>
  )
}

export default Home