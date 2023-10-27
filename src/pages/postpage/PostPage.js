import React, { useEffect, useState } from 'react'
import './PostPage.css'
import { groupDetails } from '../../data/data'
import axios from 'axios'
import PostImages from '../../components/postMedia/PostImages'

const PostPage = () => {
  
  useEffect(() => {
    document.title = 'Share your thougths, events, celebration with ACTPAL family';
  });

  const [viewMore,setViewMore] = useState(false)
  const [viewCmntMore,setViewCmntMore] = useState(false)
  const [posts,setPosts] = useState()
  const [toggleCmnt,setToggleCmnt] = useState(false)


const apiUrl = 'https://schoolaura.com/api/attendance/getAttendance?Student_Id=1&date=2023-08';

// Make a GET request
axios
  .get(apiUrl)
  .then((response) => {
    // Handle the data returned from the API
    console.log(response.data);
  })
  .catch((error) => {
    // Handle any errors that occurred during the request
    console.error('Axios error:', error);
  });
  
  return (
    <div className='post-page'>
      <div className="left">
        <div className="top">
          <p className="h4">Oversized Quilted Parka</p>
          <p className="p1">Burnt Orange/White/Black</p>
          <p className="h6">$129</p>
        </div>
        <div className="bottom">
          <div className="icon">
            <img src="https://actpal.com/Content_V2/assets/icons/Heart-light.svg" alt="" />
          </div>
          <div className="image">
            <img src="https://actpal.com/Content_V2/assets/img/sony-50mm-camera.png" alt="" />
            <p className='p1'>Sony - 50mm f/1.8 Optical Lens For Sony E-Mount</p>
            <p className="p2">$279 Shop Now</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="posts">
          <div className="search-post">
            <form action="">
              <input type="text" placeholder="Search..."/>
              <button>
                <img src="https://actpal.com/Content_V2/assets/icons/new/search.svg" alt="" />
              </button>
            </form>
            <div className="reset"><i class="fa-solid fa-arrow-rotate-right"></i> Reset Filter</div>
          </div>
          <div className="post">
            
            {/* <video width="640" height="360" controls>
                <source src="https://www.youtube.com/watch?v=uEDhGX-UTeI&list=RDuEDhGX-UTeI&start_radio=1" type="video/mp4"/>
                <source src="https://www.youtube.com/watch?v=uEDhGX-UTeI&list=RDuEDhGX-UTeI&start_radio=1" type="video/ogg"/>
                Your browser does not support the video tag.
            </video> */}
            {/* <iframe
              width="640"
              height="360"
              // src="https://www.youtube.com/embed/uEDhGX-UTeI"
              src={video}
              frameborder="0"
              allowfullscreen
              title="YouTube Video"
            ></iframe> */}
            {/* <iframe width="640" height="360" src="https://www.youtube.com/embed/kC4LeXtBVzs?si=wNeHzfs5koPwnpKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            <div className="post-owner">
              <div className="owner-left">
                <div className="owner-image">
                  <img src='https://actpalprodbucket.s3.amazonaws.com/Member/5/Group-Media/GroupProfile/172/202309260150510172_312.jpg' className="profile"/>
                  <i class="fa-regular fa-circle-user fa-lg"></i>
                </div>
                <div className="owner-detail">
                  <div className="detail">
                    <p className="p1">Melissa M </p>
                    <i class="fa-solid fa-caret-right"></i>
                    <p className="p2"> Fashion Design</p>
                  </div>
                  <div className="detail">
                    <p className='p1'>Not Defined </p>
                    <i class="fa-solid fa-circle fa-2xs" style={{color: "#d8d8da"}}></i>
                    <p className='p2'> Oct 08, 2023</p>
                  </div>
                </div>
              </div>
              <div className="owner-right">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
            <div className="post-content">
              <div className="p-title">
              Antelope Canyon at Page
              </div>
                {
                  viewMore
                  ?
                  <div className="p-desciption">
                  👗 Dressing for success is an art, and the right business attire can empower you to conquer any professional challenge. From tailored blazers to timeless accessories, let's explore the essentials that radiate confidence and competence in the workplace. 💪✨
                  <br />
                  ✨ Power of Tailoring: Invest in well-fitted pieces that exude sophistication. A perfectly tailored blazer or pencil skirt can transform your look and command respect.
                  <br />
                  👠 Classic Footwear Choices: Opt for elegant pumps or loafers to complete your ensemble. Comfort and style should go hand in hand, allowing you to stride into any room with confidence.
                  <br />
                  💼 Structured Handbags: A chic, structured handbag is both a fashion statement and a practical accessory. Choose neutral tones for versatility or a pop of color for personality.
                  <br />
                  💄 Polished Makeup and Hairstyle: Keep makeup understated yet refined. A clean, professional hairstyle adds the finishing touch to your business look.
                  <br />
                  🌟 Own Your Style: Remember, your attire is an extension of your professional identity. Embrace your unique style while adhering to the expectations of your workplace.
                  <br />
                  💬 What's your go-to power piece for the perfect business look? Share your style tips or questions in the comments below! Let's inspire each other to conquer the professional world with confidence. 💼✨
                  <br />
                  #BusinessStyle #ProfessionalElegance #ConfidenceInFashion #CareerEmpowerment #DressForSuccess #WomenInBusiness #ACTPALfashion #ACTPALFashionDesign
                  </div>
                  :
                  <div className="p-desciption">
                  👗 Dressing for success is an art, and the right business attire can empower you to conquer any professional challenge. From tailored blazers to timeless accessories, let's explore the essentials that radiate confidence and competence in the workplace. 💪✨
                  <br />
                  </div>
                }
              <div className="toggle-view" onClick={()=>setViewMore(!viewMore)}>
                <i>
                  Read{viewMore?" Less":" More"}
                </i>
              </div>
              <div className="p-location">
              <i class="fa-solid fa-location-pin" style={{color:'black'}}></i> United States, Arizona, Lake Havasu City , Antelope Canyon at Page
              </div>
              <div className="post-media">
                <PostImages/>
              </div>
            </div>
            <div className="likes-comment-section">
              <div className="numbers">
                <div className="likes"><i class="fa-solid fa-thumbs-up"></i>1</div>
                <div className="comments">2 Comments</div>
              </div>
              <div className="buttons">
                <div className="like-btn"><i class="fa-solid fa-thumbs-up"></i> Like</div>
                <div className="like-btn" onClick={()=>setToggleCmnt(!toggleCmnt)}><i class="fa-solid fa-comment-dots"></i> Comments</div>
              </div>
              {
                toggleCmnt &&
                <div className="comments-sec">
                  <div className="comment-detals">
                    <div className="owner-image">
                      <img src='https://actpalprodbucket.s3.amazonaws.com/Member/5/Group-Media/GroupProfile/172/202309260150510172_312.jpg' className="profile"/>
                    </div>
                    {
                      viewCmntMore?
                      <div className='cmnt-and-user'>
                      <div className="cmnt-by">John Smith</div>
                      <div className="cmnt">
                      In the bustling world of corporate power and influence, Sarah, a rising executive, had a secret to her success—the mastery of the perfect business look. With unwavering precision, she selected tailored suits that exuded confidence and dressed in colors that conveyed authority. Her meticulously chosen accessories added a touch of personality, subtly hinting at her creative side.
                      <br />
                      Each day, Sarah arrived at the office with a composed demeanor and a polished appearance, setting the tone for professionalism and competence. Her wardrobe choices were a reflection of her dedication to her career, symbolizing the harmony of style and substance.
                      <br />
                      In meetings, she effortlessly commanded attention, with her attire enhancing her magnetic presence. Colleagues admired not only her expertise but also her ability to master the art of the perfect business look—a statement of self-assurance and a powerful tool for success in the corporate world.
                      </div>
                      </div>
                      :
                      <div className='cmnt-and-user'>
                      <div className="cmnt-by">John Smith</div>
                      <div className="cmnt">
                      In the bustling world of corporate power and influence, Sarah, a rising executive, had a secret to her success—the mastery of the perfect business look. With unwavering precision, she selected tailored suits that exuded confidence and dressed in colors that conveyed authority. Her meticulously chosen accessories added a touch of personality, subtly hinting at her creative side.
                      <br />
                      </div>
                      </div>
                    }
                  </div>
                  <div className='toggle-view' onClick={()=>setViewCmntMore(!viewCmntMore)}>
                    <i>
                    Read {viewCmntMore?" Less":" More"}
                    </i>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
        <div className="groups">
          <div className="top">
            <div className="left">
              <img src="https://actpal.com/Content_V2/assets/icons/new/groups.svg" alt="" />
              <span>New Groups</span>
            </div>
            <div className="group-right">
              View All
            </div>
          </div>
          <div className="bottom">
            {
              groupDetails?.slice(0,3).map(group=><div className="group-detail">
              <div className="gleft">
                <img src={group.img} alt="" />
              </div>
              <div className="middle">
                <div className="name">{group.name}</div>
                <div className="members">{group.members} Members</div>
              </div>
              <div className="notification">{group.notification}</div>
            </div>)
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPage
