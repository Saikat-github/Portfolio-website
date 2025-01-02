import React from 'react'

const WebDev = () => {
    return (
        <div className='px-10 py-6 w-full'>
            <div className='flex justify-center items-center text-center'>
            <h1 className='text-2xl font-semibold my-6 py-2 border-4 border-pink-600 shadow shadow-pink-500 rounded-full w-72'>WEB DEVELOPMENT</h1>
            </div>

            <div className='mt-10 sm:w-1/2 w-full mx-auto'>
                <p className='text-sm sm:text-lg font-semibold'>
                    I specialize in building dynamic, responsive, and feature-rich websites using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Whether you need a personal portfolio, an e-commerce platform, or a custom web application, I ensure:
                </p>

                <div className='flex flex-col gap-4 my-10 max-sm:text-xs'>
                    <p> - Seamless User Experience: Intuitive navigation and mobile-friendly designs</p>
                    <p> - Scalable Solutions: Applications built to grow with your busines</p>
                    <p> - Secure, efficient, and reliable server-side development.
                    </p>
                    <p> With my expertise in the MERN stack, I deliver tailored web solutions that meet your unique business needs.</p>
                </div>
            </div>
        </div>
    )
}

export default WebDev