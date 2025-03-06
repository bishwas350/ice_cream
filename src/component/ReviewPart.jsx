import React from 'react'
import Container from './Container'
import Flex from './Flex'
import quata from '../assets/img/qoutes.png'
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import bolda1 from '../assets/img/bolda 1.png'
import bolda2 from '../assets/img/bolda 2png.png'
import bolda3 from '../assets/img/bolda 3.png'
import bolda4 from '../assets/img/bolda 4.png'
import bolda5 from '../assets/img/bolda 5.png'
import bolda6 from '../assets/img/bolda 6.png'
import bolda7 from '../assets/img/bolda 7.png'
import bolda8 from '../assets/img/bolda 8.png'


const ReviewPart = () => {
    return (
        <>
            <main>
                <div className="py-10 " style={{
                    background: "linear-gradient(90deg, hsla(300, 43%, 89%, 1) 8%, hsla(206, 54%, 97%, 1) 43%, hsla(23, 62%, 93%, 1) 64%, hsla(184, 56%, 95%, 1) 87%)"
                }}>
                    <Container >
                        <Flex className={'flex-col'}>
                            <div className="">
                                <h1 className=' font-brad leading-10 text-2xl text-center lg:text-6xl md:text-4xl md:leading-14 lg:leading-16'>Hear from Our <span className='text-[#F83D8E] '>Happy <br />
                                    Ice Cream</span> Lovers</h1>
                                <div className="relative mt-[138px] mb-16">
                                    <img src={quata} alt={quata} className='absolute top-[370px] left-[70px] md:left-[300px] lg:left-[400px] xl:left-[650px]' />
                                    <img src="" alt="" />
                                    <p className='font-apa font-medium leading-4 text-[10px] md:text-[15px] md:leading-5 lg:text-[20px] lg:leading-8 text-[#0F0200] text-center px-1'>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas as <br />
                                        pernatur aut odit aut fugit, sed beatae vitae dicta ripiscing elit, sed do euismod <br />
                                        tempor incidunt. Labore et dolore magna aliqua ut enim ad minim adipiscing elit, sed <br />
                                        do euismod tempor incidunt aut labore.</p>
                                </div>
                                <h3 className='font-apa text-center font-bold leading-2.5 text-[18px] text-[#F83D8E]'>Kevin Andrew</h3>
                                <p className='font-apa text-[14px] leading-2.5 text-[#646464] text-center mt-2.5'>Happy Customer</p>
                                <div className="flex justify-center gap-1 mt-2.5 text-[#FBAB2A]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className="flex justify-center mt-4 gap-x-0  text-[#E1E1E2]">
                                    <GoDotFill className='text-2xl' />
                                    <GoDotFill className='text-3xl -translate-y-2.5 text-[#F83D8E]' />
                                    <GoDotFill className='text-2xl' />
                                    <GoDotFill className='text-2xl' />

                                </div>
                                <img src={bolda1} alt={bolda1} className='absolute top-[300px]  h-[50px] w-[50px] md:left-[80px] md:h-[70px] md:w-[70px] lg:h-[100px] lg:w-[100px] lg:left-[150px]' />
                                <img src={bolda2} alt={bolda2} className='absolute top-[320px] h-[50px] w-[50px] left-[50px] md:h-[70px] md:w-[70px] md:top-[400px] md:left-[110px]' />
                                <img src={bolda3} alt={bolda3} className='h-[50px] w-[50px] absolute top-[370px] md:top-[500px] md:h-[70px] md:w-[70px] md:left-[60px]' />
                                <img src={bolda4} alt={bolda4} className='absolute h-[50px] w-[50px] top-[300px] right-[40%] md:w-[70px] md:h-[70px] md:top-[550px] md:left-[150px]' />
                                <img src={bolda5} alt={bolda5} className='absolute h-[50px] w-[50px] top-[370px] right-[40%] md:h-[70px] md:w-[70px] md:top-[300px] md:right-[80px]' />
                                <img src={bolda6} alt={bolda6} className='absolute h-[50px] w-[50px] top-[300px] right-0 md:h-[70px] md:w-[70px] md:top-[400px] md:right-0' />
                                <img src={bolda7} alt={bolda7} className='absolute h-[50px] w-[50px] top-[320px] right-[50px] md:h-[70px] md:w-[70px] md:top-[500px] md:right-[80px]' />
                                <img src={bolda8} alt={bolda8} className='absolute h-[50px] w-[50px] top-[370px] right-0 md:h-[70px] md:w-[70px]  md:top-[550px] md:-right-0' />
                            </div>
                        </Flex>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default ReviewPart