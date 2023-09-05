import Image from 'next/image';
import React from 'react';
import img from '../../assets/mission.png'
import img2 from '../../assets/calendar_2693507.png'
import { FaArrowRight } from 'react-icons/fa';
const Curiculam = () => {
    return (
        <div className='relative mt-10 mb-96'>
            <div className={`h-[600px] md:w-[90%] relative bg-img lg:h-[680px] md:h-[520px] mx-auto curiculam  flex justify-center items-center flex-col   `}>
                <div className="lg:w-1/2 w-full p-4 md:p-14 space-y-5">
                    <p className='text-white font-bold text-xl'>ACTIVE SOCIETY</p>
                    <h1 className='text-white text-4xl font-bold'><span className='text-[#0074CC]'>Disabilities</span> feel empowered and inspired to redefine what is possible.</h1>
                    <p className='text-white'>Cursus in hac habitasse platea dictumst. Interdum consectetur libero id faucibus nisl tincidunt eget. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Imperdiet sed euismod nisi porta.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1400" className=' mx-auto lg:w-[80rem] mb-40 w-full md:w-[40rem] h-[300px] absolute lg:-bottom-64 lg:p-10 p-4 flex-col lg:left-36 flex justify-center md:-bottom-[26rem] -bottom-[22rem] md:left-24
             items-center rounded-lg'>
                <div className='grid md:grid-cols-2 grid-cols-1 border-2 border-white rounded-xl'>
                    <div className='bg-[#0074CC] space-y-4 p-4 rounded-l-xl'>
                        <Image className='w-20 h-20' src={img} alt='' />
                        <h1 className="text-white text-2xl font-bold">MISSION</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus , luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <button className='flex justify-center bg-[rgb(32,189,64)] group-hover:bg-[rgb(43,124,59)] px-6 py-2 rounded-lg text-white items-center gap-2 font-semibold text-xl bg-'>Read More <FaArrowRight /></button>
                    </div>
                    <div className='bg-[#20BD40] space-y-4 p-5 rounded-r-xl'>
                        <Image className='w-20 h-20' src={img2} alt='' />
                        <h1 className="text-white text-2xl font-bold">MISSION</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus , luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <button className='flex justify-center text-[rgb(32,189,64)] group-hover:text-[rgb(43,124,59)] px-6 py-2 rounded-lg bg-white items-center gap-2 font-semibold text-xl bg-'>Read More <FaArrowRight /></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Curiculam;