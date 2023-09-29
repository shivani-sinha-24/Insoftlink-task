import React from 'react'
import './SignupBottom.css'

const SignupBottom = () => {
  return (
    <div className='signup-bottom'>
        <div className="left">
            <h3>Sign up for our newsletter</h3>
            <h4>Be the first to know about releases and industry news and insights.</h4>
            <div className="subscribe">
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
            <p>We care about your data in our privacy policy</p>
        </div>
        <div className="right">
            <h3>Keep in touch</h3>
            <h4>Visit our social media links & stay updated</h4>
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
