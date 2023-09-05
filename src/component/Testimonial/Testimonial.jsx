"use client"
import Image from 'next/image';
import React from 'react';
import { FaArrowRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import testi from '../../assets/testimonial.jpg'
const Testimonial = () => {
    return (
        <div className='bg-img '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-20'>
                <div className='text-white space-y-5 mt-5'>
                    <p className="text-white font-bold text-2xl">TESTIMONIAL</p>
                    <p className='text-4xl font-bold'><span className="text-blue-600">Our customer</span> Feedback.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quae commodi accusantium inventore voluptates libero dicta, consectetur deleniti optio nisi ipsum nostrum culpa dolorum. Magnam incidunt nostrum architecto maiores voluptates iusto voluptatum? </p>
                    <button className='py-2 px-6 text-white font-semibold bg-[#11A42F] rounded-lg flex juc first-letter items-center gap-5 mt-10'>See all Testimonial <FaArrowRight /></button>
                </div>
                <div>
                    <FaQuoteLeft className='text-slate-500 text-left text-2xl ' />
                    <div className='flex justify-center items-center flex-col mt-10 space-y-4'>
                        <Image className='h-12 flex justify-center ms-auto me-auto w-12 rounded-full ' src={testi} alt='' />
                        <p className='text-center text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eveniet ratione. Soluta aut nam asperiores, quis sed maiores dolorum saepe dolores error fugit quia recusandae, reprehenderit alias temporibus blanditiis iure!</p>
                        <p className='text-lg font-semibold text-white'>Rohit Mehera</p>
                    </div>
                    <FaQuoteRight className='text-slate-500 text-right text-2xl ms-auto mt-10 ' />
                </div>
            </div>

        </div>
    );
};

export default Testimonial;