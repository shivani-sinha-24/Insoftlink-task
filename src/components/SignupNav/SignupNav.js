import React, { useState } from 'react'
import './SignupNav.css'

const SignupNav = () => {
    const [showDD,setShowDD]=useState(false)
  return (
    <div className='signup-nav'>
        <div className="nav-first">
            <div className="left">
                <div className="item">
                    <img src="https://www.actpal.com/Content_V2/assets/icons/new/light-icons/shipment-address.svg" alt="" />
                    <div className="img-txt">
                        <p>Deliver to</p>
                        <p>Choose Address</p>
                    </div>
                </div>
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
                <div><i class="fa-solid fa-ticket"></i><span>My Tickets</span></div>
                <div><i class="fa-solid fa-headset"></i><span>Support</span></div>
                <div><i class="fa-solid fa-circle-question"></i><span>Ask Your Question</span></div>
            </div> 
        }
        <div className="nav-second">
            <div className="left">
                <div className="item">
                    <img src="https://www.actpal.com/Content_V2/assets/img/actpal_logo.svg" alt="" />
                </div>
                <div className="item">
                    <form action="">
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        <input type="text" placeholder='Search' />
                    </form>
                </div>
            </div>
            <div className="right">
                <div className="item">Home</div>
                <div className="item">Shop</div>
                <div className="item">Login</div>
                <div className="item">Signup</div>
            </div>
        </div>
    </div>
  )
}

export default SignupNav
