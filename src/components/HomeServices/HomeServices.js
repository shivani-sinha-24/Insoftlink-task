import React from 'react'
import './HomeServices.css'
import { services } from '../../data/data'

const HomeServices = () => {
  return (
    <div className='home-services'>
        <p className='h1'>Our Services</p>
        <p className='h2'>
            Equip your modern teams with the essential tools and
            strategies necessary to propel their companies toward growth.
        </p>
        <div className="services">
            {
                services?.map(service=> <div key={Number(Math.random()+new Date().getMilliseconds())} className="service-card">
                    <p className='name'>{service?.name}</p>
                    <p className='content'>{service?.content}</p>
                    <button>Comming Soon</button>
                </div> )
            }
        </div>
    </div>
  )
}

export default HomeServices
