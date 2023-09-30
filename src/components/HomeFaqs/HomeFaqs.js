import React, { useState } from 'react'
import './HomeFaqs.css'

const HomeFaqs = () => {
    const [answer1,setanswer1] = useState(true)
    const [answer2,setanswer2] = useState(false)

  return (
    <div className='home-faqs'>
        <p className="heading">Frequently asked questions</p>
        <p className='sub-heading'>Everything you need to know about the product and billing.</p>
        <div className="faqs">
            <div className="faq">
                <div className="top" onClick={()=>{setanswer1(!answer1);answer2&&setanswer2(false)}}>
                    <p className='question'>Why ACTPAL?</p>
                    <span>
                    {
                        answer1
                        ?
                        <i className="fa-solid fa-plus"></i>
                        :
                        <i className="fa-solid fa-minus"></i>
                    }
                    </span>
                </div>
                {
                    answer1 
                    &&
                    <div className="answer">
                        <p>ACTPAL stands out as a leading e-commerce platform in the market, offering a distinctive blend of social media and ecommerce functionalities. This unique fusion enables you to sell across various channels via specialized groups, communities, and even geolocations. This remarkable versatility positions ACTPAL as the ultimate destination for both e-commerce merchants and consumers worldwide.</p>                
                    </div>
                }
            </div>
            <div className="faq">
                <div className="top" onClick={()=>{setanswer2(!answer2);answer1&&setanswer1(false)}}>
                    <p className='question'>What are the benefits of using ACTPAL?</p>
                    <span>
                    {
                        answer2
                        ?
                        <i className="fa-solid fa-plus"></i>
                        :
                        <i className="fa-solid fa-minus"></i>
                    }
                    </span>
                </div>
                {
                    answer2
                    &&
                    <div className="answer">
                        <p>ACTPAL is a dynamic and rapidly expanding platform, distinguished by its unique fusion of social media and ecommerce. With a global user base, it caters not only to business endeavors but also to personal interactions. Beyond being a shopping hub, ACTPAL offers an array of engaging features.</p>
                        <p>It serves as a hub for connecting with friends, family, and individuals worldwide who are part of the ACTPAL community. Connecting is simple – users can send friend requests or search directly using profile names or email addresses.</p>
                        <p>ACTPAL extends the opportunity for users to express and showcase their talents, relive memories, share experiences, stay updated on news, and even offer personal reviews on their purchases. Within this framework, authorized individuals can interact through likes, shares, and comments.</p>
                        <p>Moreover, users can establish distinct communities within which a diverse array of groups can be formed. These groups revolve around specific categories, providing users a platform to express their thoughts on particular subjects or agendas.</p>
                    </div>
                }
            </div>
        </div>
        <button className='view'>View All FAQ's</button>
        <div className="get-in-touch">
            <div className="images">
                <div className="img1">
                    <img src="https://www.actpal.com/Content_v2/assets/img/webp/faq_3.webp" alt="" />
                </div>
                <div className="img2">
                    <img src="https://www.actpal.com/Content_v2/assets/img/webp/faq_2.webp" alt="" />
                </div>
                <div className="img3">
                    <img src="https://www.actpal.com/Content_v2/assets/img/webp/faq_1.webp" alt="" />
                </div>
            </div>
            <p className="p1">Still have questions?</p>
            <p className="p2">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <button>Get In Touch</button>
        </div>
    </div>
  )
}

export default HomeFaqs
