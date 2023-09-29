import React from 'react'
import './SignUpMain.css'
import { Link } from 'react-router-dom'

const SignUpMain = () => {
  return (
    <div className='main-content'>
      <form action="">
        <h3>Sign up to your account to continue</h3>
        <p>Enter your Email address and password</p>
        <div className="email_input">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="email_input">
          <label htmlFor="password">Your Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="email_input">
          <label htmlFor="cPassword">Confirm Password</label>
          <input type="cPassword" name="cPassword" id="cPassword" />
        </div>      
        <div>
          <input type="checkbox" name="conditions" id="conditions" />
          <label htmlFor="conditions">
          Terms and condition should be connected to ACTPAL's 
          <Link to={`/signup`}>Terms & Conditions</Link>
          </label>
        </div>
      </form>
    </div>
  )
}

export default SignUpMain
