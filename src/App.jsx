import React from 'react'
import { Footer, Navbar } from './components'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'


const App = () => {
  return (
    <div className='font-Poppins text-white'>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App