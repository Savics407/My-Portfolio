import React, { useState } from "react";
import headshot from './assets/headshot.jpg'
import black from './assets/black afro.jpg'
import { motion, AnimatePresence } from 'framer-motion'
import close from './assets/closeup.jpg'
import {
  ImQuotesRight, ImStarFull
} from 'react-icons/im'

export const testimonialsData = [
  {
    review:
      "I had the pleasure of working with Savics as a frontend engineer and I can confidently say that they are one of the most talented and dedicated developers I have had the opportunity to collaborate with. Their ability to understand and execute complex design requirements is truly impressive. I highly recommend Savics for any frontend development project.",
  },
  {
    review: "I2nd Review nothon much .",
  },
  {
    review: "3rd review nothing much",
  },
];

function Testimonials() {
  const [selected, setSelected] = useState(0)
  return <div>
    <div className='px-0 py-28 glow3 lg:px-0 xl:px-32'>
      <div className="container">
        <div className=' lg:w-[60%] px-20 lg:px-0 m-auto'>
          <h1 className='text-intro font-josefin text-3xl md:text-4xl mb-3 lines text-center md:text-left md:before:w-[60%]'>Testimonials </h1>
        </div>
        <div className='lg:w-[70%] px-5 md:px-10 lg:px-0 m-auto'>
          <div className='bg-border rounded-lg my-10 md:p-10 p-5 text-gray-300 flex justify-between items-start text-sm md:text-base'>
            <motion.div
              key={selected}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }} className='w-[95%]'>
              <div className='flex md:text-sm text-xs text-intro mb-5'>
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
              </div>
              <div

              >
                <h1>{testimonialsData[selected].review}</h1>
              </div>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              className='text-main text-3xl md:text-5xl'>
              <ImQuotesRight />
            </motion.span>
          </div>
          <div className=" overflow-x-auto">
            <AnimatePresence exitBeforeEnter>
              <div className='border-b border-[#c4ffb245] flex justify-between w-[750px]'>
                <div

                  className={`flex items-center hover:border-intro cursor-pointer p-3 transition duration-300 ${selected === 0 && "border-intro border-b"}`} onClick={
                    () => setSelected(0)
                  }>
                  <div className=' w-14 h-14 rounded-full mr-4'>
                    <img src={headshot} alt="Benjamin Bryant" className='object-cover w-full h-full rounded-full' />
                  </div>
                  <div className='font-josefin'>
                    <h1 className='font-Montserrat text-gray-300 mb-1 text-sm'>Benjamin Bryant</h1>
                    <h1 className='text-gray-500 text-xs '>VP & Co-founder, <span className='text-intro'>Wiser</span></h1>
                  </div>
                </div>
                <div

                  className={`flex items-center hover:border-intro hover:border-b cursor-pointer p-3 duration-300 ${selected === 1 && "border-intro border-b"}`} onClick={() => setSelected(1)}>
                  <div className=' w-14 h-14 rounded-full mr-4'>
                    <img src={close} alt="Benjamin Bryant" className='object-cover w-full h-full rounded-full' />
                  </div>
                  <div className='font-josefin'>
                    <h1 className='font-Montserrat text-gray-300 mb-1 text-sm'>Raaid Hossain Bryant</h1>
                    <h1 className='text-gray-500 text-xs '>Project management, <span className='text-intro'>Focuslab</span></h1>
                  </div>
                </div>
                <div className={`flex items-center hover:border-intro hover:border-b cursor-pointer p-3 transition duration-300 ${selected === 2 && "border-intro border-b"}`} onClick={() => setSelected(2)}>
                  <div className=' w-14 h-14 rounded-full mr-4'>
                    <img src={black} alt="Benjamin Bryant" className='object-cover w-full h-full rounded-full' />
                  </div>
                  <div className='font-josefin'>
                    <h1 className='font-Montserrat text-gray-300 mb-1 text-sm'>Logan Cee</h1>
                    <h1 className='text-gray-500 text-xs '>UI/UX Designer, <span className='text-intro'>Logan Cee</span></h1>
                  </div>
                </div>
              </div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  </div >;
}

export default Testimonials;
