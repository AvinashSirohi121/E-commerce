import React from 'react'
import Header from '../../components/HomePage_Components/Header/Header'
import Navbar from "../../components/HomePage_Components/NavBar/Navbar"
import Slider from '../../components/HomePage_Components/BannerSlider/Slider'
import CategorySlider from '../../components/HomePage_Components/CategorySlider/CategorySlider'
import AdsBannerSlider from '../../components/HomePage_Components/AdsBannerSlider/AdsBannerSlider'
import AdsBannerSlider2 from '../../components/HomePage_Components/AdsBannerSlider/AdsBannerSlider2'
import "./Home.css"
import FreeShipping from '../../components/HomePage_Components/FreeShipping/FreeShipping'
const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className='home'>
        <Slider/>
        <CategorySlider className="py-8"/>
      </div>
       <section className='middleSection'>
        <FreeShipping/>
        <AdsBannerSlider/>
        <AdsBannerSlider2/>
      </section>
     
      Home
    </div>
  )
}

export default Home