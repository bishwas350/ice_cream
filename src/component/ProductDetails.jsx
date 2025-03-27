import React from 'react'
import Container from './Container'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Productdata } from './Productdata';
import Cbutton from './Cbutton';

const ProductDetails = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();

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
      </Container>
    </main>
  )
}

export default ProductDetails