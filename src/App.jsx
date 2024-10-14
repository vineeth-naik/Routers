import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import { Routes,Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Thankyou from './Components/Thankyou'
import Footer from './Components/Footer'
import Products from './Components/Products'

function App() {

  return (
      <div className='App' >
        <Navbar />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} /> 
          <Route path='/thankyou' element={<Thankyou />} />
          </Routes> 
          <Footer />     
      </div>
  )
}

export default App
