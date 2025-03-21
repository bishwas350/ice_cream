
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Rootlayout from './pages/layout/Rootlayout'
import About from './pages/About'
import Breadcrumb from './component/Breadcrumb'
import Shop from './pages/Shop'
import Review from './pages/Review'

function App() {

  return (
    <>
      <Routes>
        <Route element ={<Rootlayout/>}>
          <Route path='/' element ={<Home/>}/>
          <Route path='/About' element ={<About/>}/>
          <Route path='/Shop' element ={<Shop/>}/>
          <Route path='/Review' element ={<Review/>}/>
          <Route/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
