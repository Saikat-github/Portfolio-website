import React from 'react'
import profile_img from '../../assets/profile_img.webp'
import twitter from '../../assets/twitter-white.svg'
import linkedin from '../../assets/linkedin.svg'
import email from '../../assets/email.svg'
import github from '../../assets/github.svg'


const socialLinks = [
  {
    name: "Email",
    link: "",
    logo: email
  },
  {
    name: "Github",
    link: "https://github.com/Saikat-github",
    logo: github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/saikat-saha1",
    logo: linkedin
  },
    {
    name: "Twitter",
    link: "https://x.com/Saikaatsaha",
    logo: twitter
  }
]



const Hero = () => {
  return (
    <div className='hero flex items-center flex-col gap-12 pb-20 pt-10 px-10' id='tothetop'>
      <img src={profile_img} className='mt-4 w-60 h-60 object-cover rounded-full' />
      <h1 className='sm:w-2/3 text-4xl text-center  font-semibold'>
        I'm Saikat Saha <br />
        <h2 className='text-lg'>Full Stack Web Developer</h2>
      </h1>
      {/* <p className=' text-sm md:text-lg md:w-2/3 text-center'>Experience in building real world, production grade projects</p> */}
      <div className='flex gap-4 sm:gap-8'>
        {
          socialLinks?.map((link, idx) => (
            <a href={link.link} target="_blank" rel="noopener noreferrer" key={idx}>
              <img src={link.logo} alt={link.name} className='w-10 h-10 border border-gray-500 p-2 rounded-lg opacity-85 hover:opacity-70 transition-all duration-300' />
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default Hero