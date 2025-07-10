
import Achieve from './Achieve'

const About = () => {
  return (
    <div id='about'>
        <div className="about-title flex justify-center py-20">
            <h1 className='text-6xl font-semibold text-center'>About Me</h1>
        </div>
        <div className="about md:mx-20 flex md:gap-20 mx-10 items-center justify-center">
            <div className="about-right">
                <div className="about-para md:w-3/4 text-sm mb-6 space-y-6">
                    <p>I am an experienced Web Developer with professional expertise in the field.</p>
                    <p>My passion for web development is reflected in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills flex flex-col gap-4 text-xl ">
                    <div className="about-skill hover:scale-105 transition md:flex space-y-2 md:space-y-0 items-center gap-4">
                        <p className='w-32'>HTML & CSS</p>
                        <hr className='w-1/2 border-none bg-orange-600 h-1 rounded-full'/>
                    </div>
                    <div className="about-skill hover:scale-105 transition md:flex space-y-2 md:space-y-0 items-center gap-4">
                        <p className='w-32'>React JS</p>
                        <hr className='w-2/3 border-none bg-orange-600 h-1 rounded-full'/>
                    </div>
                    <div className="about-skill hover:scale-105 transition md:flex space-y-2 md:space-y-0 items-center gap-4">
                        <p className='w-32'>Javascript</p>
                        <hr className='w-3/4 border-none bg-orange-600 h-1 rounded-full'/>
                    </div>
                    <div className="about-skill hover:scale-105 transition md:flex space-y-2 md:space-y-0 items-center gap-4">
                        <p className='w-32'>Node JS</p>
                        <hr className='w-2/3 border-none bg-orange-600 h-1 rounded-full'/>
                    </div>
                    <div className="about-skill hover:scale-105 transition md:flex space-y-2 md:space-y-0 items-center gap-4">
                        <p className='w-32'>MongoDB</p>
                        <hr className='w-3/4 border-none bg-orange-600 h-1 rounded-full'/>
                    </div>
                </div>
            </div>
        </div>
        <hr className='w-3/4 mx-auto my-16 hidden md:inline'/>
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