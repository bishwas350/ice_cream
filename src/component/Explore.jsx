import React from 'react'
import Container from './Container'
import Flex from './Flex'
import cheri from '../assets/img/cheri.png'
import { FaLongArrowAltRight } from "react-icons/fa";
const Explore = () => {
    return (
        <div className="">
            <Container>
                <Flex>
                    <div className="w-1/2">
                        <img src={cheri} alt={cheri} />
                    </div>
                    <div className="w-1/2 mt-[50px] px-2 ">
                        <h1 className='font-brad text-[#0F0200] text-[20px]'>Relive the Sweet <br />
                            Memories of Classic <br />
                            <span className='text-[#F83D8E]'>Ice Creams</span></h1>
                        <p className='text-[10px] text-[#646464]'>From rich chocolate fudge to creamy vanilla sundaes,
                            discover our menu of classic ice cream creations.</p>
                        <button className='bg-[#F83D8E] flex items-center gap-2 py-1 px-2 rounded-full text-white font-apa font-semibold text-[10px] shadow-md transition-all duration-300 hover:shadow-[0_5px_15px_rgba(248,61,142,0.6)] mt-4'>
                        Explore Our Menu<FaLongArrowAltRight />
                        </button>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Explore