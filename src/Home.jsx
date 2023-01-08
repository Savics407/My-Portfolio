import React from 'react'
import Header from './Header'
import profile from './assets/profile.jpg'

function Home() {
    return (
        <div>
            {/* Header Session */}
            <div className=''>
                <Header />
                <div className='flex items-center px-24 py-14'>
                    <div className=' w-1/2 flex flex-col items-center justify-center'>
                        <div className='rounded-full border-10 border-border w-[265px] h-96 shadow-2xl'>
                            <img src={profile} alt="Victor Adighibe" className='object-cover w-full h-full rounded-full' />
                        </div>
                    </div>
                    <div className=' w-1/2'>
                        <div className='font-josefin mb-5'>
                            <h1 className='text-intro mb-5'>Hi, my name is </h1>
                            <h1 className='text-6xl text-white font-bold tracking-wider '>Victor <br />Adighibe. <br />
                                {/* &lt;savics /&gt; */}
                            </h1>
                            {/* <h2 className='text-5xl text-light '>Frontend Engineer.</h2> */}
                        </div>
                        <div >
                            <h1 className='font-Montserrat text-gray-300 text-sm w-[450px]'>
                                I’m a software engineer specializing in building exceptional frontend products with great user experience.
                            </h1>
                        </div>
                        <div className='pt-10 font-Montserrat'>
                            <button className='border-2 border-double border-main hover:text-main text-intro px-10 py-3 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro'>Let's work </button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Home