import React from 'react'
import './HomeAbout.css'
import { aboutUs } from '../../data/data'

const HomeAbout = () => {
  return (
    <div className='home-about'>
      <p className='h2'>Learn About Us</p>
      <p className='h3'>We Are Different</p>
      <div className="abouts">
        {
          aboutUs?.map(detail=> <div onClick={()=>window.location='/post'} key={Number(Math.random()+new Date().getMilliseconds())} className="about">
            <div className="left">
              <img src={detail?.img} alt="" />
            </div>
            <div className="right">
              <p className="name">{detail?.name}</p>
              <p className='content'>{detail?.content} <span>Know More</span> </p>
            </div>
          </div> )
        }
      </div>
    </div>
  )
}

export default HomeAbout
