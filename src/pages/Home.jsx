import React from 'react'
import Header from '../component/Header'
import PromotionalPart from '../component/PromotionalPart'
import EmailPart from '../component/EmailPart'
import ReviewPart from '../component/ReviewPart'
import Banenr from '../component/Banenr'
import Explore from '../component/Explore'

const Home = () => {
  return (
    <>
    <Banenr/>
    <Explore/>
    {/* <ReviewPart/> */}
    <EmailPart/>
    <PromotionalPart/>
    </>
    
  )
}

export default Home