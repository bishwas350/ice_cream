import React from 'react'
import Container from './Container'
import Flex from './Flex'
import choco from '../assets/img/choco.png'
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import left from '../assets/img/left-ice.png'
const Card = () => {
    return (
        <>
            <div className="py-10" style={{
                background: "linear-gradient(90deg, hsla(300, 43%, 89%, 1) 8%, hsla(206, 54%, 97%, 1) 43%, hsla(23, 62%, 93%, 1) 64%, hsla(184, 56%, 95%, 1) 87%)"
            }} >
                <Container>
                    <img src={left} alt="" className=''/>
                    <div className="pt-10">
                        <h1 className='font-brad text-[#0F0200] text-2xl text-center'>Our <span className='text-[#F83D8E]'>Classic</span> Favorites</h1>
                        <p className='text-[10px] leading-5 font-apa text-[#646464] text-center'>Check out our top products that our customers love.</p>
                    </div>
                    <Flex className={'flex-wrap justify-center gap-5'}>
                        <div className="p-3 w-[155px] h-[263px] bg-white rounded-sm shadow-md md:w-[200px] md:h-[320px] lg:w-[250px] lg:h-[350px]">
                            <img src={choco} alt={choco} className='w-[150px] rounded-sm md:w-[180px] lg:w-[220px]' />
                            <div className="flex gap-1">
                                <h1 className='font-apa font-bold text-[10px] leading-4 transform translate-y-4 md:text-[12px] lg:text-[14px]'>Chocolate <br />
                                    Brownie Sundae</h1>
                                <FaStar className='transform translate-y-5 text-[#FBAB2A] text-[10px] md:text-[12px] lg:text-[14px]' />
                                <p className='text-[#0F0200] font-semibold text-[10px] transform translate-y-5 md:text-[12px] lg:text-[14px]'>4.9/5</p>
                            </div>
                            <p className='text-[10px] text-[#646464] font-apa leading-3 mt-5 md:text-[12px] lg:text-[14px]'>Rich chocolate ice cream with
                                chunks of brownie.</p>
                            <Flex className={'justify-between mt-1'}>
                                <h1 className='text-[#F83D8E] text-[14px] font-bold font-apa md:text-[16px] lg:text-[18px]'>$5.49</h1>
                                <div className="bg-[#683292] rounded-full h-6 w-6 flex items-center justify-center md:h-8 md:w-8 lg:h-10 lg:w-10">
                                    <IoCartOutline className='text-white' />
                                </div>
                            </Flex>
                        </div>
                        <div className="p-3 w-[155px] h-[263px] bg-white rounded-sm shadow-md md:w-[200px] md:h-[320px] lg:w-[250px] lg:h-[350px]">
                            <img src={choco} alt={choco} className='w-[150px] rounded-sm md:w-[180px] lg:w-[220px]' />
                            <div className="flex gap-1">
                                <h1 className='font-apa font-bold text-[10px] leading-4 transform translate-y-4 md:text-[12px] lg:text-[14px]'>Chocolate <br />
                                    Brownie Sundae</h1>
                                <FaStar className='transform translate-y-5 text-[#FBAB2A] text-[10px] md:text-[12px] lg:text-[14px]' />
                                <p className='text-[#0F0200] font-semibold text-[10px] transform translate-y-5 md:text-[12px] lg:text-[14px]'>4.9/5</p>
                            </div>
                            <p className='text-[10px] text-[#646464] font-apa leading-3 mt-5 md:text-[12px] lg:text-[14px]'>Rich chocolate ice cream with
                                chunks of brownie.</p>
                            <Flex className={'justify-between mt-1'}>
                                <h1 className='text-[#F83D8E] text-[14px] font-bold font-apa md:text-[16px] lg:text-[18px]'>$5.49</h1>
                                <div className="bg-[#683292] rounded-full h-6 w-6 flex items-center justify-center md:h-8 md:w-8 lg:h-10 lg:w-10">
                                    <IoCartOutline className='text-white' />
                                </div>
                            </Flex>
                        </div>
                        <div className="p-3 w-[155px] h-[263px] bg-white rounded-sm shadow-md md:w-[200px] md:h-[320px] lg:w-[250px] lg:h-[350px] hidden md:block">
                            <img src={choco} alt={choco} className='w-[150px] rounded-sm md:w-[180px] lg:w-[220px]' />
                            <div className="flex gap-1">
                                <h1 className='font-apa font-bold text-[10px] leading-4 transform translate-y-4 md:text-[12px] lg:text-[14px]'>Chocolate <br />
                                    Brownie Sundae</h1>
                                <FaStar className='transform translate-y-5 text-[#FBAB2A] text-[10px] md:text-[12px] lg:text-[14px]' />
                                <p className='text-[#0F0200] font-semibold text-[10px] transform translate-y-5 md:text-[12px] lg:text-[14px]'>4.9/5</p>
                            </div>
                            <p className='text-[10px] text-[#646464] font-apa leading-3 mt-5 md:text-[12px] lg:text-[14px]'>Rich chocolate ice cream with
                                chunks of brownie.</p>
                            <Flex className={'justify-between mt-1'}>
                                <h1 className='text-[#F83D8E] text-[14px] font-bold font-apa md:text-[16px] lg:text-[18px]'>$5.49</h1>
                                <div className="bg-[#683292] rounded-full h-6 w-6 flex items-center justify-center md:h-8 md:w-8 lg:h-10 lg:w-10">
                                    <IoCartOutline className='text-white' />
                                </div>
                            </Flex>
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Card