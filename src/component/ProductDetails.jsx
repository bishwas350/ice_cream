import React from 'react'
import Container from './Container'
import { useParams } from 'react-router-dom'
import { productData } from './ShopCard' // Adjust path if needed
import { FaStar } from "react-icons/fa";
import { Productdata } from './Productdata';

const ProductDetails = () => {
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
            <button className="bg-[#683292] hover:bg-[#7c3eab] text-white py-3 px-8 rounded-md transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default ProductDetails