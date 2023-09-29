import React from 'react'
import './SignupPage.css'
import Footer from '../../components/footer/Footer'
import SignupNav from '../../components/SignupNav/SignupNav'
import SignUpMain from '../../components/SignupMainContent/SignUpMain'
import SignupBottom from '../../components/SignupBottom/SignupBottom'

const SignupPage = () => {
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
