import React from 'react'
import './SignupBottom.css'

const SignupBottom = () => {
  return (
    <div className='signup-bottom'>
        <div className="left">
            <p className='h3'>Sign up for our newsletter</p>
            <p className='h4'>Be the first to know about releases and industry news and insights.</p>
            <div className="subscribe">
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
            <p className='text'>We care about your data in our privacy policy</p>
        </div>
        <div className="right">
            <p className='h3'>Keep in touch</p>
            <p className='h4'>Visit our social media links & stay updated</p>
            <div className="logos">
                <div className="logo"><i className="fa-brands fa-xl fa-twitter"></i></div>
                <div className="logo"><i className="fa-brands fa-xl fa-facebook-f"></i></div>
                <div className="logo"><i className="fa-brands fa-xl fa-instagram"></i></div>
                <div className="logo"><i className="fa-brands fa-xl fa-linkedin"></i></div>
                <div className="logo"><i className="fa-brands fa-xl fa-youtube"></i></div>          
            </div>
        </div>
    </div>
  )
}

export default SignupBottom
