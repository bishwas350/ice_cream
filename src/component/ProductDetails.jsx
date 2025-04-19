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
import { useCart } from './CartContext';

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { id } = useParams();
  const relatedProducts = Productdata.filter(item =>
    item.id !== parseInt(id)
  ).slice(0, 6); // Get first 6 related products


  // access cart fintion 
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
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
                <Cbutton product={product}  initialCount={1}/>

                <button onClick={()=> addToCart(product)} className="bg-[#F83D8E] flex items-center gap-2 py-3 px-8 rounded-md text-white font-apa font-bold text-lg shadow-md transition-all duration-300 hover:shadow-[0_5px_15px_rgba(248,61,142,0.6)] dark:hover:shadow-[0_5px_15px_rgba(248,61,142,0.8)] lg:py-3 lg:px-4 lg:text-base lg:text-wrap">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div >
            <ul className="flex flex-wrap gap-3 mt-7 mb-[42px] text-[#0F0200] font-apa font-bold dark:text-white ">
              <li className="py-3"><button className={`cursor-pointer ${activeTab === 0 ? 'text-[#F83D8E]  border-b-4 border-[#F83D8E]' : ''}`} onClick={() => setActiveTab(0)}>Description</button></li>
              <li className="py-3"><button className={`cursor-pointer ${activeTab === 1 ? 'text-[#F83D8E] border-b-4 border-[#F83D8E]' : ''}`} onClick={() => setActiveTab(1)}>Additional info</button></li>
              <li className="py-3"><button className={`cursor-pointer ${activeTab === 2 ? 'text-[#F83D8E] border-b-4 border-[#F83D8E]' : ''}`} onClick={() => setActiveTab(2)}>Reviews (5)</button></li>
            </ul>

            {/* Description Tab Content  */}
            {
              activeTab == 0 && (
                <div className="">Indulge in the rich, creamy taste of our Classic Vanilla Ice Cream, made from premium vanilla beans and fresh dairy. Each scoop delivers a smooth and velvety texture, perfectly balanced with a touch of natural sweetness. Whether enjoyed on its own or paired with your favorite desserts, this classic treat is sure to satisfy your cravings.

                </div>
              )
            }

            {/* Additional info Tab Content  */}
            {
              activeTab === 1 && (
                <div className="">
                  <ul className='text-[#646464] dark:text-gray-400 font-apa space-y-4'>
                    <li>Ingredients: Fresh milk, sugar, vanilla extract, cream, stabilizers</li>
                    <li>Allergen Info: Contains dairy
                    </li>
                    <li>Storage: Keep frozen at -18°C (0°F)

                    </li>
                    <li>
                      Net Weight: 500ml
                    </li>
                    <li>
                      Shelf Life: 6 months from the manufacturing date
                    </li>
                  </ul>
                </div>
              )
            }

            {/* Reviews Tab Content  */}
            {
              activeTab === 2 && (
                <div className="">
                  <ul className='text-[#646464] dark:text-gray-400 font-apa space-y-4'>
                    <li>
                      ⭐⭐⭐⭐⭐ Emily R. (Verified Buyer)
                      "This vanilla ice cream is an absolute delight! The texture is incredibly smooth, and the flavor is rich without being overly sweet. It tastes like real vanilla beans, not artificial flavoring. Definitely a staple in my freezer!"
                    </li>
                    <li>
                      ⭐⭐⭐⭐⭐ Michael T. (Verified Buyer)
                      "Hands down, the creamiest and most flavorful vanilla ice cream I’ve ever had! It melts beautifully in your mouth and pairs perfectly with brownies or apple pie. Will be buying again!"
                    </li>
                    <li>
                      ⭐⭐⭐⭐ Sophia L. (Verified Buyer)
                      "Loved the taste, but I wish the container was bigger! It’s so good that it disappears too quickly in my household. Highly recommend if you’re a vanilla lover!"
                    </li>
                    <li>
                      ⭐⭐⭐⭐⭐ David P. (Verified Buyer)
                      "Perfect for making milkshakes! I used this with some fresh strawberries, and it blended into the smoothest, most flavorful shake ever. The quality is top-notch!"
                    </li>
                    <li>
                      ⭐⭐⭐⭐⭐ Olivia M. (Verified Buyer)
                      "I was skeptical at first, but this ice cream exceeded my expectations. It has a perfect balance of creaminess and a deep vanilla flavor. Tastes just like homemade!"
                    </li>
                  </ul>
                </div>
              )
            }

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