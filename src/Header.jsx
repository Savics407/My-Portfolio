import React from 'react'
import logo from './assets/white logo.png'
export default function () {
    return (
        <div>
            <div className='flex justify-between items-center px-24 py-8 '>
                {/* <h1 className='text-white text-3xl'>Savics</h1> */}
                <img src={logo} alt="savics" className='w-40' />
                <div className='flex flex-col items-end cursor-pointer'>
                    <div className='w-10 border mb-3 '></div>
                    <div className='w-7 border '></div>
                </div>

            </div>
            <div className='absolute w-1/5 right-0 hidden bg-white'>
                Menu items
            </div>
        </div>
    )
}
