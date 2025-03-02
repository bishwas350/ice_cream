import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from '../assets/img/logo.png'
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Menu from './Menu';
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";


const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" py-5">

      <Container>
        <Flex className={"justify-center items-center w-full"}>
          <div className="">
            <div className="flex gap-10 lg:hidden  ">
              {/* Mobile menu */}
              <img src={logo} alt={logo} className=''/>
              <button className='lg:hidden' onClick={() => setOpen(!open)}>
                {open ? <IoCloseOutline className=' text-2xl text-[#F83D8E]' /> : <CiMenuFries className='text-2xl text-[#F83D8E]' />
                }
              </button>
            </div>
            {open && (
              <div className="  bg-backdrop:blur-lg gap-5 z-50 py-7 flex flex-col items-center lg:hidden">
                <Menu className={"flex flex-col items-center gap-y-5 "}>
                  <li className='text-xl text-[#0F0200] leading-4 font-apa  hover:text-2xl hover:text-[#F83D8E] duration-300'>Home </li>
                  <li className='text-xl text-[#0F0200] leading-4 font-apa  hover:text-2xl hover:text-[#F83D8E] duration-300'>About Us</li>
                  <li className='text-xl text-[#0F0200] leading-4 font-apa  hover:text-2xl hover:text-[#F83D8E] duration-300'>Pages</li>
                  <li className='text-xl text-[#0F0200] leading-4 font-apa  hover:text-2xl hover:text-[#F83D8E] duration-300'>Blog</li>
                  <li className='text-xl text-[#0F0200] leading-4 font-apa  hover:text-2xl hover:text-[#F83D8E]' duration-300>Faq's</li>
                </Menu>
                <button className='bg-[#F83D8E] flex items-center gap-2 py-4 px-6 rounded-full text-white font-apa font-bold text-lg shadow-md transition-all duration-300 hover:shadow-[0_5px_15px_rgba(248,61,142,0.6)]'>
                  Contact Us <FaLongArrowAltRight />
                </button>
              </div>
            )}
            {/* Mobile menu */}
          </div>
          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-10 justify-between">
            <div className="">
              <img src={logo} alt={logo} />
            </div>
            <Menu className={"flex gap-x-5"}>
              <li className='cursor-pointer text-[16px] text-[#0F0200] font-apa leading-4  hover:text-[#F83D8E]'>home</li>
              <li className='cursor-pointer text-[16px] text-[#0F0200] font-apa leading-4  hover:text-[#F83D8E]'>About Us</li>
              <li className='cursor-pointer text-[16px] text-[#0F0200] font-apa leading-4  hover:text-[#F83D8E]'>Pages</li>
              <li className='cursor-pointer text-[16px] text-[#0F0200] font-apa leading-4  hover:text-[#F83D8E]'>Blog</li>
              <li className='cursor-pointer text-[16px] text-[#0F0200] font-apa leading-4  hover:text-[#F83D8E]'>Faq's</li>
            </Menu>
            <div className="flex gap-5 text-2xl">
            <CiSearch />
            <BsBag />
            </div>
            <button className='bg-[#F83D8E] flex items-center gap-2 py-4 px-6 rounded-full text-white font-apa font-bold text-lg shadow-md transition-all duration-300 hover:shadow-[0_5px_15px_rgba(248,61,142,0.6)] lg:py-3 lg:px-4 lg:text-base lg:text-wrap'>
              Contact Us <FaLongArrowAltRight />
            </button>
          </div>
          {/* Desktop menu  */}
        </Flex>
      </Container>
    </div>
  )
}

export default Header