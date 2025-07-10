import React from 'react'
import { BackgroundGradient } from '../components/BackgroundGradient'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const[formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    })

    const [isLoading, setIsLoading] = useState(false)

    const handleChange=(e) => {
        setFormData({ ...formData,[e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log("Form Submitted:", formData);
            await emailjs.send('service_ey8ij7u', 'template_y8978v5', {
                from_name: formData.name,
                to_name: 'Giribala',
                from_email: formData.email,
                to_email: 'u2203099@rajagiri.edu.in',
                message: formData.message,
            }, 'A0NK4Cz_oG_kUTJJ8');
            setIsLoading(false);
            alert('Success')
        } catch (error) {
            setIsLoading(false);
            console.log(error)
            alert('Fail')
        }
        //service_ey8ij7u
        //template_y8978v5
    }

  return (
    <section className='c-space section-spacing'>
      <div className='text-center items-center justify-center text-4xl'>
        <h2 className='text-4xl md:text-5xl font-bold text-white mt-0'>Contact Me</h2>
      </div>
      <div className="max-w-3xl mx-auto mt-24">
        <BackgroundGradient className="rounded-2xl">
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-[#4f585d] bg-[#181c20] p-8 w-full">
            <h3 className='text-2xl mb-2 text-center text-white'>Let's Connect Through Any Platform!</h3>
            <p className='text-neutral-300 text-center mb-6'>
              If you want to collaborate on a project or contact me for any sort of clarifications, don't hesitate to reach out to me!
            </p>
            <form className='w-full' onSubmit={handleSubmit}>
                {/* Name field */}
                <div className='mb-5'>
                    <label htmlFor='name' className='field-label text-neutral-300'>
                    Full Name
                    </label>
                    <input
                    id='name'
                    name='name'
                    type='text'
                    className='field-input w-full'
                    placeholder='Enter your full name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                {/* Email field */}
                <div className='mb-5'>
                    <label htmlFor='email' className='field-label text-neutral-300'>
                    Email Address
                    </label>
                    <input
                    id='email'
                    name='email'
                    type='email'
                    className='field-input w-full'
                    placeholder='Enter your email address'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                {/* Message field */}
                <div className='mb-5'>
                    <label htmlFor='message' className='field-label text-neutral-300'>
                    Message
                    </label>
                    <textarea
                    id='message'
                    name='message'
                    className='field-input w-full'
                    rows='4'
                    placeholder='Enter your desired message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                </div>
                <button
                    type='submit'
                    className='mt-6 w-[14rem] bg-[#2f474a] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#0c0c1b] transition-colors duration-300'
                    disabled={isLoading}
                >
                    { !isLoading ? "Send" : "Sending..." }
                </button>
            </form>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  )
}

export default Contact