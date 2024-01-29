import React from 'react'
import Navbar from "../Components/Navbar"
import classicimg from "../Images/sustaibnbilitybackground.png"
import Footer from '../Components/Footer';

function Sustainability() {

    const linearGradientStyle = {
        background: 'linear-gradient(90deg, #022D24 11.02%, #146C60 88.41%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };

    const backgroundTexture = {
        backgroundImage: `url(${classicimg})`,
        backgroundSize: 'contain', // Adjust the background size if needed


    };

    return (
        <>
            <Navbar />
            <div
                style={backgroundTexture}
            >
                <div className='flex flex-col items-center  gap-10 xl:gap-24 pt-36 '>
                    <div className='flex flex-col items-center gap-12 '>
                        <div className='flex flex-col items-center gap-9 '>
                            <h3 style={linearGradientStyle} className='xl:text-[56px]  text-center text-[42px] border-b'>Sustainability and Efficiency</h3>
                            <p className='text-[19px] text-center text-gray-400'> Aligned with Niti Aayog's Vision</p>
                        </div>
                        <div className='text-center hidden md:block'>
                            <p className='text-[16px] text-[#022D24]'>As an advocate for sustainability, MOLOG aligns Tap & Tag with Niti Aayog's policies on</p>
                            <p className='text-[16px] text-[#022D24]'>sustainability, digital transformation, and paperless initiatives. Tap & Tag visiting cards significantly</p>
                            <p className='text-[16px] text-[#022D24]'>reduce paper waste, directly supporting Niti Aayog's directives for a greener, digitally</p>
                            <p className='text-[16px] text-[#022D24]'>empowered India.</p>
                        </div>
                        <div className=' text-center sm:hidden text-[#022D24] p-2 text-[16px]'>
                            <p>
                                As an advocate for sustainability, MOLOG aligns Tap & Tag with Niti Aayog's policies on
                                sustainability, digital transformation, and paperless initiatives. Tap & Tag visiting cards significantly
                                reduce paper waste, directly supporting Niti Aayog's directives for a greener, digitally
                                empowered India.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-16'>
                        <div className=' leading-none text-center'>
                            <p className='text-[#84A7AC] text-[42px] xl:text-[74px]'>Buy Less,</p>
                            <p className='text-[#CAE7E5] text-[42px] xl:text-[74px]'>Choose Well,</p>
                            <p className='text-[#D79F6F] text-[42px] xl:text-[74px]'>Make it Last.</p>
                        </div>
                        <div className='mt-4'>
                            <button className='border border-[#022D24]  text-[#022D24] hover:bg-[#022D24] hover:text-white rounded-sm text-[20px]  px-8 py-2'>
                                Get Your Card
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Sustainability
