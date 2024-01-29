import React from 'react'
import classicimg from "../Images/classicimg.png"

function Classic() {

    const linearGradientStyle = {
        background: 'linear-gradient(90deg, #022D24 11.02%, #146C60 88.41%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };

    const sectionStyle = {
        backgroundImage: `url(${classicimg})`,
        backgroundSize: 'cover', // Adjust the background size if needed


    };

    return (
        <>
            <div style={sectionStyle} className='flex h-96 xl:h-[562px] items-center '>
                <div className='bg-black h-full w-full opacity-40 '></div>
            </div>
            <div className='bg-[#FAF9F6] shadow-sm w-full h-32 xl:h-52 flex items-center justify-center'>
                <p style={linearGradientStyle} className='md:text-[70px] text-[22px]'>Ready to get Started?</p>
            </div>
            <div className='flex  shadow-sm  flex-col gap-5 py-12 items-center justify-center'>
                <div>
                    <span className='xl:text-[56px] text-2xl text-[#146C60]'>CLASSIC</span>
                </div>
                <div className='flex flex-col px-3  md:px-0 text-center'>
                    <span className='text-[16px] text-[#717171]'>
                        The most popular option for digital business cards. Constructed from resilient, recyclable plastic
                    </span>
                    <span className='text-[16px] text-[#717171]'>
                        they're designed for durability, making them perfect for every occasion.
                    </span>
                </div>
                <div className='mt-4'>
                    <button className='btn-hover color-5 '>
                        Get Your Card
                    </button>
                </div>
            </div >
        </>
    )
}

export default Classic
