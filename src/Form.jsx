import { BsArrowRight } from 'react-icons/bs'
import React from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react';

function Form({ info }) {
    const [state, handleSubmit] = useForm("mzbqdrlg");
    if (state.succeeded) {
        return <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            className=" py-10 text-center bg-border lg:w-[60%] w-[90%] m-auto rounded-md mb-32"
        >
            <h1 className='text-intro md:text-3xl text-2xl font-josefin mb-3'>Message sent Successfully!</h1>
            <h1 className='text-gray-300 text-sm'>Hello!, thanks for reaching out, I would respond as soon as possible. <br /> <q>You can also make use of the live chat system</q></h1>
        </motion.div>;
    }
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=''>
                <div className="container">
                    <div className='lg:w-[60%] md:px-20 px-5 lg:px-0 m-auto'>
                        <h1 className='text-intro font-josefin text-3xl md:text-4xl mb-3 text-center'>{info.title}</h1>

                        <h1 className='text-gray-300 text-center m-auto text-sm md:text-base' dangerouslySetInnerHTML={{ __html: info.description }}></h1>
                    </div>
                    <div className='pt-20 pb-40'>
                        <form onSubmit={handleSubmit}>
                            <div className='lg:w-[60%] md:px-20 px-5 lg:px-0 m-auto'>
                                <div className='flex flex-col md:flex-row justify-between'>
                                    <div className='flex flex-col md:w-[45%] mb-10'   >
                                        <label className='text-intro font-josefin text-sm'>Your Name</label>
                                        <input type="text" name="name" id="name" required placeholder='enter your name' className='bg-transparent border-b text-sm md:text-base rounded-md border-[#c4ffb245] p-3 text-gray-300 outline-none' />

                                    </div>
                                    <div className='flex flex-col md:w-[45%]'>
                                        <label className='text-intro text-sm font-josefin'>Email Address</label>
                                        <input type="email" name="email" id="email" required placeholder='enter your email' className='bg-transparent border-b text-sm md:text-base rounded-md border-[#c4ffb245] text-gray-300 p-3 outline-none' />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-10'>
                                    <label className='text-intro text-sm font-josefin'>Your Message</label>
                                    <textarea name="message" id="message" rows={3} required placeholder={info.message} className='bg-transparent border-b text-sm md:text-base rounded-md border-[#c4ffb245] text-gray-300 p-3 outline-none' ></textarea>
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />

                                </div>
                                <div className=' font-Montserrat flex justify-center '>
                                    <button type="submit" className='border-2 border-double border-main hover:text-main text-intro px-10 py-2 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro flex items-center cursor-pointer' disabled={state.submitting}>Shoot
                                        <span className='ml-3 text-xl'>

                                            <BsArrowRight />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <Footer /> */}
            </motion.div>
        </div>
    )
}

export default Form