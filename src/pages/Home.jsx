import { About, Contact, HeaderNavbar, Hero, MyWork2 } from '../components'

const Home = () => {
  return (
    <div>
      <HeaderNavbar />
      <Hero />
      <hr className='w-3/4 mx-auto bg-sky-800' />
      <About />
      <MyWork2 />
      <Contact />

    </div>
  )
}

export default Home