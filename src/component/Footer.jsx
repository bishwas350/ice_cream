import React from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from '../assets/img/Group 2.png'
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[url("./assets/img/Section.png")] bg-cover bg-no-repeat py-8 md:py-12 lg:py-16 relative'>
      <div className="absolute inset-0 bg-transparent dark:bg-gray-900/80"></div>

      <Container>
        <Flex className={"flex-col lg:flex-row items-center justify-center lg:justify-between xl:justify-around gap-8 md:gap-10 lg:gap-4 px-4 md:px-6 lg:px-8 relative z-10"}>
          <div className="mb-8 lg:mb-0">
            <img src={logo} alt="Ice Cream Logo" className="w-32 md:w-36 lg:w-40 h-auto" />
          </div>
          <div className="w-full lg:w-auto">

            <Flex className={'flex-col md:flex-row gap-8 md:gap-12 lg:gap-16'}>
              <div className="w-full md:w-auto">
                <h3 className='text-xl md:text-2xl font-apa font-semibold leading-6 text-white text-center mb-4'>Navigation</h3>
                <ul className='text-center text-[14px] md:text-base font-apa text-[#CFB6E2] dark:text-gray-300 flex flex-col gap-2'>
                  <li className="flex items-center justify-center"><span className='text-[#F83D8E] text-3xl md:text-4xl mr-2'>•</span>Home</li>
                  <li className="flex items-center justify-center"><span className='text-[#F83D8E] text-3xl md:text-4xl mr-2'>•</span>About</li>
                  <li className="flex items-center justify-center"><span className='text-[#F83D8E] text-3xl md:text-4xl mr-2'>•</span>Shop</li>
                  <li className="flex items-center justify-center"><span className='text-[#F83D8E] text-3xl md:text-4xl mr-2'>•</span>Product</li>
                  <li className="flex items-center justify-center"><span className='text-[#F83D8E] text-3xl md:text-4xl mr-2'>•</span>Blog</li>
                  <li className="flex items-center justify-center"><span className='text-[#F83D8E] text-3xl md:text-4xl mr-2'>•</span>Contact</li>
                </ul>
              </div>
              <div className="w-full md:w-auto flex flex-col gap-8">
                <div className="flex flex-col items-center">
                  <IoLocationSharp className='text-2xl md:text-3xl text-white dark:text-white mb-2' />
                  <h3 className='text-[#CFB6E2] text-xl md:text-2xl font-apa mb-2'>Address</h3>
                  <div>
                    <p className='text-[#CFB6E2] dark:text-gray-300 text-sm md:text-base font-apa text-center max-w-[200px]'>
                      121 King Street Melbourne, 3000, Australia
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <MdEmail className='text-2xl md:text-3xl text-white dark:text-white mb-2' />
                  <h3 className='text-[#CFB6E2] text-xl md:text-2xl font-apa mb-2'>Email</h3>
                  <div>
                    <p className='text-[#CFB6E2] text-sm md:text-base font-apa text-center'>info@icedelights.com</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-full md:w-auto">
                <FaPhone className='text-2xl md:text-3xl text-white dark:text-white mb-2' />
                <h3 className='text-white text-xl md:text-2xl font-apa font-bold mb-2'>+5689 2589 6325</h3>
                <p className='text-[#CFB6E2] text-sm md:text-base font-apa text-center'>Got Questions? Call us 24/7</p>
              </div>
            </Flex>
          </div>
          
        </Flex>
      </Container>
    </div>
  )
}

export default Footer