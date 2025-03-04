import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaArrowRight } from "react-icons/fa";

const EmailPart = () => {
    return (
        <>
            <div className="bg-[#E8E8E8] py-5">
                <Container>
                    <Flex className={"flex-col"}>
                        <div className="w-full">
                            <h3 className='font-brad text-2xl text-[#0F0200] text-center leading-16 '>Sign up For <span className='text-[#F83D8E]'> Exclusive Deals </span>
                                <br /> and Updates</h3>

                            <p className='font-apa leading-7 text-[10px]  text-[#646464]  text-center '>Get 10% off your next order and stay updated with our latest offers.</p>
                        </div>
                        <div className="items-center flex justify-center gap-2 mt-5 ">
                            <input type="text" placeholder='Enter Your Email Address' className='rounded-md outline-none bg-white px-3 py-1 text-[14px] font-apa' />
                            <button className='bg-[#F83D8E] flex items-center gap-2 py-1 px-4 rounded-4xl text-white font-apa  text-[10px] shadow-md transition-all duration-300 hover:shadow-[0_5px_15px_rgba(248,61,142,0.6)]'>
                                Subscribe <FaArrowRight />

                            </button>
                        </div>
                        <div className="flex items-center gap-2 mt-5 justify-center -ml-20">
                            <input type="radio" name="checkbox" id="checkbox" className='rounded-full outline-none bg-[#E8E8E8] h-3 w-3 text-[14px] font-apa' />
                            <label htmlFor="checkbox" className='text-[#646464] font-apa text-[10px]'>I have read and agree to the <span className='text-[#F83D8E] underline'>Privacy Policy</span></label>
                            
                        </div>
                    </Flex>
                </Container>
            </div>

        </>
    )
}

export default EmailPart