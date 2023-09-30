import React from 'react'
import './Testimonials.css'
import { testimonials } from '../../data/data'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  // console.log('fffffff')
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1200 }, // xl screen
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1199.99, min: 992 }, // lg screen
          items: 1,
        },
        mobile: {
          breakpoint: { max: 991.99, min: 768 }, //md screen
          items: 1,
        },
        mobile: {
          breakpoint: { max: 767.99, min: 375 }, //sm screen
          items: 1,
        },
        mobile: {
          breakpoint: { max: 374.99, min: 100 },  //xs screen
          items: 1,
        }
    }
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
        <p className='heading'>Testimonials</p>
        <Carousel 
            arrows={false}
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
            customLeftArrow={<div className="arrow arrow-left custom-left-arrow " >
            <i className="fa-solid fa-lg fa-arrow-left"></i>
            </div>}
            customRightArrow={<div className="arrow arrow-right custom-right-arrow " >
            <i className="fa-solid fa-lg fa-arrow-right"></i>
            </div>}
        >
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
        </Carousel>
        <div className="arrows">
            <customLeftArrow/>
            <customRightArrow/>
        </div>
    </div>
  )
}

export default Testimonials
