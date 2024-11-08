import React from 'react'
import profile_img from '../../assets/profile_img.svg'
import { Link } from 'react-router-dom'
import avatar_icon from '../../assets/avatar_icon.png'



const Hero = () => {
  return (
    <div className='hero flex items-center flex-col gap-8 pb-20' id='home'>
      <img src={profile_img} className='mt-24' />
      <h1 className='w-2/3 md:text-5xl text-2xl text-center text-white'>I'm <span className='text-purple-800'>Saikat Saha</span>, a Passionate <span className='text-purple-800'>Frontend Developer</span> based in India.</h1>
      <p className='text-white text-sm w-2/3 text-center'>With experience in building real world, production grade projects</p>
      <div className="hero-action flex flex-col md:flex-row gap-4 text-xl text-[rgb(0,0,33)]">
        <button className="hero-connect px-10 py-2 bg-gray-300 hover:bg-purple-700 hover:text-white rounded-full cursor-pointer text-lg transition duration-200">
          <a href="https://github.com/Saikat-github" target="_blank" rel="noopener noreferrer">
            Visit Github
          </a>

        </button>
        <a href="/saikatresume.pdf" download>
          <button className="hero-resume px-10 py-2 bg-gray-300 hover:bg-purple-700 hover:text-white rounded-full cursor-pointer text-lg transition duration-200">
            My Resume
          </button>
        </a>
      </div>
    </div>
  )
}

export default Hero