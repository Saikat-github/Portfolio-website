import React from 'react'
import { About, Contact, Footer, Hero, MyWork, Navbar, Services } from '../components'

const Home = () => {
  return (
    <div>

        <Hero />
        <hr className='w-3/4 mx-auto bg-sky-800'/>
        <About />
        <Services />
        <MyWork />
        <Contact />
      
    </div>
  )
}

export default Home