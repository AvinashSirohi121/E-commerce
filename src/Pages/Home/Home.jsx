import React from 'react'
import Header from '../../components/HomePage_Components/Header/Header'
import Navbar from "../../components/HomePage_Components/NavBar/Navbar"
import Slider from '../../components/HomePage_Components/BannerSlider/Slider'
import CategorySlider from '../../components/HomePage_Components/CategorySlider/CategorySlider'
import "./Home.css"
const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className='home'>
         <Slider/>
      <CategorySlider/>
      </div>
     
      Home
    </div>
  )
}

export default Home