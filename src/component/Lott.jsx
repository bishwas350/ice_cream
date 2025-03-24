import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../assets/img/Animation1.json'
const Lott = () => {
  return (
    <>
    <Lottie animationData={animationData} loop ={true} />
    </>
  )
}

export default Lott