import React, { useEffect, useState } from 'react'
import './Homepage.css'
import Footer from '../../components/footer/Footer'
import HomeNav from '../../components/homeNav/HomeNav'
import SignupBottom from '../../components/SignupBottom/SignupBottom'
import HomeSec1 from '../../components/HomeSec1/HomeSec1'
import HomeServices from '../../components/HomeServices/HomeServices'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import HomeWork from '../../components/HomeWork/HomeWork'
import Testimonials from '../../components/Testimonials/Testimonials'
import HomeBlog from '../../components/HomeBlog/HomeBlog'
import HomeFaqs from '../../components/HomeFaqs/HomeFaqs'

const Homepage = ({scrolling, setScrolling}) => {

  useEffect(() => {
    // Set the document title to '/home' when the component mounts
    document.title = 'ACTPal - Home';
  });

  return (
    <div>
      {<HomeNav  scrolling={scrolling} setScrolling={setScrolling}/>}
      <HomeSec1  scrolling={scrolling} setScrolling={setScrolling}/>
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
