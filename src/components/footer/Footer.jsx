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
                <div className="footer-top-left flex sm:flex-row flex-col justify-around w-full">
                    <img src={footer_logo} className='nav-logo w-16 h-14 rounded-md mb-2' />
                    
                    <div className='flex gap-8 py-2'>
                        <a href="https://www.instagram.com/saikaatsaha/"><img src={instagram} className='w-6 cursor-pointer hover:scale-110 transition duration-200' alt="" /></a>
                        <a href=""><img src={linkedin} className='w-6 cursor-pointer hover:scale-110 transition duration-200' alt="" /></a>
                        <a href="https://x.com/Saikaatsaha"><img src={twitter} className='w-6 cursor-pointer hover:scale-110 transition duration-200' alt="" /></a>
                    </div>

                </div>
                {/* <div className="footer-top-right space-y-6">
                    <div className="footer-email-input bg-gray-700 flex gap-4 px-4 py-3 rounded-full md:w-80">
                        <img src={user_icon} className='w-4' />
                        <input type="email" placeholder='Enter your email' className='bg-gray-700 outline-none' />
                    </div>
                    <button className='contact-submit px-6 py-3 bg-gradient-to-r from-[#DF8908] to-[#B415FF] rounded-full hover:scale-105 transition-[0.5s]' type='submit'>Submit Now</button>
                </div> */}
            </div>
            <hr />
            <div className="footer-bottom flex justify-between md:flex-row flex-col-reverse gap-6 md:gap-0">
                <p className="footer-bottom-left">
                    &copy; 2024 Saikat Saha. All rights reserved.
                </p>
                <div className="footer-bottom-right flex gap-8">
                    <p className='cursor-pointer hover:underline'>Terms of Services</p>
                    <p className='cursor-pointer hover:underline'>Privacy Policy</p>
                    <p className='cursor-pointer hover:underline'>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer