import React from 'react'
import Container from './Container'
import Flex from './Flex'
import cheri from '../assets/img/cheri.png'
import { FaLongArrowAltRight } from "react-icons/fa";
const Explore = () => {
    return (
        <div className="">
            <Container>
                <Flex className="flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                        <img src={cheri} alt="Cherry Ice Cream" className="w-full max-w-md mx-auto" />
                    </div>
                    <div className="w-full md:w-1/2 mt-4 md:mt-[50px] px-4 md:px-6 lg:px-10">
                        <h1 className='font-brad text-[#0F0200] text-[20px] md:text-[24px] lg:text-[32px] dark:text-[#ffffee]'>Relive the Sweet <br className="md:hidden" />
                            Memories of Classic <br className="md:hidden" />
                            <span className='text-[#F83D8E]'>Ice Creams</span></h1>
                        <p className='text-[10px] md:text-[12px] lg:text-[14px] text-[#646464] mt-2 md:mt-4 max-w-md'>From rich chocolate fudge to creamy vanilla sundaes,
                            discover our menu of classic ice cream creations.</p>
                        <button className='bg-[#F83D8E] flex items-center gap-2 py-1 md:py-2 px-2 md:px-4 rounded-full text-white font-apa font-semibold text-[10px] md:text-[12px] lg:text-[14px] shadow-md transition-all duration-300 hover:shadow-[0_5px_15px_rgba(248,61,142,0.6)] mt-4 md:mt-6 mb-5'>
                            Explore Our Menu<FaLongArrowAltRight />
                            </button>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Explore