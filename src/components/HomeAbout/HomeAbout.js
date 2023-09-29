import React from 'react'
import './HomeAbout.css'
import { aboutUs } from '../../data/data'

const HomeAbout = () => {
  return (
    <div className='home-about'>
      <h2>Learn About Us</h2>
      <h3>We Are Different</h3>
      <div className="abouts">
        {
            aboutUs?.map(detail=> <div key={Number(Math.random()+new Date().getMilliseconds())} className="about">
                <div className="left">
                    <img src={detail?.img} alt="" />
                </div>
                <div className="right">
                    <p className="name">{detail?.name}</p>
                    <p>{detail?.content}</p>
                </div>
            </div> )
        }
      </div>
    </div>
  )
}

export default HomeAbout
