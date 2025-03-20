import React, { useState } from 'react';
import Container from './Container';
import Flex from './Flex';
import Menu from './Menu';
import logo from '../assets/img/logo.png';
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/theme-toggle';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:py-1 bg-white dark:bg-gray-900 border-b-2 border-[#F83D8E]">
      <Container>
        <Flex className={"justify-center items-center w-full relative"}>
          <div className='lg:hidden flex items-center gap-5 w-full justify-between py-3'>
            <img src={logo} alt="logo" className=''/>
            <button className='lg:hidden' onClick={() => setOpen(!open)}>
              {open ? (
                <IoCloseOutline className='text-2xl text-[#F83D8E]' />
              ) : (
                <CiMenuFries className='text-2xl text-[#F83D8E]' />
              )}
            </button>
          </div>

          {open && (
            <div className="w-full top-full left-0 z-50 backdrop-blur-sm gap-5 absolute py-7 flex flex-col items-center lg:hidden">
              <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg py-5 px-10 rounded-xl">
                <div className="flex justify-center mb-4">
                  <ThemeToggle />
                </div>
                <Menu className={"flex flex-col items-center gap-y-5"}>
                  <Link to={"/"}>
                    <li className='text-xl text-[#0F0200] dark:text-white leading-4 font-apa hover:text-2xl hover:text-[#F83D8E] dark:hover:text-[#F83D8E] duration-300'>Home</li>
                  </Link>
                  <Link to={"/shop"}>
                    <li className='text-xl text-[#0F0200] dark:text-white leading-4 font-apa hover:text-2xl hover:text-[#F83D8E] dark:hover:text-[#F83D8E] duration-300'>Shop</li>
                  </Link>
                  <li className='text-xl text-[#0F0200] dark:text-white leading-4 font-apa hover:text-2xl hover:text-[#F83D8E] dark:hover:text-[#F83D8E] duration-300'>About</li>
                  <li className='text-xl text-[#0F0200] dark:text-white leading-4 font-apa hover:text-2xl hover:text-[#F83D8E] dark:hover:text-[#F83D8E] duration-300'>Blog</li>
                  <li className='text-xl text-[#0F0200] dark:text-white leading-4 font-apa hover:text-2xl hover:text-[#F83D8E] dark:hover:text-[#F83D8E] duration-300'>Faq's</li>
                </Menu>
                <button className='bg-[#F83D8E] flex items-center gap-2 py-4 px-6 rounded-full text-white font-apa font-bold text-lg shadow-md transition-all duration-300 hover:shadow-[0_5px_15px_rgba(248,61,142,0.6)] dark:hover:shadow-[0_5px_15px_rgba(248,61,142,0.8)] mt-4'>
                  Contact Us <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          )}

          <div className='hidden lg:flex items-center gap-14 py-3 w-full justify-between'>
            <img src={logo} alt="logo" className=''/>
            <Menu className={"hidden lg:flex items-center gap-12"}>
              <Link to={"/"}>
                <li className='text-[16px] text-[#0F0200] dark:text-white font-apa leading-4 hover:text-[#F83D8E] dark:hover:text-[#F83D8E]'>Home</li>
              </Link>
              <Link to={"/shop"}>
                <li className='text-[16px] text-[#0F0200] dark:text-white font-apa leading-4 hover:text-[#F83D8E] dark:hover:text-[#F83D8E]'>Shop</li>
              </Link>
              <li className='cursor-pointer text-[16px] text-[#0F0200] dark:text-white font-apa leading-4 hover:text-[#F83D8E] dark:hover:text-[#F83D8E]'>About</li>
              <li className='cursor-pointer text-[16px] text-[#0F0200] dark:text-white font-apa leading-4 hover:text-[#F83D8E] dark:hover:text-[#F83D8E]'>Blog</li>
              <li className='cursor-pointer text-[16px] text-[#0F0200] dark:text-white font-apa leading-4 hover:text-[#F83D8E] dark:hover:text-[#F83D8E]'>Faq's</li>
            </Menu>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex gap-5 text-2xl text-[#0F0200] dark:text-white">
                <CiSearch />
                <BsBag />
              </div>
              <button className='bg-[#F83D8E] flex items-center gap-2 py-4 px-6 rounded-full text-white font-apa font-bold text-lg shadow-md transition-all duration-300 hover:shadow-[0_5px_15px_rgba(248,61,142,0.6)] dark:hover:shadow-[0_5px_15px_rgba(248,61,142,0.8)] lg:py-3 lg:px-4 lg:text-base lg:text-wrap'>
                Contact Us <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
