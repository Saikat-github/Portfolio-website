import React from 'react'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
import facebook from '../../assets/facebook-white.svg'
import instagram from '../../assets/instagram-white.svg'
import twitter from '../../assets/twitter-white.svg'
import linkedin from '../../assets/linkedin.svg'


const Footer = () => {
    return (
        <div className="footer text-xs flex flex-col py-20 md:px-32 px-8 gap-10 bg-gray-950">
            <div className="footer-top flex md:flex-row flex-col gap-10 md:gap-0 justify-between ">
                <div className="footer-top-left flex sm:flex-row flex-col  justify-center sm:justify-around w-full items-center max-sm:gap-6">
                    <img src={footer_logo} className='nav-logo w-16 h-14 rounded-md mb-2' />

                    <div className='flex gap-8 py-2'>
                        <a href="https://www.instagram.com/saikaatsaha/" target="_blank" rel="noopener noreferrer"><img src={instagram} className='w-6 cursor-pointer hover:scale-110 transition duration-200' alt="" /></a>
                        <a href="https://www.linkedin.com/in/saikat-saha1" target="_blank" rel="noopener noreferrer"><img src={linkedin} className='w-6 cursor-pointer hover:scale-110 transition duration-200' alt="" /></a>
                        <a href="https://x.com/Saikaatsaha" target="_blank" rel="noopener noreferrer"><img src={twitter} className='w-6 cursor-pointer hover:scale-110 transition duration-200' alt="" /></a>
                    </div>

                </div>
            </div>
            <hr />

            <p className="footer-bottom-left text-center">
                &copy; 2025 Saikat Saha. All rights reserved.
            </p>

        </div>
    )
}

export default Footer