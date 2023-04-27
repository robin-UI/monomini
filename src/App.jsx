import React from 'react'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Products from './Pages/Products/Products'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <Products/>
      <Footer/>
    </>
  )
}

export default App