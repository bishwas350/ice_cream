import React from 'react'
import Container from './Container'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import teamImg1 from '../assets/img/Team1.png';
import teamImg2 from '../assets/img/Team2.png';
import teamImg3 from '../assets/img/Team3.png';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const TeamsPart = () => {
    const teamData =[
        {
            teamImg:teamImg1,
            name:'Marvin Joner',
            position:'Bakery Worker',

        },
        {
            teamImg:teamImg2,
            name:'Patricia Woodrum',
            position:'Staff Worker',

        },
        {
            teamImg:teamImg3,
            name:'Hannaz Stone',
            position:'Shop Worker',

        },
    ]
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
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };
    return (
        <>
            <main className='bg-gradient-to-r from-pink-100 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300'>
                <Container>
                    <div className="pt-16 pb-12">
                        <h1 className='text-[#0F0200] font-brad text-2xl text-center dark:text-white lg:text-6xl'>Our <span className='text-[#F83D8E]'>Team</span> Members</h1>
                        <p className='text-center text-[#646464] dark:text-gray-300'>Get to know the friendly faces behind your favorite flavors.</p>
                    </div>
                    <Slider {...settings}>
                        {teamData.map((item, index)=>(
                            <div key={index} className="rounded-2xl px-4 py-4 bg-white dark:bg-gray-900 mb-14">
                            <div className=" ">
                                <img src={item.teamImg} alt="" className='rounded-full w-full'/>
                                <h3 className='font-apa text-[#212529] dark:text-gray-200 text-center text-2xl font-bold'>{item.name}</h3>
                                <p className='text-[#646464] dark:text-gray-300 font-apa text-center'>{item.position}</p>
                            </div>
                            <div className="flex justify-center gap-2 py-3">
                                <div className="rounded-full bg-[#F83D8E] inline-block p-2 dark:text-[#eeeeff] text-[#fffafa]" >
                                    <a href="#">
                                <FaFacebookF />
                                    </a>
                                </div>
                                <div className="rounded-full bg-[#F83D8E] inline-block p-2 dark:text-[#eeeeff] text-[#fffafa]">
                                <a href="#">
                                <FaInstagram />
                                </a>
                                </div>
                                <div className="rounded-full bg-[#F83D8E] inline-block p-2 dark:text-[#eeeeff] text-[#fffafa]">
                                <a href="#">
                                <FaYoutube />
                                </a>
                                </div>
                            </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </main>
        </>
    )
}

export default TeamsPart