import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Facilitiescard = ({ img, title, description }) => {
    return (
        <div className='w-80 h-[350px] border group hover:border-[rgb(32,189,64)] border-[#0074CC] p-4 space-y-6 rounded-lg'>
            <div className=' flex justify-center'>
                <Image className='h-20 w-20' src={img} alt='' />
            </div>
            <div className='flex justify-center items-center flex-col space-y-4'>
                <h1 className='text-2xl text-center font-bold'>{title}</h1>
                <p className='text-slate-400 '>{description}</p>
                <button className='flex justify-center text-[rgb(32,189,64)] group-hover:text-[rgb(43,124,59)] px-6 py-2 rounded-lg items-center gap-2 font-semibold text-xl'>Read Details <FaArrowRight /></button>
            </div>
        </div>
    );
};

export default Facilitiescard;