import React, { useState } from 'react'
import './HomeNav.css'
import { Link } from 'react-router-dom';

const HomeNav = ({scrolling}) => {

  const navbarClass = scrolling ? 'home-nav scrolled' : 'home-nav';
  const [showDD,setShowDD]=useState(false)
  
  return (
    <>
    <div className={navbarClass}>
      <Link onClick={()=>window.location='/'}  className="left">
        <img src="https://www.actpal.com/Content_V2/assets/img/actpal_logo.svg" alt="" />
      </Link>
      <div className="right">
        <Link onClick={()=>window.location=''} className="item">Shop</Link>
        <Link onClick={()=>window.location=''} className="item">Expereience</Link>
        <Link onClick={()=>window.location=''} className="item">Become a Service Provider</Link>
        <Link onClick={()=>setShowDD(!showDD)} className="item">Support</Link>
        <Link onClick={()=>window.location=''} className="item"><i className="fa-solid fa-cart-shopping"></i> Cart</Link>
        <Link onClick={()=>window.location=`/signup`} className="item">Login</Link>
        <Link className="item"><div id="google_translate_element"></div></Link>
      </div>
    </div>
    {/* {
      showDD &&
      <div className="dropdown-nav-menu">
          <div className="menus">
              <div className="dd-item"><span>My Ticket</span></div>
              <div className="dd-item"><span>Support</span></div>
              <div className="dd-item"><span>Ask Your Question</span></div>
          </div>
      </div>
    } */}
    </>
  )
}

export default HomeNav
