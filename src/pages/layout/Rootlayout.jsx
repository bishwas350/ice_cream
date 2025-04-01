import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import { ThemeProvider } from '../../components/theme-provider'
import Breadcrumb from '../../component/Breadcrumb'

const Rootlayout = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header/>
        <Breadcrumb/>
        <Outlet/>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default Rootlayout
