import React, { useState } from 'react'
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import { useMemo } from 'react';
import { ExternalLink } from 'lucide-react';



const MyWork2 = () => {
    const [showmore, setShowmore] = useState(false);
    const rootUrl = window.location.origin;
    const notDeployedUrl = useMemo(() => `${rootUrl}/notdeployed`, []);



    return (
        <div className="mywork flex flex-col items-center py-20" id='mywork'>
            <h1 className='px-7 text-6xl font-semibold text-center my-10'>My Latest Work</h1>
            <div className="mywork-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 md:gap-20 mx-6 md:mx-12 mt-4" >
                {mywork_data.map((work, idx) => {
                    return <div
                        key={idx}
                        className={"bg-gray-700/50 sm:bg-gray-900 p-4 flex flex-col gap-6 rounded-xl justify-center items-center"}
                    >
                        <p className='text-lg font-bold'>{work.name}</p>
                        <ul className='flex gap-2 flex-wrap'>
                            {
                                work.technologies.map((tech, idx) => {
                                    return <p key={idx} className='py-1 px-3 bg-gray-800 text-xs rounded-full'>{tech}</p>
                                })
                            }
                        </ul>
                        <img src={work.img} alt="" className='w-96 transition duration-300 object-contain rounded-xl' />
                        <p className='text-xs'>{work.info}</p>
                        <hr />
                        {/* Buttons */}
                        <div className="flex gap-4 text-sm">
                            <a
                                href={work.liveLink || notDeployedUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 px-6 py-1 rounded-full flex items-center gap-1"
                            >
                                See Live
                                <ExternalLink className='w-4' />
                            </a>
                            <a
                                href={work.sourceCode || notDeployedUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 px-6 py-1 rounded-full flex items-center gap-1"
                            >
                                Source code
                                <ExternalLink className='w-4' />
                            </a>
                        </div>
                    </div>
                })}
            </div>
            <a
                href="https://github.com/Saikat-github/NotDeployed"
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 px-8 py-2 border border-gray-700 rounded-full my-20 hover:gap-8 cursor-pointer text-xs transition-all duration-300"
            >
                <p >{showmore ? "Show Less" : "Show More"}</p>
                <img src={arrow_icon} className='w-6' />
            </a>
        </div >
    )
}

export default MyWork2