import React, { useState } from 'react'
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import { useMemo } from 'react';



const MyWork = () => {
  const [showmore, setShowmore] = useState(false);
  const showProjects = [6, 7, 8, 9]
  const rootUrl = window.location.origin;
  const notDeployedUrl = useMemo(() => `${rootUrl}/notdeployed`, []);



  return (
    <div className="mywork flex flex-col items-center py-20" id='mywork'>
      <div className="mywork-title relative mb-32">
        <h1 className='px-7 text-6xl font-semibold text-center'>My Latest Work</h1>
        <img src={theme_pattern} className='absolute bottom-0 right-0 -z-10' />
      </div>

      <div className="mywork-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 mx-2 md:mx-0 transition duration-500">
        {mywork_data.map((work, idx) => {
          return <div
            key={idx}
            className={`sm:w-96 rounded-xl relative group ${showProjects.includes(idx) ? (!showmore ? "hidden" : "inline") : ""
              }`}
          >
            {/* Image */}
            <img
              src={work.w_img}
              className="box-border w-96 cursor-pointer transition duration-300 object-contain rounded-xl"
            />

            {/* Buttons */}
            <div className=" max-sm:hidden absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 bg-black/70 sm:backdrop-blur-sm transition duration-300 sm:flex rounded-xl">
              <a
                href={work.liveLink || notDeployedUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-orange-600 text-white px-6 py-1 rounded-full text-sm"
              >
                See Live
              </a>
              <a
                href={work.sourceCode || notDeployedUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-orange-600 text-white px-6 py-1 rounded-full text-sm "
              >
                Source code
              </a>
            </div>


            <div className='flex justify-center gap-4 my-4 sm:hidden'>
              <a
                href={work.liveLink || notDeployedUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-orange-600 text-white px-6 py-1 rounded text-sm hover:bg-orange-700"
              >
                See Live
              </a>
              <a
                href={work.sourceCode || notDeployedUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-orange-600 text-white px-6 py-1 rounded text-sm "
              >
                Source code
              </a>
            </div>

            {/* Info */}
            <h1 className="text-center sm:pt-4 text-sm text-white">{work.w_info}</h1>
          </div>



        })}
      </div>
      <div onClick={() => setShowmore((prev) => !prev)} className="mywork-showmore flex gap-4 px-8 py-2 border border-orange-600 rounded-full my-20 hover:gap-8 transition-[0.6s] hover:transition-[0.6s] cursor-pointer text-sm">
        <p >{showmore ? "Show Less" : "Show More"}</p>
        <img src={arrow_icon} className='w-6' />
      </div>
    </div>
  )
}

export default MyWork