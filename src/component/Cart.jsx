import { useCart } from './CartContext';
import { CiTrash } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2 for alerts
const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    clearCart
  } = useCart(); // Access cart state & functions


  const showAlert = ()=> {
    Swal.fire({
        title: "Good job!",
        text: "Checkout Proceed complete!",
        icon: "success"
      }).then(()=>{
        clearCart();
      });
  }
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Your Cart ({cartCount})</h1>
      
      {cart.length === 0 ? (
        // 🛒 Empty Cart Message
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Your cart is empty</h2>
          <Link 
            to="/shop" 
            className="bg-[#F83D8E] text-white py-2 px-6 rounded-md hover:bg-[#e0357d] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        // 🛒 Cart with Items
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side: Cart Items */}
          <div className="md:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              {cart.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 py-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="sm:w-1/4">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-32 object-contain"
                    />
                  </div>
                  <div className="sm:w-3/4">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-semibold dark:text-white">{item.title}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <CiTrash size={20} />
                      </button>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm my-2">{item.discription}</p>
                    <div className="flex justify-between items-center mt-4">
                      {/* 🔢 Quantity Adjuster */}
                      <div className="flex items-center border rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-lg"
                        >
                          -
                        </button>
                        <span className="px-3 py-1">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-lg"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold text-[#F83D8E]">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
              <button 
                onClick={clearCart}
                className="mt-4 text-red-500 hover:text-red-700 text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>
          
          {/* Right Side: Order Summary */}
          <div className="md:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4 dark:text-white">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                <span className="font-semibold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
              <div className="flex justify-between mb-6">
                <span className="text-lg font-bold dark:text-white">Total</span>
                <span className="text-lg font-bold text-[#F83D8E]">${cartTotal.toFixed(2)}</span>
              </div>
              <button onClick={showAlert} className='block w-full bg-[#F83D8E] cursor-pointer text-white text-center py-3 px-4 rounded-md hover:bg-[#e0357d] transition-colors'>
              Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


                
