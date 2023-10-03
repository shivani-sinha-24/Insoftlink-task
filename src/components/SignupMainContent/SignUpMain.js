import React, { useState } from 'react'
import './SignUpMain.css'
import { Link } from 'react-router-dom'

const SignUpMain = () => {

  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  
  return (
    <div className='main-content'>
      <form action="">
        <p className='h3'>Sign up to your account to continue</p>
        <p className='desc'>Enter your Email address and password</p>
          <label htmlFor="email">Email Address</label>
        {/* <div className="form_input"> */}
          <input type="email" name="email" id="email" placeholder="Your Mail"/>
        {/* </div> */}
          <label htmlFor="password">Your Password</label>
          <input type={showPassword?"text":"password"} name="password" id="password" placeholder="Your Password"/>
        <div className="form_input">
            <i onClick={()=>setShowPassword(!showPassword)} className={!showPassword?"fa-regular fa-eye":"fa-regular fa-eye-slash"}></i>
        </div>
          <label htmlFor="cPassword">Confirm Password</label>
          <input type={showConfirmPassword?"text":"password"} name="cPassword" id="cPassword" placeholder="Confirm Password"/>
        <div className="form_input">
          <i onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className={!showConfirmPassword?"fa-regular fa-eye":"fa-regular fa-eye-slash"}></i>
        </div>      
        <div>
          <input type="checkbox" name="conditions" id="conditions" />
          <label htmlFor="conditions" className='conditions'>
          Terms and condition should be connected to ACTPAL's 
          <p>
            <Link className='conditions' to={`/signup`}>Terms & Conditions</Link>
          </p>
          </label>
        </div>
        <button className='submit-btn' onClick={(e)=>{e.preventDefault()}}>Create New Account</button>
        <p className='or'>or</p>
        <Link className='login-btn' to={'/'}>Log In</Link>
      </form>
    </div>
  )
}

export default SignUpMain
