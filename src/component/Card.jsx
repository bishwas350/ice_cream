import React from 'react'
import Container from './Container'
import Flex from './Flex'
import choco from '../assets/img/choco.png'
import { FaStar } from "react-icons/fa";

const Card = () => {
    return (
        <>
            <div className="" style={{
                background: "linear-gradient(90deg, hsla(300, 43%, 89%, 1) 8%, hsla(206, 54%, 97%, 1) 43%, hsla(23, 62%, 93%, 1) 64%, hsla(184, 56%, 95%, 1) 87%)"
            }} >
                <Container>
                    <div className="pt-10">
                        <h1 className='font-brad text-[#0F0200] text-2xl text-center'>Our <span className='text-[#F83D8E]'>Classic</span> Favorites</h1>
                        <p className='text-[10px] leading-5 font-apa text-[#646464] text-center'>Check out our top products that our customers love.</p>
                    </div>
                    <Flex className={'justify-between gap-5'}>
                        <div className="p-3 w-[155px] h-[253px] bg-white rounded-sm shadow-md">
                            <img src={choco} alt={choco} className=' w-[150px] rounded-sm' />
                            <div className="flex gap-1 ">
                                <h1 className='font-apa font-bold text-[10px] leading-4 transform translate-y-4 '>Chocolate <br/>
                                    Brownie Sundae</h1>
                                    <FaStar className='transform translate-y-5 text-[#FBAB2A] text-[10px] '/>
                                    <p className='text-[#0F0200] font-semibold  text-[10px] transform translate-y-5'>4.9/5</p>

                            </div>
                            <p className='text-[10px] text-[#646464] font-apa leading-3 mt-5'>Rich chocolate ice cream with
                            chunks of brownie.</p>
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Card