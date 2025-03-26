import React from 'react'
import profile_img2 from '../../assets/profile_img.svg'
import profile_img from '../../assets/profile_img.png'




const Hero = () => {
  return (
    <div className='hero flex items-center flex-col gap-12 pb-20 pt-10 px-2' id='totop'>
      {/* <img src={profile_img} className='mt-4 w-60 h-60 object-cover rounded-full' /> */}
      <h1 className='sm:w-2/3 text-3xl sm:text-5xl text-center text-white font-semibold'>I'm <span className='text-purple-800'>Saikat Saha</span>, a Passionate <span className='text-purple-800'>Full Stack Web Developer</span> based in India.</h1>
      <p className='text-white text-xl sm:w-2/3 text-center'>With experience in building real world, production grade projects</p>
      <div className="hero-action flex flex-col md:flex-row gap-4 text-xl text-[rgb(0,0,33)]">
        <button className="hero-connect px-10 py-2 bg-gray-100 hover:bg-purple-700 text-purple-700 hover:text-white rounded-full cursor-pointer text-lg transition duration-200">
          <a href="https://github.com/Saikat-github" target="_blank" rel="noopener noreferrer">
            Visit Github
          </a>

        </button>
        <a href="/saikatresume (1).pdf" download>
          <button className="hero-resume px-10 py-2 bg-gray-100 hover:bg-purple-700 text-purple-700 hover:text-white rounded-full cursor-pointer text-lg transition duration-200">
            Download My Resume
          </button>
        </a>
      </div>
    </div>
  )
}

export default Hero