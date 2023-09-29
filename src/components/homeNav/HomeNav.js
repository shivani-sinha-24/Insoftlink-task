import React from 'react'
import './HomeNav.css'

const HomeNav = () => {
  return (
    <div className='home-nav'>
      <div className="left">
        <img src="https://www.actpal.com/Content_V2/assets/img/actpal_logo.svg" alt="" />
      </div>
      <div className="right">
        <div className="item">Shop</div>
        <div className="item">Expereience</div>
        <div className="item">Become a Service Provider</div>
        <div className="item">Support</div>
        <div className="item"><i className="fa-solid fa-cart-shopping"></i> Cart</div>
        <div className="item">Login</div>
        <div className="item"><div id="google_translate_element"></div></div>
      </div>
    </div>
  )
}

export default HomeNav
