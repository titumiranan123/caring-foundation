import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Heading from '../Heading/Heading';

const Event = () => {
    return (
        <div className='mt-20 flex flex-col justify-center items-center md:px-10 px-2'>
            <div className='space-y-3'>
                <Heading maintitle={"UPCOMING EVENTS "} title={"a happy event with us care for love"} colorctitle={"Let&apos;s makes "} />

            </div>
            <div className='flex flex-col justify-center items-center mt-10'>
                <div data-aos="fade-up" data-aos-duration="1400" className='flex justify-around border-2 border-blue-600 p-4 gap-5 items-center rounded-lg'>
                    <div className='w-32 h-32 flex justify-center items-center bg-blue-600 text-white font-bold text-4xl'>
                        01
                        <br />
                        MAR
                    </div>
                    <div>
                        <p className='text-xl font-bold '>Art present for the better tomorrow</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tempore? Commodi, repudiandae?</p>
                    </div>
                    <div>
                        <button className='flex  justify-between  px-6 py-2 rounded-lg text-slate-500 items-center gap-2 font-semibold text-xl bg-'>Sold Out  <FaArrowRight /> </button>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1450" className='flex justify-around border-2 border-blue-600 mt-5 mb-5 p-4 gap-5 items-center rounded-lg'>
                    <div className='w-32 h-32 flex justify-center items-center bg-blue-600 text-white font-bold text-4xl'>
                        01
                        <br />
                        MAR
                    </div>
                    <div>
                        <p className='text-xl font-bold '>Art present for the better tomorrow</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tempore? Commodi, repudiandae?</p>
                    </div>
                    <div>
                        <button className='flex  justify-between bg-[#11A42F] px-6 py-2 rounded-lg text-white items-center gap-2 font-semibold text-xl bg-'>Sold Out <FaArrowRight /></button>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className='flex justify-around border-2 border-blue-600 rounded-lg p-4 gap-5 items-center '>
                    <div className='w-32 h-32 flex justify-center items-center bg-blue-600 text-white font-bold text-4xl'>
                        01
                        <br />
                        MAR
                    </div>
                    <div>
                        <p className='text-xl font-bold '>Art present for the better tomorrow</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tempore? Commodi, repudiandae?</p>
                    </div>
                    <div>
                        <button className='flex  justify-between bg-[#11A42F] px-6 py-2 rounded-lg text-white items-center gap-2 font-semibold text-xl bg-'>Sold Out <FaArrowRight /></button>
                    </div>
                </div>
            </div>
            <div className='text-lg flex justify-center items-center gap-2 mt-10' >
                <p className='text-xl font-semibold'>Join our event today :</p>
                <div className='text-[#20BD40] flex justify-center gap-3 items-center font-bold  '>
                    <p>See all event </p>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    );
};

export default Event;