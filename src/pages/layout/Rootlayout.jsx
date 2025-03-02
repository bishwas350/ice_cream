import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/Footer'
import Header from '../../component/Header'

const Rootlayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Rootlayout