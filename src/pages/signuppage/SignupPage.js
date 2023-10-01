import React, { useEffect } from 'react'
import './SignupPage.css'
import Footer from '../../components/footer/Footer'
import SignupNav from '../../components/SignupNav/SignupNav'
import SignUpMain from '../../components/SignupMainContent/SignUpMain'
import SignupBottom from '../../components/SignupBottom/SignupBottom'

const SignupPage = () => {
  useEffect(() => {
    // Set the document title to '/home' when the component mounts
    document.title = 'ACTPal - Signup';
  }, []);
  return (
    <div className='signup-page'>
      <SignupNav/>
      <SignUpMain/>
      <SignupBottom/>
      <Footer/> 
    </div>
  )
}

export default SignupPage
