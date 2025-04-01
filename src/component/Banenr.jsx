import React from 'react'
import Flex from './Flex'
import Container from './Container'
import ice from '../assets/img/ice_creamImg.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="box py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-pink-100 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
            <Container>
                <Flex className="flex-col md:flex-row justify-between items-center gap-6 md:gap-8 lg:gap-12">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <Flex>
                            <div className="px-4 md:px-6 lg:px-10 pb-8 md:pb-0">
                                <h1 className='font-brad leading-5 md:leading-6 lg:leading-7 text-[20px] md:text-[24px] lg:text-[28px] text-[#0F0200] dark:text-white mb-1 md:mb-2 transition-colors duration-300'>
                                    <span className='w-10 md:w-12 lg:w-14 h-0.5 md:h-1 bg-purple-600 inline-block items-center mr-2'></span>
                                    Welcome to The
                                </h1>
                                <h1 className='font-brad text-[#212529] dark:text-white text-3xl md:text-4xl lg:text-5xl leading-tight transition-colors duration-300'>
                                    Classic <span className='text-[#F83D8E]'>Ice <br className="md:hidden"/> Cream</span> Parlor
                                </h1>
                                <p className='text-[13px] md:text-[15px] lg:text-[18px] text-[#0F0200] dark:text-gray-300 font-apa leading-5 md:leading-6 lg:leading-7 mt-4 md:mt-6 lg:mt-8 max-w-md transition-colors duration-300'>
                                    Savor the taste of traditional ice cream made with love and
                                    quality ingredients. Our recipes have been perfected over generations.
                                </p>
                                <button className='text-[12px] md:text-[14px] lg:text-[16px] bg-[#683292] flex items-center gap-2 py-2 md:py-2.5 lg:py-3 px-4 md:px-5 lg:px-6 rounded-full mt-5 md:mt-6 lg:mt-8 mb-3 hover:shadow-[0_5px_15px_rgba(104,50,146,0.6)] dark:hover:shadow-[0_5px_15px_rgba(104,50,146,0.8)] hover:bg-[#7c3dac] shadow-md transition-all duration-300 font-apa font-semibold leading-4 text-white'>
                                    Browse Our Classic Flavors <FaLongArrowAltRight className="text-sm md:text-base lg:text-lg" />
                                </button>
                            </div>
                        </Flex>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
                        <img 
                            src={ice} 
                            alt="Ice Cream" 
                            className='w-[180px] sm:w-[220px] md:w-[280px] lg:w-[350px] xl:w-[400px] -mt-[30px] sm:-mt-[40px] md:-mt-[50px] lg:-mt-[60px] transform hover:scale-105 transition-transform duration-300'
                        />
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Banner;
