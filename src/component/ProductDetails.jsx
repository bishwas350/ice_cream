import React from 'react'
import Container from './Container'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Productdata } from './Productdata';
import Cbutton from './Cbutton';
import { CiShoppingCart } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Custom styles for slick slider
import './slick-custom.css';
import Flex from './Flex';
import { Target } from 'lucide-react';
const ProductDetails = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const relatedProducts = Productdata.filter(item =>
    item.id !== parseInt(id)
  ).slice(0, 6); // Get first 6 related products

  // Find the product with matching ID
  const product = Productdata.find(item => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-20 text-xl">
        Product not found
      </div>
    )
  }

  return (
    <main className="py-8">
      <Container>
        <div className="p-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={product.img}
                alt={product.title}
                className="w-full max-h-[500px] object-contain"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-bold mb-4 dark:text-white">{product.title}</h1>
              <div className="flex items-center mb-4">
                <FaStar className="text-[#FBAB2A] mr-1" />
                <span className="text-[#0F0200] dark:text-white font-semibold">
                  {product.rating}
                </span>
              </div>
              <p className="text-2xl font-bold text-[#F83D8E] mb-6">${product.price}</p>
              <p className="text-[#646464] dark:text-gray-400 mb-8">{product.discription}</p>
              <div className="flex gap-4 items-center">
                <Cbutton />

                <button className="bg-[#F83D8E] flex items-center gap-2 py-3 px-8 rounded-md text-white font-apa font-bold text-lg shadow-md transition-all duration-300 hover:shadow-[0_5px_15px_rgba(248,61,142,0.6)] dark:hover:shadow-[0_5px_15px_rgba(248,61,142,0.8)] lg:py-3 lg:px-4 lg:text-base lg:text-wrap">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 px-4">
          <div className="text-center mb-8">
            <h2 className='font-brad text-[#0F0200] text-2xl md:text-4xl lg:text-6xl dark:text-white transition-colors duration-300'>Related <span className='text-[#F83D8E]'>Products</span></h2>
            <p className='font-apa leading-7 text-sm text-[#646464] dark:text-gray-400 transition-colors duration-300'>Choose from some of related products</p>
          </div>
          
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={false}
            autoplaySpeed={3000}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]}
            className="related-products-slider"
          >
            {relatedProducts.map((item, index) => (
              <div key={index} className="px-4">
                <Link to={`/products/${item.id} `} target='_blank' className="block">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-48 object-contain mb-4"
                    />
                    <h3 className="text-lg font-bold text-[#0F0200] dark:text-white mb-2">{item.title}</h3>
                    <p className="text-[#646464] dark:text-gray-400 text-sm mb-4">{item.discription}</p>
                    <Flex className="justify-between items-center">
                      <span className="text-[#F83D8E] font-bold">${item.price}</span>
                      <button className="bg-[#683292] hover:bg-[#7c3eab] p-3 rounded-full transition-colors duration-300">
                        <CiShoppingCart className='text-white text-xl' />
                      </button>
                    </Flex>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </main>
  )
}

export default ProductDetails