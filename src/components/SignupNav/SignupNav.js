import React, { useState } from 'react'
import './SignupNav.css'
import { Link } from 'react-router-dom'

const SignupNav = () => {
    const [showDD,setShowDD]=useState(false)
    
  return (
    <div className='signup-nav'>
        <div className="nav-first">
            <div className="left">
                <Link onClick={()=>window.location='/'} className="item">
                    <img src="https://www.actpal.com/Content_V2/assets/icons/new/light-icons/shipment-address.svg" alt="" />
                    <div className="img-txt">
                        <p>Deliver to</p>
                        <p>Choose Address</p>
                    </div>
                </Link>
                <div className="item">
                    <div id="google_translate_element"></div>
                </div>
            </div>
            <div className="right">
                <div className="item">Become A Seller</div>
                <div className="item" onClick={()=>setShowDD(!showDD)}><i className="fa-solid fa-circle fa-2xs" style={{color:"#fafafa"}}></i></div>
                <div className="item" onClick={()=>setShowDD(!showDD)}>Support <i className="fa-solid fa-caret-down"></i></div>
            </div>
        </div>
        {
            showDD &&
            <div className="dropdown-nav-menu">
                <div className="menus">
                    <div className="dd-item"><span>My Ticket</span></div>
                    <div className="dd-item"><span>Support</span></div>
                    <div className="dd-item"><span>Ask Your Question</span></div>
                </div>
            </div>
        }
        <div className="nav-second">
            <div className="left">
                <Link onClick={()=>window.location='/'}  className="item">
                    <img src="https://www.actpal.com/Content_V2/assets/img/actpal_logo.svg" alt="" />
                </Link>
                <Link onClick={()=>window.location=''}  className="item">
                    <form action="">
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        <input type="text" placeholder='Search' />
                    </form>
                </Link>
            </div>
            <div className="right">
                <Link onClick={()=>window.location='/'} className="item">Home</Link>
                <Link onClick={()=>window.location='/post'} className="item">Shop</Link>
                <Link onClick={()=>window.location=''} className="item">Login</Link>
                <Link onClick={()=>window.location='/signup'} className="item">Signup</Link>
            </div>
        </div>
    </div>
  )
}

export default SignupNav
