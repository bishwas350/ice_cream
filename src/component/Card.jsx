import './Card.css';

import IceCream from '../assets/img/choco.png'
import IceCream2 from '../assets/img/card_img.png'
import IceCream3 from '../assets/img/card_img2.png'
import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaStar } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <>
            <main style={{
                background: "linear-gradient(90deg, hsla(300, 43%, 89%, 1) 8%, hsla(206, 54%, 97%, 1) 43%, hsla(23, 62%, 93%, 1) 64%, hsla(184, 56%, 95%, 1) 87%)"
            }}>
                <Container>
                    <div className="text-center leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        <h1 className=' font-brad text-[#0F0200]'>Our <span className='text-[#F83D8E]'>Best</span> Sellers</h1>
                        <p className='font-apa leading-7 text-[10px]  text-[#646464]'>Discover the favorites that keep our customers coming back for more.</p>
                    </div>
                    <Flex className={'justify-center'}>
                        <div className="slider-container w-full px-12">
                            <Slider {...settings}>
                                <div className="px-2">
                                    <div className="rounded-[10px] bg-white p-3 items-center m-2">
                                        <div className="flex justify-center">
                                            <img src={IceCream} alt="" className='h-[250px] w-full' />
                                        </div>
                                        <div className="flex">
                                            <div className="w-[70%]">
                                                <h2 className=' font-bold font-apa  leading-6'>Chocolate Chip <br />
                                                    Cookie Cone</h2></div>
                                            <div className="w-[30%] ">
                                                <Flex className={'justify-end items-center'}>
                                                    <FaStar className='text-[#FBAB2A]' />
                                                    <span className='text-[#0F0200] font-semibold font-apa'>4.4</span>
                                                </Flex></div>
                                        </div>
                                        <p className='text-[#646464] font-apa'>Chocolate chip cookie dough <br />
                                            ice cream in a cone.</p>
                                        <div className="flex items-center">
                                            <div className="w-1/2">
                                                <span className='font-apa font-bold text-[#F83D8E]'>$4.45</span>
                                            </div>
                                            <div className="w-1/2">
                                                <Flex className={'justify-end'}>
                                                    <div className="bg-[#683292] p-3 rounded-full">
                                                        <CiShoppingCart className='text-white text-2xl '/>

                                                    </div>
                                                </Flex>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className="rounded-[10px] bg-white p-3 items-center m-2">
                                        <div className="flex justify-center">
                                            <img src={IceCream2} alt="" className='h-[250px] w-full' />
                                        </div>
                                        <div className="flex">
                                            <div className="w-[70%]">
                                                <h2 className='font-bold font-apa  leading-6'>Chocolate Chip <br />
                                                    Cookie Cone</h2></div>
                                            <div className="w-[30%] ">
                                                <Flex className={'justify-end items-center'}>
                                                    <FaStar className='text-[#FBAB2A]'/>
                                                    <span className='text-[#0F0200] font-semibold font-apa'>4.4</span>
                                                </Flex></div>
                                        </div>
                                        <p>Chocolate chip cookie dough <br />
                                            ice cream in a cone.</p>
                                        <div className="flex">
                                            <div className="w-1/2">
                                                <span className='font-apa font-bold text-[#F83D8E]'>$4.45</span>
                                            </div>
                                            <div className="w-1/2">
                                                <Flex className={'justify-end'}>
                                                    <div className="bg-[#683292] p-3 rounded-full">
                                                        <CiShoppingCart className='text-white text-2xl'/>

                                                    </div>
                                                </Flex>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className="rounded-[10px] bg-white p-3 items-center m-2">
                                        <div className="flex justify-center">
                                            <img src={IceCream3} alt="" className='h-[250px] w-full' />
                                        </div>
                                        <div className="flex">
                                            <div className="w-[70%]">
                                                <h2 className='font-bold font-apa  leading-6'>Chocolate Chip <br />
                                                    Cookie Cone</h2></div>
                                            <div className="w-[30%] ">
                                                <Flex className={'justify-end items-center'}>
                                                    <FaStar className='text-[#FBAB2A]'/>
                                                    <span className='text-[#0F0200] font-semibold font-apa'>4.4</span>
                                                </Flex></div>
                                        </div>
                                        <p>Chocolate chip cookie dough <br />
                                            ice cream in a cone.</p>
                                        <div className="flex">
                                            <div className="w-1/2">
                                                <span className='font-apa font-bold text-[#F83D8E]'>$4.45</span>
                                            </div>
                                            <div className="w-1/2">
                                                <Flex className={'justify-end'}>
                                                    <div className="bg-[#683292] p-3 rounded-full">
                                                        <CiShoppingCart className='text-white text-2xl'/>

                                                    </div>
                                                </Flex>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </Flex>
                </Container>
            </main>
        </>
    )
}

export default Card