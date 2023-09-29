import React from 'react'
import './Homepage.css'
import Footer from '../../components/footer/Footer'
// import HomeNav from '../../components/homeNav/HomeNav'
import SignupBottom from '../../components/SignupBottom/SignupBottom'
import HomeSec1 from '../../components/HomeSec1/HomeSec1'
import HomeServices from '../../components/HomeServices/HomeServices'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import HomeWork from '../../components/HomeWork/HomeWork'
import Testimonials from '../../components/Testimonials/Testimonials'
import HomeBlog from '../../components/HomeBlog/HomeBlog'
import HomeFaqs from '../../components/HomeFaqs/HomeFaqs'

const Homepage = () => {
  return (
    <div>
      {/* <HomeNav/> */}
      <HomeSec1/>
      <HomeServices/>
      <HomeAbout/>
      <HomeWork/>
      <Testimonials/>
      <HomeBlog/>
      <HomeFaqs/>
      <SignupBottom/>
      <Footer/>
    </div>
  )
}

export default Homepage