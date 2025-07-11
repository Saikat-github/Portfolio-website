
import Achieve from './Achieve'
import Technologies from './Technologies'

const About = () => {
    return (
        <div id='about' className='my-10'>
            <h1 className='text-6xl font-semibold text-center'>About Me</h1>
            <div className="about-right p-4 md:mx-32 space-y-10">
                <p className='text-center my-2 text-sm mx-6'>I am an experienced Web Developer with professional expertise in building production grade, highly optimized web application.</p>
                <Technologies />
            </div>
            <div className="about-achievments flex md:flex-row flex-col md:justify-around justify-center my-20 gap-10 md:gap-0 items-center">
                <Achieve number={1} detail="YEAR OF EXPERIENCE" />
                <hr className='bg-white md:w-0.5 md:h-12 w-12 h-0.5' />
                <Achieve number={30} detail="PROJECTS COMPLETED" />
                <hr className='bg-white md:w-0.5 md:h-12 w-12 h-0.5' />
                <Achieve number={5} detail="PRODUCTION GRADE PROJECTS" />
            </div>
        </div>
    )
}

export default About