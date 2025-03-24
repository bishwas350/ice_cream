import React, { useState, useEffect, useRef } from 'react';
import Container from './Container';
import Flex from './Flex';
import CountUp from 'react-countup';

const CounterPart = () => {
    const [counter, setCounter] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setCounter(true);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    return (
        <>
            <main className="bg-gradient-to-r from-pink-100 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
                <div>
                    <Container>
                        <div className="mb-5 pt-5" ref={counterRef}>
                            <h1 className="text-[#0F0200] text-2xl text-center dark:text-[#ffffee] font-brad">
                                Our <span className="text-[#F83D8E]">Statistics</span>
                            </h1>
                            <p className="text-[#646464] text-center dark:text-gray-300 font-apa">
                                What makes us special through our impressive statistics.
                            </p>
                        </div>
                        <Flex className="flex-wrap gap-4 justify-center pb-5">
                            <div className="bg-[#ffffee] dark:bg-gray-800 rounded-[10px] p-4 border-b-2 border-[#F83D8E]">
                                <div className="text-center">
                                    <h1 className='font-brad text-2xl text-[#0F0200] dark:text-[#ffffee]'>
                                        {counter ? <CountUp end={91} duration={5} start={0} delay={0} /> : "0"} <span className='text-[#F83D8E]'>+</span>
                                    </h1>
                                    <p className="font-apa text-[#646464] dark:text-gray-300">Awards Win</p>
                                </div>
                            </div>
                            <div className="bg-[#ffffee] dark:bg-gray-800 rounded-[10px] p-4 border-b-2 border-[#F83D8E]">
                                <div className="text-center">
                                    <h1 className='font-brad text-2xl text-[#0F0200] dark:text-[#ffffee]'>{counter ? <CountUp end={95} duration={5} start={0} delay={0} /> : "0"} <span className='text-[#F83D8E]'>%</span></h1>
                                    <p className="font-apa text-[#646464] dark:text-gray-300">Satisified Clients</p>
                                </div>
                            </div>
                            <div className="bg-[#ffffee] dark:bg-gray-800 rounded-[10px] p-4 border-b-2 border-[#F83D8E]">
                                <div className="text-center">
                                    <h1 className='font-brad text-2xl text-[#0F0200] dark:text-[#ffffee]'>{counter ? <CountUp end={48} duration={5} start={0} delay={0} /> : "0"} <span className='text-[#F83D8E]'>+</span></h1>
                                    <p className="font-apa text-[#646464] dark:text-gray-300">Years of<br className='md:hidden'/> Experience</p>
                                </div>
                            </div>
                            <div className="bg-[#ffffee] dark:bg-gray-800 rounded-[10px] p-4 border-b-2 border-[#F83D8E]">
                                <div className="text-center">
                                    <h1 className='font-brad text-2xl text-[#0F0200] dark:text-[#ffffee]'>{counter ? <CountUp end={143} duration={5} start={0} delay={0} /> : "0"} <span className='text-[#F83D8E]'>+</span></h1>
                                    <p className="font-apa text-[#646464] dark:text-gray-300">Employees Working</p>
                                </div>
                            </div>
                        </Flex>
                    </Container>
                </div>
            </main>
        </>
    );
};

export default CounterPart;
