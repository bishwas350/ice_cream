import React from 'react'
import Lott from './Lott'
import Container from './Container'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const Error = () => {
    return (
        <>
            <div className="">
                <Container>
                    <div className="">
                        <Lott />
                        <Link to={"/"}>
                            <Menu className={'flex justify-center'}>
                                <button className='bg-[#F83D8E] flex items-center gap-2 py-2 px-2 rounded-[10px] text-white font-apa font-bold text-[16px] shadow-md transition-all duration-300 hover:shadow-[0_5px_15px_rgba(248,61,142,0.6)] dark:hover:shadow-[0_5px_15px_rgba(248,61,142,0.8)] lg:py-2 lg:px-2 lg:text-base lg:text-wrap mb-6'>
                                    Go to Home
                                </button>
                            </Menu>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Error