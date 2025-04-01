import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaArrowRight } from "react-icons/fa";

const EmailPart = () => {
    return (
        <>
            <div className="bg-[#E8E8E8] dark:bg-[#252525] py-5 transition-colors duration-300">
                <Container>
                    <Flex className={"flex-col"}>
                        <div className="w-full">
                            <h3 className='font-brad text-2xl text-[#0F0200] dark:text-white text-center leading-16 transition-colors duration-300'>Sign up For <span className='text-[#F83D8E] dark:text-[#FF5A9E] transition-colors duration-300'> Exclusive Deals </span>
                                <br /> and Updates</h3>

                            <p className='font-apa leading-7 text-[10px] text-[#646464] dark:text-[#A0A0A0] text-center transition-colors duration-300'>Get 10% off your next order and stay updated with our latest offers.</p>
                        </div>
                        <div className="items-center flex justify-center gap-2 mt-5 ">
                            <input type="text" placeholder='Enter Your Email Address' className='rounded-md outline-none bg-white dark:bg-[#1E1E1E] dark:text-white dark:placeholder-gray-400 px-3 py-1 text-[14px] font-apa border-0 transition-colors duration-300' />
                            <button className='bg-[#F83D8E] dark:bg-[#FF5A9E] flex items-center gap-2 py-1 px-4 rounded-4xl text-white font-apa text-[10px] shadow-md transition-all duration-300 hover:shadow-[0_5px_15px_rgba(248,61,142,0.6)] dark:hover:shadow-[0_5px_15px_rgba(255,90,158,0.6)]'>
                                Subscribe <FaArrowRight />

                            </button>
                        </div>
                        <div className="flex items-center gap-2 mt-5 justify-center -ml-20">
                            <input 
                                type="radio" 
                                name="checkbox" 
                                id="checkbox" 
                                className='rounded-full outline-none bg-[#E8E8E8] dark:bg-[#1E1E1E] h-3 w-3 text-[14px] font-apa transition-colors duration-300' 
                            />
                            <label htmlFor="checkbox" className='text-[#646464] dark:text-[#A0A0A0] font-apa text-[10px] transition-colors duration-300'>
                                I have read and agree to the <span className='text-[#F83D8E] dark:text-[#FF5A9E] underline hover:text-[#E72D7E] dark:hover:text-[#FF8AB8] transition-colors duration-300'>Privacy Policy</span>
                            </label>
                            
                        </div>
                    </Flex>
                </Container>
            </div>

        </>
    )
}

export default EmailPart