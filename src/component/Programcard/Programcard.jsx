import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Programcard = ({ img, logo, title }) => {
    return (
        <div className='border-2 w-96 lg:w-full p-10 rounded-xl'>
            <div className='relative'>
                <Image className='rounded-xl' src={img} alt="" />
                <Image className='h-20 w-20 p-2 rounded-full  absolute -bottom-8 left-10 bg-white ' src={logo} alt="" />
            </div>
            <div className=' flex justify-center flex-col space-y-4 mt-8'>
                <p className='font-bold text-[#20338F] text-2xl'>{title}</p>
                <p>Tortor aliquam nulla facilisi cras fermentum odio. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Massa massa ultricies mi quis hendrerit. Et odio pellentesque diam volutpat commodo…</p>
                <button className='flex justify-center bg-[rgb(32,189,64)] group-hover:bg-[rgb(43,124,59)] px-6 py-2 rounded-lg text-white items-center gap-2 font-semibold text-xl bg-'>Read Details <FaArrowRight /></button>
            </div>
        </div>
    );
};

export default Programcard;