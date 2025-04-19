
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Rootlayout from './pages/layout/Rootlayout'
import About from './pages/About'
import Breadcrumb from './component/Breadcrumb'
import Shop from './pages/Shop'
import Review from './pages/Review'
import Faq from './component/Faq'
import Error from './component/Error'
import ProductDetails from './component/ProductDetails'
import BackToTopButton from './component/BackToTopButton'
import { CartProvider } from './component/CartContext'
import Cart from './component/Cart'

function App() {

  return (
    <>
    <BackToTopButton/>
     <CartProvider>
     <Routes>
        <Route element ={<Rootlayout/>}>
          <Route path='*' element ={<Error/>}/>
          <Route path='/' element ={<Home/>}/>
          <Route path='/About' element ={<About/>}/>
          <Route path='/Shop' element ={<Shop/>}/>
          <Route path='/Review' element ={<Review/>}/>
          <Route path='/Faq' element ={<Faq/>}/>
          <Route path='/products/:id' element ={<ProductDetails/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route/>
        </Route>
      </Routes>
     </CartProvider>
      
    </>
  )
}

export default App
