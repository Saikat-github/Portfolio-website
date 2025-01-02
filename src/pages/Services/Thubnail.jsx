import React from 'react'

const Thubnail = () => {
  return (
    <div className='px-10 py-6 w-full'>
            <div className='flex justify-center items-center text-center'>
            <h1 className='text-2xl font-semibold my-6 py-2 border-4 border-pink-600 shadow shadow-pink-500 rounded-full w-72'>THUBNAIL DESIGN</h1>
            </div>

            <div className='mt-10 sm:w-1/2 w-full mx-auto'>
                <p className='text-sm sm:text-lg font-semibold'>
                I design eye-catching YouTube thumbnails that grab attention and boost click-through rates. My designs focus on:
                </p>

                <div className='flex flex-col gap-4 my-10 max-sm:text-xs'>
                    <p> - Bold, Clear Text: To convey your video's message at a glance</p>
                    <p> - Striking Visuals: Custom graphics and high-quality images to stand out</p>
                    <p> - On-Brand Aesthetic: Thumbnails that match your channel's theme and style.
                    </p>
                    <p>With my expertise, your thumbnails will not only attract viewers but also reflect your content's professionalism</p>
                </div>
            </div>
        </div>
  )
}

export default Thubnail