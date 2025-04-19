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
        <div className='py-10 bg-promotional dark:bg-promotional-dark' style={{
        background: "var(--gradient-promotional, linear-gradient(90deg, hsla(300, 43%, 89%, 1) 8%, hsla(206, 54%, 97%, 1) 43%, hsla(23, 62%, 93%, 1) 64%, hsla(184, 56%, 95%, 1) 87%))",
      }}>
        <Container>
            <Flex className={'flex-col'}>
                <div className="text-center w-full">
                    <h3 className='font-brad text-2xl leading-16 text-foreground m-auto'>Follow Us on <span className='text-[#F83D8E] dark:text-[#FF6EB0]'>Instagram</span></h3>
                    <p className='font-apa leading-7 text-muted-foreground'>Join our Instagram community for updates, special deals, and more!</p>
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