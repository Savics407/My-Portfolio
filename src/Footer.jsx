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
                        <a href="https://www.linkedin.com/in/victor-adighibe-b4a89923a/" target="_blank" rel="noopener noreferrer">
                            <div className='bg-border p-1 mx-2 md:mx-0 rounded hover:border-[#80a674] shadow border border-[#0b4345] cursor-pointer'>
                                <TiSocialLinkedin />
                            </div>
                        </a>
                        <a href="https://twitter.com/intent/follow?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1618149381307498498%7Ctwgr%5Ee18da2e5388b93195a7b63bd6073ecff506f3bdd%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Flinktr.ee%2Fsavics&screen_name=_Savics" target="_blank" rel="noopener noreferrer">
                            <div className='bg-border p-1 mx-2 md:mx-0 rounded hover:border-[#80a674] shadow border border-[#0b4345] cursor-pointer'>
                                <TiSocialTwitter />
                            </div>
                        </a>
                        <a href="https://github.com/Savics407" target="_blank" rel="noopener noreferrer">
                            <div className='bg-border p-1 mx-2 md:mx-0 rounded hover:border-[#80a674] shadow border border-[#0b4345] cursor-pointer'>
                                <TiSocialGithub />
                            </div>
                        </a>
                        <a href="https://www.youtube.com/channel/UC3hAnUSvsGeC6lnlmKNxyAA" target="_blank" rel="noopener noreferrer">
                            <div className='bg-border p-1 mx-2 md:mx-0 rounded hover:border-[#80a674] shadow border border-[#0b4345] cursor-pointer'>
                                <TiSocialYoutube />
                            </div>
                        </a>
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