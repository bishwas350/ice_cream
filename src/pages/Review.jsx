import React from 'react'
import Container from '../component/Container'
import review from '../assets/img/rexiew.png'
import thobra from '../assets/img/review img 1.png'
import { FaStar } from "react-icons/fa6"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Review = () => {

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
    }
    return (
        <main>
            <div className="py-10 dark:bg-gray-900">
                    <Container>
                        <div className="pt-10 pl-5 pr-5">
                            <h1 className='text-center text-[#0F0200] dark:text-white font-brad text-2xl'>Hear From Our <span className='text-[#F83D8E]'> Gelato</span> <br />
                                Enthusiasts</h1>
                            <p className='text-[#646464] font-apa text-[16px] text-center dark:text-gray-300 mt-2'>Read testimonials from those who have enjoyed our artisan gelato.</p>
                        </div>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {[1, 2, 3].map((_, index) => (
                                    <div key={index} className="px-2">
                                        <div className="rounded-[10px] p-3 dark:bg-gray-800 border-2 border-b-[#F83D8E]">
                                            <div>
                                                <img src={review} alt="" />
                                                <p className='dark:text-gray-300 text-[#646464] font-apa text-[16px] mt-3.5'>
                                                    Quisuam est rui dolorem ipsum rui do sit
                                                    amet, consectetur, adipise velit seu non
                                                    numquam eiusm temora incidunt aut
                                                    labore siner...
                                                </p>
                                                <div className="flex">
                                                    <div className="w-[20%] mr-2">
                                                        <img src={thobra} alt="" />
                                                    </div>
                                                    <div className="w-[80%]">
                                                        <div className="flex text-[#FFC045] gap-2">
                                                            {[...Array(5)].map((_, i) => (
                                                                <FaStar key={i} />
                                                            ))}
                                                        </div>
                                                        <div>
                                                            <h3 className='font-apa text-2xl text-[#F83D8E] font-bold mb-2'>
                                                                Kevin Andrew
                                                            </h3>
                                                            <p className='dark:text-gray-300 text-[#646464] font-apa text-[16px]'>
                                                                Happy Client
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Container>
                </div>
            </main>
    )
}

export default Review