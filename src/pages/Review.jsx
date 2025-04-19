import React from 'react';
import Container from '../component/Container';
import review from '../assets/img/rexiew.png';
import reviewImg1 from '../assets/review/review img 1.png';
import reviewImg2 from '../assets/review/review img 2.png';
import reviewImg3 from '../assets/review/review img 3.png';
import reviewImg4 from '../assets/review/review img 4.png';
import reviewImg5 from '../assets/review/review img 5.png';
import reviewImg6 from '../assets/review/review img 6.png';
import reviewImg7 from '../assets/review/review img 7.png';
import { FaStar } from 'react-icons/fa6';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Review = () => {
    // Review Data
    const reviewData = [
        {
            reviewImg: reviewImg1,
            name: 'Kevin Andrew',
            position: 'Happy Client',
        },
        {
            reviewImg: reviewImg2,
            name: 'Peri  James',
            position: 'Happy Client',
        },
        {
            reviewImg: reviewImg3,
            name: 'Naurth Reough',
            position: 'Happy Client',
        },
        {
            reviewImg: reviewImg4,
            name: 'Jenifer',
            position: 'Happy Client',
        },
        {
            reviewImg: reviewImg5,
            name: 'James',
            position: 'Happy Client',
        },
        {
            reviewImg: reviewImg6,
            name: 'Elizzabeth',
            position: 'Happy Client',
        },
        {
            reviewImg: reviewImg7,
            name: 'Russel',
            position: 'Happy Client',
        },
    ];

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
        <main>
            <div className="py-10 dark:bg-gray-900">
                <Container>
                    <div className="pt-10 px-5">
                        <h1 className="text-center text-[#0F0200] dark:text-white font-brad text-2xl">
                            Hear From Our <span className="text-[#F83D8E]">Gelato</span> <br /> Enthusiasts
                        </h1>
                        <p className="text-[#646464] font-apa text-[16px] text-center dark:text-gray-300 mt-2">
                            Read testimonials from those who have enjoyed our artisan gelato.
                        </p>
                    </div>
                    <div className="slider-container mt-6">
                        <Slider {...settings}>
                            {reviewData.map((item, index) => (
                                <div key={index} className="px-2 transform transition-transform hover:scale-95">
                                    <div className="rounded-[10px] p-3 dark:bg-gray-800 border-2 border-b-[#F83D8E]">
                                        <img src={review} alt="Review Background" className="" />
                                        <p className="dark:text-gray-300 text-[#646464] font-apa text-[16px] mt-3.5">
                                            "Quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                                        </p>
                                        <div className="flex mt-4">
                                            <div className="w-1/5 mr-2">
                                                <img src={item.reviewImg} alt={item.name} className="rounded-full w-full" />
                                            </div>
                                            <div className="w-4/5">
                                                <div className="flex text-[#FFC045] gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar key={i} />
                                                    ))}
                                                </div>
                                                <h3 className="font-apa text-2xl text-[#F83D8E] font-bold mb-1">
                                                    {item.name}
                                                </h3>
                                                <p className="dark:text-gray-300 text-[#646464] font-apa text-[16px]">
                                                    {item.position}
                                                </p>
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
    );
};

export default Review;
