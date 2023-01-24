import React from 'react'
import { TiSocialLinkedin, TiSocialYoutube, TiSocialGithub, TiSocialTwitter } from 'react-icons/ti'
import { GiLoveHowl } from 'react-icons/gi'
import moment from 'moment/moment'


function Footer() {
    return (
        <div>
            <div className='md:border-t border-[#c4ffb245] lg:px-28 text-gray-300 text-sm'>
                <div className="container py-5 px-5 lg:px-0 flex flex-wrap items-center justify-between">
                    <div className='hidden md:block md:w-auto text-center'>
                        <h1> &copy; Victor Adighibe {moment().format('yyyy')}.</h1>
                    </div>
                    <div className='text-gray-300 flex w-full md:w-36 items-center justify-center py-5 md:py-0 md:justify-between text-xl'>
                        <div className='bg-border p-1 mx-2 md:mx-0 rounded hover:border-[#80a674] shadow border border-[#0b4345] cursor-pointer'>
                            <TiSocialLinkedin />
                        </div>
                        <div className='bg-border p-1 mx-2 md:mx-0 rounded hover:border-[#80a674] shadow border border-[#0b4345] cursor-pointer'>
                            <TiSocialTwitter />
                        </div>
                        <div className='bg-border p-1 mx-2 md:mx-0 rounded hover:border-[#80a674] shadow border border-[#0b4345] cursor-pointer'>
                            <TiSocialGithub />
                        </div>
                        <div className='bg-border p-1 mx-2 md:mx-0 rounded hover:border-[#80a674] shadow border border-[#0b4345] cursor-pointer'>
                            <TiSocialYoutube />
                        </div>
                    </div>
                    <div className='w-full md:w-auto'>
                        <h1 className='flex items-center justify-center md:justify-start'>Built with
                            {/* <AiFillHeart /> */}
                            <span className='px-1 '>
                                <GiLoveHowl />
                            </span>
                            by Savics</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer