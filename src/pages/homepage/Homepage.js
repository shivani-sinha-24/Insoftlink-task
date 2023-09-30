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
    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // // Clean up the event listener when the component unmounts
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, [scrolling]);

  return (
    <div>
      {scrolling && <HomeNav  scrolling={scrolling} setScrolling={setScrolling}/>}
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
