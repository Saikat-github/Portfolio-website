import React from 'react'

const VideoEditing = () => {
  return (
    <div className='px-10 py-6 w-full'>
            <div className='flex justify-center items-center text-center'>
            <h1 className='text-2xl font-semibold my-6 py-2 border-4 border-pink-600 shadow shadow-pink-500 rounded-full w-72'>VIDEO EDITING</h1>
            </div>

            <div className='mt-10 sm:w-1/2 w-full mx-auto'>
                <p className='text-sm sm:text-lg font-semibold'>
                I provide professional video editing services to help you create captivating content. Using DaVinci Resolve, I can:
                </p>

                <div className='flex flex-col gap-4 my-10 max-sm:text-xs'>
                    <p> - Polish Your Footage: Trim, cut, and arrange clips to create seamless videos.</p>
                    <p> - Enhance Visuals: Color grading, transitions, and effects for stunning aesthetics.</p>
                    <p> - Sync Audio Perfectly: Background music, voiceovers, and sound effects that complement the visuals.
                    </p>
                    <p>Whether it's a YouTube video, corporate presentation, or personal project, I ensure a polished final product that aligns with your vision.</p>
                </div>
            </div>
        </div>
  )
}

export default VideoEditing