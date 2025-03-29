import  { useEffect, useState } from 'react'
import { CiShoppingCart } from "react-icons/ci"; ``
import IceCream from '../assets/img/choco.png'
import { FaStar } from "react-icons/fa";
import { BsGrid, BsListUl } from "react-icons/bs";
import Flex from './Flex';
import Container from './Container';

import { Link } from 'react-router-dom';
import { Productdata } from './Productdata';
import { useCart } from './CartContext';
const ShopCard = () => {

    const {addToCart} = useCart()
    // Scroll to top when the component loads
   
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);


    const indexLastProduct = currentPage * productsPerPage;
    const indexFirstProduct = indexLastProduct - productsPerPage;
    const currentProducts = Productdata.slice(indexFirstProduct, indexLastProduct);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };
    return (
        <>
            <main className="py-8">
                <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                    <Container>
                        {/* View Toggle Buttons */}
                        <div className="flex justify-between items-center mb-6 px-4">
                            <h2 className="text-2xl font-bold dark:text-white">Our Products</h2>
                            <div className="flex space-x-4">
                                <button
                                    className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-[#683292] text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'} transition-all duration-300`}
                                    onClick={() => setViewMode('grid')}
                                >
                                    <BsGrid className="text-xl" />
                                </button>
                                <button
                                    className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-[#683292] text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'} transition-all duration-300`}
                                    onClick={() => setViewMode('list')}
                                >
                                    <BsListUl className="text-xl" />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row p-4 gap-6">
                            {/* Sidebar/Filter Section */}
                            <div className="w-full md:w-[25%] mb-4 md:mb-0">
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm transition-colors duration-300">
                                    <h3 className="text-lg font-bold mb-4 dark:text-white">Filter Products</h3>

                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2 dark:text-white">Categories</h4>
                                        <div className="space-y-2">
                                            
                                            <div className="flex items-center">
                                                <input type="checkbox" id="cones" className="mr-2" />
                                                <label htmlFor="cones" className="text-gray-700 dark:text-gray-300">Cones</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="checkbox" id="cups" className="mr-2" />
                                                <label htmlFor="cups" className="text-gray-700 dark:text-gray-300">Cups</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="checkbox" id="sundaes" className="mr-2" />
                                                <label htmlFor="sundaes" className="text-gray-700 dark:text-gray-300">Sundaes</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2 dark:text-white">Price Range</h4>
                                        <input type="range" min="0" max="10" step="0.5" className="w-full" />
                                        <div className="flex justify-between mt-1">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">$0</span>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">$10</span>
                                        </div>
                                    </div>

                                    <button className="w-full bg-[#683292] hover:bg-[#7c3eab] text-white py-2 px-4 rounded-md transition-colors duration-300">
                                        Apply Filters
                                    </button>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="w-full md:w-[75%]">
                                <div className={`${viewMode === 'grid' ? 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4' : 'flex flex-col gap-4'}`}>
                                    {currentProducts.map((item, index) => (
                                        <div key={index} className={`rounded-[10px] bg-white dark:bg-gray-800 p-4 shadow-sm transition-colors duration-300`}>
                                            <div className={`${viewMode === 'list' ? 'flex items-center' : ''}`}>
                                                <div className={`${viewMode === 'list' ? 'w-1/4 pr-4' : 'flex justify-center mb-4'}`}>
                                                    <img src={item.img} alt={item.title} className={`${viewMode === 'grid' ? 'h-[200px] w-full' : 'h-[120px]'} object-contain transition-all duration-300`} />
                                                </div>
                                                <div className={`${viewMode === 'list' ? 'w-3/4' : ''}`}>
                                                    <div className="flex justify-between items-center mb-2">
                                                        <div className="w-[70%]">
                                                            <Link to={`/products/${item.id}`}>
                                                                <h2 className='font-bold font-apa text-lg leading-6 dark:text-white transition-colors duration-300'>{item.title.length > 20
                                                                    ? `${item.title.slice(0, 10)}...`
                                                                    : item.title}</h2>
                                                            </Link>
                                                        </div>
                                                        <div className="w-[30%]">
                                                            <Flex className={'justify-end items-center'}>
                                                                <FaStar className='text-[#FBAB2A] mr-1' />
                                                                <span className='text-[#0F0200] dark:text-white font-semibold font-apa transition-colors duration-300'>{item.rating}</span>
                                                            </Flex>
                                                        </div>
                                                    </div>
                                                    <p className='text-[#646464] dark:text-gray-400 font-apa transition-colors duration-300 mt-2 mb-3'>{item.discription.length > 20
                                                        ? `${item.discription.slice(0, 10)}...`
                                                        : item.discription}</p>
                                                    <div className="flex items-center">
                                                        <div className="w-1/2">
                                                            <span className='font-apa font-bold text-lg text-[#F83D8E]'>${item.price}</span>
                                                        </div>
                                                        <div className="w-1/2">
                                                            <Flex className={'justify-end'}>
                                                                <button onClick={()=> addToCart(item)} className="bg-[#683292] hover:bg-[#7c3eab] p-3 rounded-full transition-colors duration-300">
                                                                    <CiShoppingCart className='text-white text-xl' />
                                                                </button>
                                                            </Flex>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5 mb-5 ">
                            {
                                Array.from({ length: Math.ceil(Productdata.length / productsPerPage) }, (_, i) => (
                                    <button key={i} onClick={() => paginate(i + 1)} className={`px-4  py-2 mx-1 ${currentPage === i + 1 ? "bg-[#683292] text-white rounded-[5px]" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded-[5px]"} `}>
                                        {i + 1}
                                    </button>
                                ))
                            }
                        </div>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default ShopCard

