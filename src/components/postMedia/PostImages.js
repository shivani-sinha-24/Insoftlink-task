import React, { useEffect, useState } from 'react';
import './PostImages.css';
import axios from 'axios';

const PostImages = () => {

    const [imgNum,setImgNum] = useState(4)
    const leftImg = imgNum - 5
    const [conditionalClasses,setConditionalClasses] = useState()

    // const getData = async() => {
    //     const res = await axios.get("https://schoolaura.com/api/attendance/getAttendance?Student_Id=1&date=2023-08", {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     })
    // }
    
    // useEffect(() => {
    //     getData()
    //   }, []);
      
    useEffect(()=>{
        if(imgNum == 1 && imgNum > 0){
            setConditionalClasses("top-images one")
        }else if(imgNum == 2){
            setConditionalClasses("top-images two")
        }else if(imgNum == 3){
            setConditionalClasses("top-images three")
        }else if(imgNum == 4){
            setConditionalClasses("top-images four")
        }else if(imgNum >= 5){
            setConditionalClasses("top-images five")
        }
    },[imgNum])

  return (
    <>
    {
        imgNum > 0 &&
        <div className='post-images'>
        <div className={conditionalClasses}>
            <div
            className="image"
            style={{
                backgroundImage:
                'url(https://actpalprodbucket.s3.amazonaws.com/Member/5/Group-Media/GroupProfile/173/202309260151580173_915.jpg)',
            }}
            ></div>
            <div
            className="image"
            style={{
                backgroundImage:
                'url(https://actpalprodbucket.s3.amazonaws.com/Member/5/Group-Media/GroupProfile/173/202309260151580173_915.jpg)',
            }}
            ></div>
            <div
            className="image"
            style={{
                backgroundImage:
                'url(https://actpalprodbucket.s3.amazonaws.com/Member/5/Group-Media/GroupProfile/173/202309260151580173_915.jpg)',
            }}
            ></div>
            <div
            className="image"
            style={{
                backgroundImage:
                'url(https://actpalprodbucket.s3.amazonaws.com/Member/5/Group-Media/GroupProfile/173/202309260151580173_915.jpg)',
            }}
            ></div>
            <div
            className="image"
            style={{
                backgroundImage:
                'url(https://actpalprodbucket.s3.amazonaws.com/Member/5/Group-Media/GroupProfile/173/202309260151580173_915.jpg)',
            }}
            >
                {
                    imgNum > 5 &&
                    <p>+ <span>{leftImg}</span></p>
                }
            </div>
        </div>
        </div>
    }
    </>
  )
};

export default PostImages;
