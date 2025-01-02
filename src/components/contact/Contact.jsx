import React, { useState } from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { useForm } from 'react-hook-form'



const Contact = () => {
    const {register, handleSubmit, reset, formState:{isSubmitting}} = useForm();
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);

    const onSubmit = async (data, event) => {
        setError(null);
        setLoader(true);
        try {
            const formData = new FormData(event.target);
    
        formData.append("access_key", "63d740be-1b73-4bb4-aefd-85f52a94c860");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message);
        }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoader(false);
            reset();
        }
        
      };

    

    
    return (
        <div className="contact flex flex-col items-center gap-16 py-20 px-2" id='contact'>
            <div className="contact-title relative">
                <h1 className='text-6xl font-semibold text-center'>Get in touch</h1>
                <img src={theme_pattern} className='absolute right-0 bottom-0 -z-10' />
            </div>
            <div className="contact-section flex flex-col lg:flex-row gap-36 items-center">
                <div className="contact-left flex flex-col gap-8">
                    <h1 className='text-5xl font-medium bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent'>Let's talk </h1>
                    <p className='max-w-80 text-xs'>I'm currently available to take on new projects, so feel free to send me a message about anything you want.</p>
                    <div className="contact-details flex flex-col gap-7 text-gray-100 text-xs">
                        <div className="contact-detail  flex items-center gap-5">
                            <img src={mail_icon} alt="" /> <p>sahasaikat782@gmail.com</p>
                        </div>
                        <div className="contact-detail  flex items-center gap-5">
                            <img src={call_icon} alt="" />
                            <p>+91-0000000000</p>
                        </div>
                        <div className="contact-detail  flex items-center gap-5">
                            <img src={location_icon} alt="" />
                            <p>Kolkata, India</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='contact-right flex flex-col items-start gap-5 w-full'>
                    <label className='text-sm text-gray-200' >Your Name</label>
                    <input className='border-none lg:w-96 w-[80%] h-10 lg:h-20 rounded-lg bg-gray-600 text-gray-200 text-xs pl-7' type="text" placeholder='Enter your name' {...register("name", {required: true})} />

                    <label className='text-sm text-gray-200' htmlFor="">Your Email</label>
                    <input className='border-none lg:w-96 w-[80%] h-10 lg:h-20 rounded-lg bg-gray-600 text-gray-200 text-xs pl-7' type="email" placeholder='Enter your email' {...register("email", {required: true})} />

                    <label className='text-sm text-gray-200' htmlFor="">Write your message here</label>
                    <textarea {...register("message", {required: true})} placeholder='Enter your message' className='border-none lg:w-96 w-[80%] h-10 lg:h-32 rounded-lg bg-gray-600 text-gray-200 text-xs pl-7 pt-4'></textarea>

                    <div className='flex items-center gap-2'>
                    <button className='contact-submit py-2 px-6 bg-gradient-to-r from-[#DF8908] to-[#B415FF] rounded-full hover:scale-105 transition-[0.5s]' type='submit' disabled={isSubmitting}>{error ? <span>{error}</span> : "Submit Now" }</button>
                    {loader ? <span className='w-6 h-6 border-4 rounded-full animate-spin border-dotted'></span> : null}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact