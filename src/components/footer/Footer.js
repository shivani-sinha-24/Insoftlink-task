import React from 'react'
import './Footer.css'

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
            <p>ACTPAL Information</p>
            <p>Why We Are Different</p>
            <p>How It Works</p>
            <p>Become a Seller</p>
            <p>© Copyright</p>
            <p>Support</p>
            <p>Support Contact Details</p>
            <p>Support Privacy Policy</p>
            <p>Support Request Form</p>
            <p>My Support Requests</p>
            <p>My Support Request Application</p>
            <p>ACTPAL Guidance</p>
          </div>
          <div className="content">
            <p className='h4'>My Account</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Help & FAQs</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <p>© Copyright 2023 ACTPAL. All rights reserved.</p>
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
