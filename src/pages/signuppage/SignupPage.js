import React, { useEffect } from 'react'
import './SignupPage.css'
import SignUpMain from '../../components/SignupMainContent/SignUpMain'

const SignupPage = () => {
  
  useEffect(() => {
    // Set the document title to '/home' when the component mounts
    document.title = 'ActPal Social Network Service';
  });

  return (
    <div className='signup-page'>
      <SignUpMain/>
    </div>
  )
}

export default SignupPage
