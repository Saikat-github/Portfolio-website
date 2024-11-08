import React from 'react'
import { Footer, Navbar } from './components'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <div className='font-Poppins text-white'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App