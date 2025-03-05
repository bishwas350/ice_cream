import React from 'react'
import Flex from './Flex'
import Container from './Container'
import ice from '../assets/img/ice_creamImg.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const Banenr = () => {
    return (
        <>
            <div className="box  py-10 " style={{
                background: "linear-gradient(90deg, hsla(300, 43%, 89%, 1) 8%, hsla(206, 54%, 97%, 1) 43%, hsla(23, 62%, 93%, 1) 64%, hsla(184, 56%, 95%, 1) 87%)"
            }}>

                <Container>
                <Flex className={"justify-between items-center"}>
                <div className="w-1/2">
                    <Flex>
                        <div className="pl-4">
                            <h1 className='font-brad leading-5 text-[20px] text-[#0F0200] '><span className='w-10 h-0.5 bg-purple-600 inline-block items-center '></span>Welcome to The</h1>
                            <h1 className='font-brad  text-[#212529] text-4xl'>Classic <span className='text-[#F83D8E]'>Ice <br/>
                            Cream</span>Parlor</h1>
                            <p className='text-[13px] text-[#0F0200] font-apa leading-4 mt-4'>Savor the taste of traditional ice cream made with love and
                            quality ingredients.</p>
                            <button className='text-[10px] bg-[#683292] flex items-center py-1 px-2 rounded-full mt-3 mb-3  hover:shadow-[0_5px_15px_rgba(104,50,146,0.6)] shadow-md transition-all duration-300 font-apa font-semibold leading-3.5 text-white'>Browse Our Classic Flavors <FaLongArrowAltRight />
                            </button>
                        </div>
                    </Flex>
                </div>
                <div className="1/2 flex items-center">
                <img src={ice} alt={ice} className=' w-[150px] -mt-[60px] md:w-[300px]'/>
                </div>
                </Flex>
                </Container>
            </div>
        </>
    )
}

export default Banenr


