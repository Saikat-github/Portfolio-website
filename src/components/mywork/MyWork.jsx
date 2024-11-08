import React, { useState } from 'react'
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import { useMemo } from 'react';



const MyWork = () => {
  const [showmore, setShowmore] = useState(false);
  const showProjects = [6, 7, 8]
  const rootUrl = window.location.origin;
  const notDeployedUrl = useMemo(() => `${rootUrl}/notdeployed`, []);



  return (
    <div className="mywork flex flex-col items-center py-20" id='mywork'>
      <div className="mywork-title relative mb-32">
        <h1 className='px-7 text-6xl font-semibold'>My Latest Work</h1>
        <img src={theme_pattern} className='absolute bottom-0 right-0 -z-10' />
      </div>

      <div className="mywork-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 mx-2 md:mx-0 transition duration-500">
        {mywork_data.map((work, idx) => {
          return <a href={work.w_link ? work.w_link : notDeployedUrl} key={idx} className={`sm:w-96 h-72 rounded-xl ${showProjects.includes(idx) ? (!showmore ? "hidden" : "inline") : ""}`}>
            <img src={work.w_img} key={idx} className='box-border w-96 h-64 cursor-pointer hover:scale-105 hover:border-4 hover:border-pink-700 hover:rounded-xl transition duration-300 object-contain rounded-xl' />
            <h1 className='text-center py-1'>{work.w_info}</h1>
          </a>


        })}
      </div>
      <div onClick={() => setShowmore((prev) => !prev)} className="mywork-showmore flex gap-4 px-12 py-4 border-2 rounded-full my-20 hover:gap-8 transition-[0.6s] hover:transition-[0.6s] cursor-pointer">
        <p >{showmore ? "Show Less" : "Show More"}</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork