import React from 'react'
import Container from './Container'
import Flex from './Flex'
import ice from '../assets/img/Link.png'
import girl from '../assets/img/Item 2.png'
import pink from '../assets/img/Item 1.png'
import kon from '../assets/img/Item.png'
import bati from '../assets/img/Figure.png'
const PromotionalPart = () => {
  return (
    <>
    <main>
        <div className='bg-lasat  bg-no-repeat py-5 bg-center bg-cover'>
        <Container>
            <Flex className={'flex-col'}>
                <div className="text-center w-full">
                    <h3 className='font-brad text-2xl leading-16 text-[#0F0200] m-auto'>Follow Us on <span className='text-[#F83D8E]'>Instagram</span></h3>
                    <p className='font-apa  leading-7 text-[#646464]'>Join our Instagram community for updates, special deals, and more!</p>
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-5 mt-5">
                    <img src={ice} alt={ice} className='h-[100px] w-[100px]'/>
                    <img src={kon} alt={kon}  className='h-[100px] w-[100px]'/>
                    <img src={girl} alt={girl}  className='h-[100px] w-[100px]'/>
                    <img src={bati} alt={bati}  className='h-[100px] w-[100px]'/>
                    <img src={pink} alt={pink}  className='h-[100px] w-[100px]'/>
                </div>
            </Flex>
        </Container>
        </div>
    </main>
    </>
  )
}

export default PromotionalPart