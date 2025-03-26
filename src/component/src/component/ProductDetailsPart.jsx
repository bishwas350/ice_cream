import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa"
import Container from './Container'
import Flex from './Flex'
import img1 from '../assets/img/shop-img1.png'
import img2 from '../assets/img/shop-img2.png'
import img3 from '../assets/img/shop-img3.png'
import img4 from '../assets/img/shop-img4.png'
import img5 from '../assets/img/shop-img5.png'
import img6 from '../assets/img/shop-img6.png'
import img7 from '../assets/img/shop-img7.png'
import img8 from '../assets/img/shop-img8.png'
import img9 from '../assets/img/shop-img9.png'
import img10 from '../assets/img/shop-img10.png'

const ProductDetailsPart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, you would fetch the product data from an API
    // For now, we're simulating this by importing the data from ShopCard
    const fetchProduct = async () => {
      try {
        // This is a workaround since we can't directly import from ShopCard
        // In a real app, you'd fetch this data from an API endpoint
        const mockProductData = [
          {
            id: 1,
            img: img1,
            title: "Chocolate Chip Cookie Cone",
            rating: 4.4,
            price: 4.45,
            description: "Creamy vanilla ice cream topped with cherry.",
            longDescription: "Our signature Chocolate Chip Cookie Cone features rich, creamy vanilla ice cream topped with a sweet, juicy cherry. The homemade chocolate chip cookie cone adds a delightful crunch and sweetness to every bite, creating a perfect balance of flavors and textures.",
            ingredients: "Vanilla ice cream (cream, milk, sugar, egg yolks, vanilla extract), chocolate chip cookie cone (flour, butter, sugar, chocolate chips, egg, baking powder, salt), cherry.",
            nutritionalInfo: "320 calories per serving, 18g fat, 35g carbohydrates, 24g sugar, 4g protein",
            allergens: "Contains: milk, eggs, wheat, soy"
          },
          {
            id: 2,
            img: img2,
            title: "Chocolate Chip Cookie Cone",
            rating: 4.4,
            price: 4.45,
            description: "Rich chocolate ice cream with chunks of brownie.",
            longDescription: "Indulge in our decadent Chocolate Chip Cookie Cone featuring rich, velvety chocolate ice cream studded with generous chunks of fudgy brownie pieces. The crisp chocolate chip cookie cone provides the perfect vessel for this chocolate lover's dream.",
            ingredients: "Chocolate ice cream (cream, milk, sugar, cocoa powder, egg yolks), brownie chunks (flour, sugar, butter, chocolate, eggs), chocolate chip cookie cone (flour, butter, sugar, chocolate chips, egg, baking powder, salt).",
            nutritionalInfo: "380 calories per serving, 22g fat, 42g carbohydrates, 30g sugar, 5g protein",
            allergens: "Contains: milk, eggs, wheat, soy"
          },
          {
            id: 3,
            img: img3,
            title: "Chocolate Chip Cookie Cone",
            rating: 4.4,
            price: 4.45,
            description: "Strawberry ice cream layered with shortcake",
            longDescription: "Experience the taste of summer with our Strawberry Shortcake Chocolate Chip Cookie Cone. Creamy strawberry ice cream is layered with pieces of buttery shortcake and swirls of strawberry sauce, all served in our signature chocolate chip cookie cone.",
            ingredients: "Strawberry ice cream (cream, milk, sugar, strawberries, egg yolks), shortcake pieces (flour, sugar, butter, baking powder), strawberry sauce (strawberries, sugar), chocolate chip cookie cone (flour, butter, sugar, chocolate chips, egg, baking powder, salt).",
            nutritionalInfo: "350 calories per serving, 17g fat, 45g carbohydrates, 28g sugar, 4g protein",
            allergens: "Contains: milk, eggs, wheat"
          },
          {
            id: 4,
            img: img4,
            title: "Chocolate Chip Cookie Cone",
            rating: 4.4,
            price: 4.45,
            description: "Refreshing mint ice cream with chocolate chips.",
            longDescription: "Cool down with our refreshing Mint Chocolate Chip Cookie Cone. This delightful treat features mint-infused ice cream studded with premium chocolate chips, creating a perfect balance of cool mint and rich chocolate flavors, all in our freshly-baked chocolate chip cookie cone.",
            ingredients: "Mint ice cream (cream, milk, sugar, egg yolks, mint extract, natural food coloring), chocolate chips, chocolate chip cookie cone (flour, butter, sugar, chocolate chips, egg, baking powder, salt).",
            nutritionalInfo: "340 calories per serving, 19g fat, 38g carbohydrates, 25g sugar, 4g protein",
            allergens: "Contains: milk, eggs, wheat, soy"
          },
          {
            id: 5,
            img: img5,
            title: "Chocolate Chip Cookie Cone",
            rating: 4.4,
            price: 4.45,
            description: "Strawberry ice cream with fresh strawberries",
            longDescription: "Savor the taste of fresh-picked strawberries in our Strawberry Dream Chocolate Chip Cookie Cone. This delightful cone features our homemade strawberry ice cream made with real strawberry chunks, offering a burst of natural sweetness in every bite, perfectly complemented by our chocolate chip cookie cone.",
            ingredients: "Strawberry ice cream (cream, milk, sugar, fresh strawberries, egg yolks), strawberry chunks, chocolate chip cookie cone (flour, butter, sugar, chocolate chips, egg, baking powder, salt).",
            nutritionalInfo: "330 calories per serving, 16g fat, 42g carbohydrates, 27g sugar, 4g protein",
            allergens: "Contains: milk, eggs, wheat"
          },
          {
            id: 6,
            img: img6,
            title: "Chocolate Chip Cookie Cone",
            rating: 4.4,
            price: 4.45,
            description: "Chocolate chip cookie dough ice cream in a cone.",
            longDescription: "For the ultimate cookie experience, try our Cookie Dough Delight Chocolate Chip Cookie Cone. Our vanilla ice cream is packed with chunks of chocolate chip cookie dough and chocolate chips, then served in our freshly-baked chocolate chip cookie cone for the perfect cookie lover's treat.",
            ingredients: "Vanilla ice cream (cream, milk, sugar, egg yolks, vanilla extract), cookie dough pieces (flour, butter, sugar, chocolate chips), chocolate chips, chocolate chip cookie cone (flour, butter, sugar, chocolate chips, egg, baking powder, salt).",
            nutritionalInfo: "390 calories per serving, 21g fat, 46g carbohydrates, 32g sugar, 5g protein",
            allergens: "Contains: milk, eggs, wheat, soy"
          },
          {
            id: 7,
            img: img7,
            title: "Chocolate Chip Cookie Cone",
            rating: 4.4,
            price: 4.45,
            description: "Vanilla ice cream with chocolate chips.",
            longDescription: "Our Classic Vanilla Chocolate Chip Cookie Cone combines the timeless flavor of creamy vanilla ice cream with the perfect amount of premium chocolate chips, all served in our signature chocolate chip cookie cone for a delicious contrast of flavors and textures.",
            ingredients: "Vanilla ice cream (cream, milk, sugar, egg yolks, vanilla extract), chocolate chips, chocolate chip cookie cone (flour, butter, sugar, chocolate chips, egg, baking powder, salt).",
            nutritionalInfo: "330 calories per serving, 18g fat, 37g carbohydrates, 25g sugar, 4g protein",
            allergens: "Contains: milk, eggs, wheat, soy"
          },
          {
            id: 8,
            img: img8,
            title: "Chocolate Chip Cookie Cone",
            rating: 4.4,
            price: 4.45,
            description: "Vanilla ice cream with chocolate chips.",
            longDescription: "Our Double Chocolate Dream Cone features rich chocolate ice cream packed with premium chocolate chips and chocolate fudge swirls, all in our freshly-baked chocolate chip cookie cone. This is the ultimate chocolate lover's indulgence!",
            ingredients: "Chocolate ice cream (cream, milk, sugar, cocoa powder, egg yolks), chocolate chips, chocolate fudge (sugar, cocoa, butter, cream), chocolate chip cookie cone (flour, butter, sugar, chocolate chips, egg, baking powder, salt).",
            nutritionalInfo: "370 calories per serving, 20g fat, 43g carbohydrates, 30g sugar, 5g protein",
            allergens: "Contains: milk, eggs, wheat, soy"
          },
          {
            id: 9,
            img: img9,
            title: "Chocolate Chip Cookie Cone",
            rating: 4.4,
            price: 4.45,
            description: "Vanilla ice cream with chocolate chips.",
            longDescription: "Experience the taste of nostalgia with our Birthday Cake Chocolate Chip Cookie Cone. Creamy vanilla ice cream is filled with colorful cake pieces and rainbow sprinkles, creating a festive treat that's perfect for celebrations or anytime you want to indulge in something special.",
            ingredients: "Vanilla ice cream (cream, milk, sugar, egg yolks, vanilla extract), cake pieces (flour, sugar, butter, eggs, vanilla, food coloring), rainbow sprinkles, chocolate chip cookie cone (flour, butter, sugar, chocolate chips, egg, baking powder, salt).",
            nutritionalInfo: "360 calories per serving, 18g fat, 44g carbohydrates, 32g sugar, 4g protein",
            allergens: "Contains: milk, eggs, wheat, soy"
          },
          {
            id: 10,
            img: img10,
            title: "Chocolate Chip Cookie Cone",
            rating: 4.4,
            price: 4.45,
            description: "Vanilla ice cream with chocolate chips.",
            longDescription: "Our Caramel Swirl Chocolate Chip Cookie Cone combines smooth vanilla ice cream with rich caramel swirls and crunchy toffee pieces, all served in our freshly-baked chocolate chip cookie cone. The combination of sweet caramel, creamy vanilla, and crunchy cookie creates an irresistible dessert experience.",
            ingredients: "Vanilla ice cream (cream, milk, sugar, egg yolks, vanilla extract), caramel swirl (sugar, cream, butter, salt), toffee pieces (sugar, butter, almonds), chocolate chip cookie cone (flour, butter, sugar, chocolate chips, egg, baking powder, salt).",
            nutritionalInfo: "380 calories per serving, 20g fat, 45g carbohydrates, 35g sugar, 4g protein",
            allergens: "Contains: milk, eggs, wheat, nuts (almonds), soy"
          }
        ];
        
        const foundProduct = mockProductData.find(item => item.id === parseInt(id));
        setProduct(foundProduct);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Container>
        <div className="text-center py-20 text-xl">
          Loading...
        </div>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <div className="text-center py-20 text-xl">
          Product not found
        </div>
      </Container>
    );
  }
return (
    <main className="py-8">
      <Container>
        <Flex className="flex-col md:flex-row gap-8 items-start">
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
            <p className="text-[#646464] dark:text-gray-400 mb-8">{product.description}</p>
            <button className="bg-[#683292] hover:bg-[#7c3eab] text-white py-3 px-8 rounded-md transition-colors duration-300 mb-8">
              Add to Cart
            </button>
          </div>
        </Flex>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Product Description</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {product.longDescription}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Ingredients</h2>
              <div className="pl-4 border-l-4 border-[#683292]">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {product.ingredients}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Nutritional Information</h2>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <p className="text-gray-700 dark:text-gray-300">
                  {product.nutritionalInfo}
                </p>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                {product.nutritionalInfo.split(',').map((info, index) => (
                  <span key={index} className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">
                    {info.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Allergens</h2>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md border-l-4 border-red-400">
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {product.allergens}
                </p>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                {product.allergens.replace('Contains:', '').split(',').map((allergen, index) => (
                  <span key={index} className="bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-full text-sm text-red-700 dark:text-red-300">
                    {allergen.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ProductDetailsPart;

