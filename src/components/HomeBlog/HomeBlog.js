import React from 'react'
import './HomeBlog.css'
import { homeBlogs } from '../../data/data'

const HomeBlog = () => {
  return (
    <div className='home-blog'>
      <div className="top">
            <div className="left">
                <p>Our Blog</p>
            </div>
            <div className="right">
                <button>View All Post</button>
            </div>
        </div>
        <p>Latest blog posts</p>
        <p>Equip your modern teams with the essential tools and strategies necessary to propel their companies toward growth.</p>
        <div className="blogs">
            {
                homeBlogs?.map(blog=> <div key={Number(Math.random()+new Date().getMilliseconds())} className="blog">
                    <img src={blog?.img} alt="" />
                    <div className="b-details">
                        <div className="type">{blog?.type} <i className="fa-solid fa-arrow-right"></i></div>
                        <div className="heading">{blog?.heading}</div>
                        <div className="detail">{blog?.detail}</div>
                    </div>
                </div> )
            }
        </div>
    </div>
  )
}

export default HomeBlog
