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
                <div className="py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-promotional">
                    <Container>
                        <Flex className={'flex-col'}>
                            <div className="relative w-full px-4 sm:px-6 md:px-8 overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px]">
                                <h1 className='font-brad leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-foreground'>
                                    Hear from Our <span className='text-destructive'>Happy <br className="sm:hidden" />
                                    Ice Cream</span> Lovers
                                </h1>
                                <div className="relative mt-16 sm:mt-20 md:mt-24 lg:mt-28 mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto">
                                    <img 
                                        src={quata} 
                                        alt="Quote" 
                                        className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 absolute 
                                        top-1/4 left-0 sm:left-4 md:left-8 lg:left-16 xl:left-24 opacity-70'
                                    />
                                    <p className='font-apa font-medium text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 
                                       leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed 
                                       text-foreground text-center px-4 sm:px-8 md:px-12 lg:px-16 max-w-3xl mx-auto'>
                                        Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas as <br className="hidden md:block" />
                                        pernatur aut odit aut fugit, sed beatae vitae dicta ripiscing elit, sed do euismod <br className="hidden md:block" />
                                        tempor incidunt. Labore et dolore magna aliqua ut enim ad minim adipiscing elit, sed <br className="hidden md:block" />
                                        do euismod tempor incidunt aut labore.
                                    </p>
                                </div>
                                <h3 className='font-apa text-center font-bold leading-2.5 text-[18px] text-[#F83D8E]'>Kevin Andrew</h3>
                                <p className='font-apa text-[14px] leading-2.5 text-[#646464] text-center mt-2.5'>Happy Customer</p>
                                <div className="flex justify-center gap-1 sm:gap-2 mt-2.5 sm:mt-3 md:mt-4 text-chart-5">
                                    <FaStar className="text-sm sm:text-base md:text-lg lg:text-xl" />
                                    <FaStar className="text-sm sm:text-base md:text-lg lg:text-xl" />
                                    <FaStar className="text-sm sm:text-base md:text-lg lg:text-xl" />
                                    <FaStar className="text-sm sm:text-base md:text-lg lg:text-xl" />
                                    <FaStar className="text-sm sm:text-base md:text-lg lg:text-xl" />
                                </div>
                                <div className="flex justify-center mt-4 sm:mt-5 md:mt-6 lg:mt-8 gap-x-1 sm:gap-x-2 text-border">
                                    <GoDotFill className='text-lg sm:text-xl md:text-2xl lg:text-3xl' />
                                    <GoDotFill className='text-xl sm:text-2xl md:text-3xl lg:text-4xl -translate-y-1 sm:-translate-y-1.5 md:-translate-y-2 text-destructive' />
                                    <GoDotFill className='text-lg sm:text-xl md:text-2xl lg:text-3xl' />
                                    <GoDotFill className='text-lg sm:text-xl md:text-2xl lg:text-3xl' />
                                </div>
                                {/* Left side decorative images - positioned responsively */}
                                <img 
                                    src={bolda1} 
                                    alt="Decorative Ice Cream" 
                                    className='absolute h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[70px] md:w-[70px] lg:h-[100px] lg:w-[100px] 
                                    top-[20%] left-[5%] sm:left-[10%] md:left-[15%] md:top-[10%] lg:left-[20%] transition-transform hover:scale-110 duration-300' 
                                />
                                <img 
                                    src={bolda2} 
                                    alt="Decorative Ice Cream" 
                                    className='absolute h-[35px] w-[35px] sm:h-[45px] sm:w-[45px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] 
                                    top-[50%] left-[2%]  md:left-[8%] lg:left-[12%] transition-transform hover:scale-110 duration-300' 
                                />
                                <img 
                                    src={bolda3} 
                                    alt="Decorative Ice Cream" 
                                    className='absolute h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[55px] md:w-[55px] lg:h-[75px] lg:w-[75px] 
                                    top-[60%] left-[8%] sm:left-[4%] md:left-[5%] lg:left-[5%] transition-transform hover:scale-110 duration-300' 
                                />
                                <img 
                                    src={bolda4} 
                                    alt="Decorative Ice Cream" 
                                    className='absolute h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[65px] md:w-[65px] lg:h-[85px] lg:w-[85px] 
                                    top-[70%] left-[10%] sm:left-[15%] md:left-[12%] lg:left-[15%] transition-transform hover:scale-110 duration-300' 
                                />
                                
                                {/* Right side decorative images - positioned responsively */}
                                <img 
                                    src={bolda5} 
                                    alt="Decorative Ice Cream" 
                                    className='absolute h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[70px] md:w-[70px] lg:h-[90px] lg:w-[90px] 
                                    top-[20%] right-[5%] sm:right-[10%] md:right-[15%] md:top-[10%] lg:right-[20%] transition-transform hover:scale-110 duration-300' 
                                />
                                <img 
                                    src={bolda6} 
                                    alt="Decorative Ice Cream" 
                                    className='absolute h-[35px] w-[35px] sm:h-[45px] sm:w-[45px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] 
                                    top-[50%] right-[2%] sm:right-[6%] md:right-[8%] lg:right-[12%] transition-transform hover:scale-110 duration-300' 
                                />
                                <img 
                                    src={bolda7} 
                                    alt="Decorative Ice Cream" 
                                    className='absolute h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[55px] md:w-[55px] lg:h-[75px] lg:w-[75px] 
                                    top-[60%] right-[8%] sm:right-[4%] md:right-[5%] lg:right-[5%] transition-transform hover:scale-110 duration-300' 
                                />
                                <img 
                                    src={bolda8} 
                                    alt="Decorative Ice Cream" 
                                    className='absolute h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[65px] md:w-[65px] lg:h-[85px] lg:w-[85px] 
                                    top-[70%] right-[10%] sm:right-[15%] md:right-[12%] lg:right-[15%] transition-transform hover:scale-110 duration-300' 
                                />
                            </div>
                        </Flex>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default ReviewPart
