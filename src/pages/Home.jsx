import React from 'react'
import { About, Contact, Footer, HeaderNavbar, Hero, MyWork, Services } from '../components'

const Home = () => {
  return (
    <div>
      <HeaderNavbar />
      <Hero />
      <hr className='w-3/4 mx-auto bg-sky-800' />
      <About />
      <MyWork />
      <Services />
      <Contact />

    </div>
  )
}

export default Home