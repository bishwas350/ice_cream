
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Rootlayout from './pages/layout/Rootlayout'

function App() {

  return (
    <>
      <Routes>
        <Route element ={<Rootlayout/>}>
          <Route path='/' element ={<Home/>}/>
          <Route/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
