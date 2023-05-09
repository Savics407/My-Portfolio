import React, { useState } from "react";
import tayo from './assets/Temitayo Gbadebo..png'
import josh from './assets/Uzo.jpeg'
import { motion, AnimatePresence } from 'framer-motion'
import victor from './assets/Victor Ojochuma.jpg'
import {
  ImQuotesRight, ImStarFull
} from 'react-icons/im'

export const testimonialsData = [
  {
    review:
      "It's pleasure working with Savics. He's a talented frontend developer. I was surprised he pulled off the project frontend single handedly in reactJs. Highly recommend working with him.",
  },
  {
    review: "I worked with Victor as a frontend engineer and was impressed with his skills and dedication. He has a strong grasp of frontend technologies and a talent for creating user-friendly, visually appealing web interfaces. Victor is a great team player with excellent communication skills, a positive attitude, and a creative approach to problem-solving. I highly recommend him as a top-notch frontend engineer.",
  },
  {
    review: "It was tough getting a good programmer to design my company's website. I had to trash my first site as it was not up to the standard I needed.. But when I contracted Victor for the work, I was so pleased with his design that I had to make him the official CTO in my company. If you're looking for quality, Victor is one of the best out there.",
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
                    <img src={tayo} alt="Temitayo S Gbadebo" className='object-cover w-full h-full rounded-full' />
                  </div>
                  <div className='font-josefin'>
                    <h1 className='font-Montserrat text-gray-300 mb-1 text-sm'>
                      Temitayo S Gbadebo</h1>
                    <h1 className='text-gray-500 text-xs '>CTO <span className='text-intro'>HxAfrica</span></h1>
                  </div>
                </div>
                <div

                  className={`flex items-center hover:border-intro hover:border-b cursor-pointer p-3 duration-300 ${selected === 1 && "border-intro border-b"}`} onClick={() => setSelected(1)}>
                  <div className=' w-14 h-14 rounded-full mr-4'>
                    <img src={victor} alt="Akoh Ojochuma Victor" className='object-cover w-full h-full rounded-full' />
                  </div>
                  <div className='font-josefin'>
                    <h1 className='font-Montserrat text-gray-300 mb-1 text-sm'>Akoh Ojochuma Victor </h1>
                    <h1 className='text-gray-500 text-xs '>CEO <span className='text-intro'>Chukolo Core</span></h1>
                  </div>
                </div>
                <div className={`flex items-center hover:border-intro hover:border-b cursor-pointer p-3 transition duration-300 ${selected === 2 && "border-intro border-b"}`} onClick={() => setSelected(2)}>
                  <div className=' w-14 h-14 rounded-full mr-4'>
                    <img src={josh} alt="Joshua Uuzoigwe" className='object-cover w-full h-full rounded-full' />
                  </div>
                  <div className='font-josefin'>
                    <h1 className='font-Montserrat text-gray-300 mb-1 text-sm'>Hon. Joshua Uzoigwe</h1>
                    <h1 className='text-gray-500 text-xs '>CEO, <span className='text-intro'>Fabulous edutainment</span></h1>
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
