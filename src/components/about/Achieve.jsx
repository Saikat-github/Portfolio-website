import React from 'react'

const Achieve = ({number, detail}) => {
    return (
            <div className="about-achievement hover:scale-110 transition duration-200">
                <h1 className='text-5xl font-semibold text-orange-600 text-center' >{number}+</h1>
                <p>{detail}</p>
            </div>
    )
}

export default Achieve