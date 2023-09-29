import React from 'react'
import './Testimonials.css'
import { testimonials } from '../../data/data'

const Testimonials = () => {
  return (
    <div className='home-testimonial'>
        <div className="top">
            <div className="left">
                <p>Don't simply take our statement at face value.</p>
            </div>
            <div className="right">
                <button>Get Started</button>
            </div>
        </div>
        <p>Testimonials</p>
        <div className="testimonials">
            {
                testimonials?.map(detail=> <div key={Number(Math.random()+new Date().getMilliseconds())} className="testimonial-card" style={{background:`url(${detail?.img})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',padding:'15px',textAlign:'center'}}>
                    <div className="text">
                        {detail?.detail && <div className="detail">{detail?.detail}</div> }
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half"></i>
                        </div>
                        <div className="name">{detail?.name}</div>
                        <div className="agency">{detail?.agency}</div>
                    </div>
                </div> )
            }
        </div>
        <div className="testimonials">
            {
                testimonials?.map(detail=> <div key={Number(Math.random()+new Date().getMilliseconds())} className="testimonial-card" style={{background:`url(${detail?.img})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',padding:'15px',textAlign:'center'}}>
                    <div className="text">
                        {detail?.detail && <div className="detail">{detail?.detail}</div> }
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half"></i>
                        </div>
                        <div className="name">{detail?.name}</div>
                        <div className="agency">{detail?.agency}</div>
                    </div>
                </div> )
            }
        </div>
        <div className="testimonials">
            {
                testimonials?.map(detail=> <div key={Number(Math.random()+new Date().getMilliseconds())} className="testimonial-card" style={{background:`url(${detail?.img})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',padding:'15px',textAlign:'center'}}>
                    <div className="text">
                        {detail?.detail && <div className="detail">{detail?.detail}</div> }
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half"></i>
                        </div>
                        <div className="name">{detail?.name}</div>
                        <div className="agency">{detail?.agency}</div>
                    </div>
                </div> )
            }
        </div>
        <div className="testimonials">
            {
                testimonials?.map(detail=> <div key={Number(Math.random()+new Date().getMilliseconds())} className="testimonial-card" style={{background:`url(${detail?.img})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',padding:'15px',textAlign:'center'}}>
                    <div className="text">
                        {detail?.detail && <div className="detail">{detail?.detail}</div> }
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half"></i>
                        </div>
                        <div className="name">{detail?.name}</div>
                        <div className="agency">{detail?.agency}</div>
                    </div>
                </div> )
            }
        </div>
        <div className="arrows">
            <i className="fa-solid fa-arrow-left"></i>
            <i className="fa-solid fa-arrow-right"></i>
        </div>
    </div>
  )
}

export default Testimonials
