import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaStar, FaRegHeart } from "react-icons/fa"
import { CiShoppingCart } from "react-icons/ci"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import IceCream  from '../assets/img/choco.png'
import IceCream2 from '../assets/img/card_img.png'
import IceCream3 from '../assets/img/card_img2.png'

const products = [
  {
    id: 1, image: IceCream,
    name: "Chocolate Chip Cookie Cone",
    desc: "Rich cookie dough swirled with chocolate chips in a crispy waffle cone.",
    price: "$4.45", oldPrice: "$5.99", rating: 4.4, reviews: 128,
    badge: "Best Seller", tags: ["Chocolate", "Classic"],
  },
  {
    id: 2, image: IceCream2,
    name: "Strawberry Dream Sundae",
    desc: "Fresh strawberry swirl topped with whipped cream and berry compote.",
    price: "$5.20", oldPrice: "$6.50", rating: 4.8, reviews: 94,
    badge: "New", tags: ["Fruity", "Sundae"],
  },
  {
    id: 3, image: IceCream3,
    name: "Mango Tango Sorbet",
    desc: "Tropical mango sorbet bursting with fresh fruit flavor, dairy-free.",
    price: "$3.99", oldPrice: "$4.99", rating: 4.6, reviews: 76,
    badge: "Vegan", tags: ["Fruity", "Vegan"],
  },
  {
    id: 4, image: IceCream,
    name: "Pistachio Royale Cup",
    desc: "Premium pistachio gelato with roasted nut crumble and honey drizzle.",
    price: "$5.75", oldPrice: "$7.00", rating: 4.9, reviews: 61,
    badge: "Premium", tags: ["Nutty", "Gelato"],
  },
  {
    id: 5, image: IceCream2,
    name: "Vanilla Bean Waffle Stack",
    desc: "Classic vanilla bean with caramel sauce layered in a warm waffle cup.",
    price: "$4.10", oldPrice: "$5.25", rating: 4.3, reviews: 112,
    badge: "Classic", tags: ["Vanilla", "Waffle"],
  },
  {
    id: 6, image: IceCream3,
    name: "Cookies & Cream Blizzard",
    desc: "Oreo cookie blizzard loaded with chocolate fudge and whipped cream.",
    price: "$4.85", oldPrice: "$5.99", rating: 4.7, reviews: 89,
    badge: "Fan Fav", tags: ["Chocolate", "Oreo"],
  },
]

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <FaStar
        key={i}
        className={`text-[11px] ${
          i <= Math.round(rating)
            ? "text-[#FBAB2A]"
            : "text-gray-200 dark:text-gray-600"
        } transition-colors duration-300`}
      />
    ))}
  </div>
)

const badgeColors = {
  "Best Seller": "bg-[#F83D8E]",
  "New":         "bg-[#683292]",
  "Vegan":       "bg-emerald-500",
  "Premium":     "bg-amber-500",
  "Classic":     "bg-sky-500",
  "Fan Fav":     "bg-rose-500",
}

const ProductCard = ({ product }) => {
  const { image, name, desc, price, oldPrice, rating, reviews, badge, tags } = product

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-[20px] overflow-hidden
                    border border-black/5 dark:border-white/10
                    transition-all duration-300 hover:-translate-y-2
                    hover:shadow-[0_16px_40px_rgba(248,61,142,0.15)] mx-2">

      {/* Image Area */}
      <div className="relative bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50
                      dark:from-gray-700 dark:via-gray-750 dark:to-gray-700
                      h-[200px] flex items-center justify-center overflow-hidden
                      transition-colors duration-300">

        {/* Badge */}
        <span className={`absolute top-3 left-3 z-10 text-white text-[10px] font-semibold
                          tracking-wide px-3 py-1 rounded-full ${badgeColors[badge] ?? "bg-[#F83D8E]"}`}>
          {badge}
        </span>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full
                           bg-white/80 dark:bg-gray-700/80 border border-black/10 dark:border-white/10
                           flex items-center justify-center
                           hover:scale-110 transition-all duration-200">
          <FaRegHeart className="text-[#F83D8E] text-sm" />
        </button>

        <img
          src={image}
          alt={name}
          className="h-[185px] w-full object-cover transition-transform duration-300
                     group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="p-4 transition-colors duration-300">

        {/* Rating row */}
        <div className="flex items-center gap-1.5 mb-2">
          <StarRating rating={rating} />
          <span className="text-[11px] text-gray-500 dark:text-gray-400 font-apa transition-colors duration-300">
            {rating}
          </span>
          <span className="text-[10px] text-gray-300 dark:text-gray-600 font-apa transition-colors duration-300">
            ({reviews})
          </span>
        </div>

        {/* Tags */}
        <div className="flex gap-1.5 flex-wrap mb-2">
          {tags.map((t) => (
            <span key={t}
              className="text-[9px] font-semibold tracking-wide px-2 py-0.5 rounded-full
                         text-[#683292] bg-purple-50
                         dark:text-purple-300 dark:bg-purple-900/30
                         transition-colors duration-300">
              {t}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="font-apa font-bold text-[14px] leading-snug mb-1
                       text-gray-900 dark:text-white transition-colors duration-300">
          {name}
        </h2>

        {/* Desc */}
        <p className="font-apa text-[11px] leading-relaxed mb-3
                      text-[#646464] dark:text-gray-400 transition-colors duration-300">
          {desc}
        </p>

        {/* Price & Cart */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-apa text-[10px] line-through
                          text-gray-300 dark:text-gray-600 transition-colors duration-300">
              {oldPrice}
            </p>
            <p className="font-apa font-bold text-[18px] text-[#F83D8E]">{price}</p>
          </div>
          <button className="w-10 h-10 rounded-full bg-[#683292] hover:bg-[#7c3eab]
                             flex items-center justify-center
                             transition-all duration-300 hover:scale-110 active:scale-95">
            <CiShoppingCart className="text-white text-2xl" />
          </button>
        </div>

      </div>
    </div>
  )
}

const Card = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false }
      }
    ],
  }

  return (
    <>
      <main className="bg-gradient-to-r from-pink-100 via-blue-50 to-teal-50
                       dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                       transition-colors duration-300 py-10 md:py-14">
        <Container>

          {/* Header */}
          <div className="text-center leading-tight mb-8
                          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <h1 className="font-brad text-[#0F0200] dark:text-white transition-colors duration-300">
              Our <span className="text-[#F83D8E]">Best</span> Sellers
            </h1>
            <p className="font-apa leading-7 text-[10px]
                          text-[#646464] dark:text-gray-400 transition-colors duration-300">
              Discover the favorites that keep our customers coming back for more.
            </p>
          </div>

          {/* Slider */}
          <Flex className="justify-center">
            <div className="slider-container w-full px-12">
              <Slider {...settings}>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </Slider>
            </div>
          </Flex>

        </Container>
      </main>
    </>
  )
}

export default Card