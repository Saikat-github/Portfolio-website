import React from 'react'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='services flex flex-col items-center justify-center gap-20 py-20 mx-4 sm:mx-40' id='services'>
        <div className="services-title relative">
            <h1 className='text-6xl font-semibold my-10 text-center'>My Services</h1>
        </div>
        <div className="services-container grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
            {Services_Data.map((service, index) => {
                return (
                    <Link to={service.s_link} className="services-format flex flex-col justify-center gap-5 p-6 md:p-16 rounded-lg border-2 transition cursor-pointer hover:border-2 hover:border-pink-400 hover:transition hover:scale-105 hover:bg-gradient-to-tr hover:from-[#3f0028] hover:to-[#582300]" key={index}>
                        <h3 className='text-2xl font-semibold'>{service.s_no}</h3>
                        <h2 className='text-2xl sm:text-4xl font-semibold text-orange-600'>{service.s_name}</h2>
                        <p className='text-xl sm:text-2xl text-gray-200'>{service.s_desc}</p>
                        <div className="services-readmore flex gap-5 items-center mt-5">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Services