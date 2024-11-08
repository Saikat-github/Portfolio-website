import React from 'react'

const Achieve = ({number, detail}) => {
    return (
            <div className="about-achievement hover:scale-110 transition duration-200">
                <h1 className='text-5xl font-semibold bg-gradient-to-t from-purple-700 to-yellow-700 bg-clip-text text-transparent text-center' >{number}+</h1>
                <p>{detail}</p>
            </div>
    )
}

export default Achieve