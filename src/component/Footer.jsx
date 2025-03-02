import React from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from '../assets/img/Group 2.png'
import add from '../assets/img/Overlay.png'
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[url("./assets/img/Section.png")] bg-cover bg-no-repeat py-5 '>

      <Container>
        <Flex className={"flex-col lg:flex-row  lg:px-4  items-center xl:justify-around  justify-center xl:p-5 lg:py-12 "}>
          <div className="">
            <img src={logo} alt={logo} />
          </div>
          <div className="">

            <Flex className={'flex-col lg:flex-row '}>
              <div className=" xl:-ml-40">
                <h3 className='text-xl font-apa font-semibold leading-6 text-white ml-10 text-center '>Navigation</h3>
                <ul className=' text-center text-[14px] font-apa text-[#CFB6E2]'>
                  <li><span className='text-[#F83D8E]  text-[50px] leading-0 -ml-4'>.</span>  Home</li>
                  <li><span className='text-[#F83D8E]  text-[50px] leading-0 -ml-4'>.</span> About</li>
                  <li><span className='text-[#F83D8E]  text-[50px] leading-0 -ml-6'>.</span>  Shop</li>
                  <li><span className='text-[#F83D8E]  text-[50px] leading-0 -ml-1'>.</span> Product</li>
                  <li><span className='text-[#F83D8E]  text-[50px] leading-0 -ml-6'>.</span> Blog</li>
                  <li><span className='text-[#F83D8E]  text-[50px] leading-0 -ml-1'>.</span>  Contact</li>
                </ul>
              </div>
              <div className="">
                <div className="lg:mr-5 justify-center mt-4 flex flex-col items-center">
                  <IoLocationSharp className='text-2xl text-white ' />
                  <h3 className='text-[#CFB6E2] text-[24px] font-apa'>Address</h3>
                  <div className=" ">

                    <p className='text-[#CFB6E2] text-[14px] font-apa text-center'>121 King Street Melbourne, 3000,
                      Australia</p>
                  </div>
                </div>
                <div className="justify-center mt-4 flex flex-col items-center">
                  <MdEmail className='text-2xl text-white' />
                  <h3 className='text-[#CFB6E2] text-[24px] font-apa'>Email</h3>
                  <div className="">
                    <p className='text-[#CFB6E2] text-[14px] font-apa text-center'>info@icedelights.com</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center mt-4 ">
                <FaPhone className='text-2xl text-white' />
                <h3 className='text-white text-2xl font-apa font-bold '>+5689 2589 6325</h3>
                <p className='text-[#CFB6E2] text-[14px] font-apa text-center'>Got Questions? Call us 24/7</p>
              </div>
            </Flex>
          </div>


        </Flex>
      </Container>
    </div>
  )
}

export default Footer