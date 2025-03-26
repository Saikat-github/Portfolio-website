import React from 'react'
import { Footer} from './components'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'


const App = () => {
  return (
    <div className='font-Poppins text-white'>
      <ScrollToTop />
      <main className='min-h-screen'>
      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App