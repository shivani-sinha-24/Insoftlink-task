import React from 'react'
import './HomeSec1.css'
import HomeNav from '../homeNav/HomeNav'
import { Link } from 'react-router-dom'

const HomeSec1 = () => {
  return (
    <div className='sec1'>
      <HomeNav/>
      <div className="welcome">
        <div className="left">
            <h1>Welcome to </h1>
            <span>
                <img src="https://www.actpal.com/Content_v2/assets/img/actpal_banner.svg" alt="" />
            </span>
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
            <form action="">
                <h3>Welcome back!</h3>
                <p>Login to your account to continue</p>
                <div className="email_input">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="email_input">
                    <label htmlFor="password">Your Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="remember">
                    <div className="left">
                        <input type="checkbox" name="conditions" id="conditions" />
                        <label htmlFor="conditions">Remember me</label>
                    </div>
                    <div className="right">
                        <Link> Forgot Password?</Link>
                    </div>
                </div>
                <button>Sign In</button>
            </form>
            <p>or</p>
            <button>Create New Account</button>
        </div>
      </div>
    </div>
  )
}

export default HomeSec1
