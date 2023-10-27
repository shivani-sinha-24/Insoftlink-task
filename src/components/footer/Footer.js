import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { footerLinks1, footerLinks2 } from '../../data/data'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="left">
          <img src="https://www.actpal.com/Content_V2/assets/img/footer_logo.svg" alt="" />
          <p>ACTPAL is a customer-centric company dedicated to offering comprehensive services and shopping experiences to its valued customers....</p>
          <div className="contact-us">
            <p className='h4'>Contact us</p>
            <p>
              <a href="mailto:support@actpal.com">support@actpal.com</a>
            </p>
            <p>
              <a href="tel:+1-6572312092">+1-(657) 231-2092</a>
            </p>
          </div>
          <div className="location">
            <p className='h4'>Location</p>
            <p>17192 Murphy Ave #16233 Irvine, CA, 92623</p>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <p className='h4'>Company</p>
            {
              footerLinks1?.map(link=><Link to={``} className='link'>{link}</Link>)
            }
          </div>
          <div className="content">
            <p className='h4'>My Account</p>            
            {
              footerLinks2?.map(link=><Link to={``} className='link'>{link}</Link>)
            }
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <Link to={``} className='link'>© Copyright 2023 ACTPAL. All rights reserved.</Link>
        </div>
        <div className="right">
          <div>Privacy Policy</div>
          <div>Terms and Conditions</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
