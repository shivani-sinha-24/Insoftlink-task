import React from 'react'
import './HomeServices.css'
import { services } from '../../data/data'

const HomeServices = () => {
  return (
    <div className='home-services'>
        <h1>Our Services</h1>
        <p>
            Equip your modern teams with the essential tools and
            strategies necessary to propel their companies toward growth.
        </p>
        <div className="services">
            {
                services?.map(service=> <div key={Number(Math.random()+new Date().getMilliseconds())} className="service-card">
                    <h3>{service?.name}</h3>
                    <p>{service?.content}</p>
                    <button>Comming Soon</button>
                </div> )
            }
        </div>
    </div>
  )
}

export default HomeServices
