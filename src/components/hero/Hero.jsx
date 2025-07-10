import React from 'react'
import profile_img from '../../assets/profile_img.webp'




const Hero = () => {
  return (
    <div className='hero flex items-center flex-col gap-12 pb-20 pt-10 px-2' id='tothetop'>
      <img src={profile_img} className='mt-4 w-60 h-60 object-cover rounded-full' />
      <h1 className='sm:w-2/3 text-3xl sm:text-5xl text-center text-white font-semibold'>I'm <span className='text-orange-600'>Saikat Saha</span>, a Passionate <span className='text-orange-600'>Full Stack Web Developer</span> based in India.</h1>
      <p className='text-white text-xl sm:w-2/3 text-center'>With experience in building real world, production grade projects</p>
      <div className="hero-action flex flex-col md:flex-row gap-4 text-xl text-[rgb(0,0,33)]">
        <button className="hero-connect px-10 py-2 border border-orange-600  text-white hover:opacity-75 rounded-full cursor-pointer text-sm transition duration-200">
          <a href="https://github.com/Saikat-github" target="_blank" rel="noopener noreferrer">
            Visit Github
          </a>

        </button>
        <a href="/saikatresume (1).pdf" download>
          <button className="hero-resume px-10 py-2 border border-orange-600  text-white hover:opacity-75 rounded-full cursor-pointer text-sm transition duration-200">
            Download My Resume
          </button>
        </a>
      </div>
    </div>
  )
}

export default Hero