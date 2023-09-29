import React from 'react'
import './HomeFaqs.css'

const HomeFaqs = () => {
  return (
    <div className='home-faqs'>
        <p className="heading">Frequently asked questions</p>
        <p className='sub-heading'>Everything you need to know about the product and billing.</p>
        <div className="faqs">
            <div className="faq">
                <div className="top">
                    <p className='question'>Why ACTPAL?</p>
                    <span><i className="fa-solid fa-plus"></i><i className="fa-solid fa-minus"></i></span>
                </div>
                <div className="answer">
                    <p>ACTPAL stands out as a leading e-commerce platform in the market, offering a distinctive blend of social media and ecommerce functionalities. This unique fusion enables you to sell across various channels via specialized groups, communities, and even geolocations. This remarkable versatility positions ACTPAL as the ultimate destination for both e-commerce merchants and consumers worldwide.</p>                
                </div>
            </div>
            <div className="faq">
                <div className="top">
                    <p className='question'>What are the benefits of using ACTPAL?</p>
                    <span><i className="fa-solid fa-plus"></i><i className="fa-solid fa-minus"></i></span>
                </div>
                <div className="answer">
                    <p>ACTPAL is a dynamic and rapidly expanding platform, distinguished by its unique fusion of social media and ecommerce. With a global user base, it caters not only to business endeavors but also to personal interactions. Beyond being a shopping hub, ACTPAL offers an array of engaging features.</p>
                    <p>It serves as a hub for connecting with friends, family, and individuals worldwide who are part of the ACTPAL community. Connecting is simple – users can send friend requests or search directly using profile names or email addresses.</p>
                    <p>ACTPAL extends the opportunity for users to express and showcase their talents, relive memories, share experiences, stay updated on news, and even offer personal reviews on their purchases. Within this framework, authorized individuals can interact through likes, shares, and comments.</p>
                    <p>Moreover, users can establish distinct communities within which a diverse array of groups can be formed. These groups revolve around specific categories, providing users a platform to express their thoughts on particular subjects or agendas.</p>
                </div>
            </div>
        </div>
        <button>View All FAQ's</button>
        <div className="get-in-touch">
            <div className="images"></div>
            <p className="p1">Still have questions?</p>
            <p className="p2">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <button>Get In Touch</button>
        </div>
    </div>
  )
}

export default HomeFaqs
