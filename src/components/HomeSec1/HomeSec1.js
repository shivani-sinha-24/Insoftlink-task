import React, { useEffect, useState } from 'react'
import './HomeSec1.css'
import { Link, useNavigate } from 'react-router-dom'

const HomeSec1 = () => {
    const navigate = useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const userObj = {
        email,
        password
    }

  return (
    <div className='sec1'>
      <div className="welcome">
        <div className="left">
            <div className="top">
                <p className='h1'>Welcome to </p>
                <img src="https://www.actpal.com/Content_v2/assets/img/actpal_banner.svg" alt="" />
            </div>
            <p>
                Unleash and nurture your potential, generate value, organize
                daily tasks collaboratively with individuals or chosen groups,
                effortlessly store, share, engage in discussions, promote, and
                beyond. Transform it into your ultimate social networking hub
                – ACTPAL empowers you with tools and autonomy, while you
                manifest your aspirations. Let's explore the array of ACTPAL's
                functional tools tailored to your needs.
            </p>
            <div className="search">
                <input type="text" placeholder="So, what are you wishing for today..."/>
                <button>SEARCH</button>
            </div>
            <div className="statistics">
                <div className="stats">
                    <div className="num">500k</div>
                    <p>Registered members</p>
                </div>
                <div className="stats">
                    <div className="num">350</div>
                    <p>User share their ideas or activity</p>
                </div>
                <div className="stats">
                    <div className="num">100+</div>
                    <p>We have community to share your ideas or activities</p>
                </div>
            </div>
        </div>
        <div className="right">
            <form 
                action="" 
                // onSubmit={()=>handleSubmit()}
            >
                <p className='h3'>Welcome back!</p>
                <p>Login to your account to continue</p>
                <div className="email_input">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" value={email} placeholder='Your E-mail' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="email_input">
                    <label htmlFor="password">Your Password</label>
                    <input type="password" name="password" id="password" value={password} placeholder='Your Password'onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="remember">
                    <div className="left">
                        <input type="checkbox" name="conditions" id="conditions" />
                        <label htmlFor="conditions">Remember me</label>
                    </div>
                    <div className="right">
                        <Link to={`/`}> Forgot Password?</Link>
                    </div>
                </div>
                <button 
                    onClick={e=>{
                        e.preventDefault();
                        // handleSubmit()
                    }}
                >
                    Sign In
                </button>
                <p className='or'>or</p>
                <button  
                    className='new-acc'
                    onClick={(e)=>{
                        e.preventDefault();
                        navigate('/signup')
                    }}
                >
                    Create New Account
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default HomeSec1
