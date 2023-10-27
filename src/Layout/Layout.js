import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SignupNav from '../components/SignupNav/SignupNav'
import SignupBottom from '../components/SignupBottom/SignupBottom'
import Footer from '../components/footer/Footer'

const Layout = () => {
  
  return (
    <>
      <SignupNav/>
      <Outlet/>
      <SignupBottom/>
      <Footer/> 
    </>
  )
}

export default Layout
