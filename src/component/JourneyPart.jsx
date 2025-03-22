import React from 'react'
import Container from './Container'
import journey from '../assets/img/journey img.png';
import { FaLongArrowAltRight } from "react-icons/fa";

const JourneyPart = () => {
    return (
        <>
            <main className="w-full">
                <div>
                    <Container>
                        <div className="bg-gradient-to-r from-pink-100 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 py-10 md:py-16 lg:pt-28 lg:pb-28 px-4 md:px-6">
                            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <img src={journey} alt="Journey" className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[590px] lg:w-[590px] object-contain" />
                                </div>
                                <div className="w-full md:w-1/2 md:ml-5 lg:ml-10 flex flex-col items-center md:items-start">
                                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-brad text-[#0F0200] dark:text-[#eeeeff] mb-4 md:mb-5 text-center md:text-left">Our <span className="text-[#F83D8E]">Journey</span> Began
                                        With a Simple Dream</h2>
                                    <p className="text-sm sm:text-base text-[#646464] font-apa dark:text-gray-300 mb-3 text-center md:text-left">Our goal is to make the best ice cream using only the finest,
                                        natural ingredients. From rich, creamy classics to adventurous
                                        new creations, every flavor is meticulously crafted in-house to
                                        ensure the highest quality and freshness.</p>
                                    <p className="text-sm sm:text-base text-[#646464] font-apa dark:text-gray-300 mb-6 text-center md:text-left">We take pride in offering a diverse range of options, including
                                        dairy-free, vegan, and gluten-free choices, so everyone can find
                                        their perfect scoop.</p>
                                    <div className="flex justify-center md:justify-start w-full">
                                        <button className="bg-[#F83D8E] flex items-center gap-2 py-3 px-5 sm:py-4 sm:px-6 rounded-full text-white font-apa font-bold text-base sm:text-lg shadow-md transition-all duration-300 hover:shadow-[0_5px_15px_rgba(248,61,142,0.6)] dark:hover:shadow-[0_5px_15px_rgba(248,61,142,0.8)]">
                                            Contact Us <FaLongArrowAltRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default JourneyPart
