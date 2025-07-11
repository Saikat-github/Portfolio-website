import React from 'react'
import bootstrap from '../../assets/technologies/bootstrap.svg'
import css from '../../assets/technologies/css.svg'
import git from '../../assets/technologies/git.svg'
import googlecloud from '../../assets/technologies/googlecloud.svg'
import html5 from '../../assets/technologies/html5.svg'
import javascript from '../../assets/technologies/javascript.svg'
import nextjs from '../../assets/technologies/nextjs.svg'
import react from '../../assets/technologies/react.svg'
import redux from '../../assets/technologies/redux.svg'
import tailwindcss from '../../assets/technologies/tailwindcss.svg'
import vscode from '../../assets/technologies/vscode.svg'

const Technologies = () => {
  return (
    <div className=' p-4 rounded-xl flex gap-6 flex-wrap justify-center'>
        <img src={bootstrap} className='w-10' />
        <img src={css} className='w-10' />
        <img src={git} className='w-10' />
        <img src={googlecloud} className='w-10' />
        <img src={html5} className='w-10' />
        <img src={javascript} className='w-10' />
        <img src={nextjs} className='w-10' />
        <img src={react} className='w-10' />
        <img src={redux} className='w-10' />
        <img src={tailwindcss} className='w-10' />
        <img src={vscode} className='w-10' />
    </div>
  )
}

export default Technologies