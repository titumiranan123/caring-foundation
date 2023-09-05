import Image from 'next/image';
import React from 'react';
import { FaArrowRight, FaClock, FaSearchLocation } from 'react-icons/fa';
import award from '../../assets/award.jpg';
import doctor from '../../assets/award-doc.jpg';

const Serviceaward = () => {
    return (
        <div className='bg-img md:p-10 p-4 service   grid grid-cols-1 lg:grid-cols-2 '>
            <div className='space-y-4 mt-5 text-white '>
                <h1 className='text-lg font-bold' >LIFE BY GIVING </h1>
                <h1 className='text-2xl font-bold'>Celebrate happiness with us</h1>
                <p>Cursus in hac habitasse platea dictumst. Interdum consectetur libero id faucibus nisk tincidunt eget. Dui vivamus arcu felis bibendum ut tristique er egestras quis . IMperdiet sed euismod nisi porta</p>
                <button className='flex w-full justify-between bg-[#0074CC]  px-6 py-2 rounded-lg text-white items-center gap-2 font-semibold text-xl bg-'>Read Details <FaArrowRight /></button>
                <button className='flex w-full justify-between bg-[rgb(32,189,64)]  px-6 py-2 rounded-lg text-white items-center gap-2 font-semibold text-xl bg-'>Read Details <FaArrowRight /></button>
                <button className='flex w-full justify-between bg-white px-6 py-2 rounded-lg text-black items-center gap-2 font-semibold text-xl bg-'>Read Details <FaArrowRight /></button>
            </div>
            <div className='p-4 relative'>
                <div   >

                    <Image className='rounded-lg ' src={award} alt='' />
                </div>
                <div className='flex gap-5'>
                    <div className='p-4 bg-[#0074CC] absolute md:bottom-6 bottom-32 lg:left-20  border rounded-t-full rounded-r-full'>
                        <Image className=' w-32 h-32 rounded-full   ' src={doctor} alt='' />
                    </div>
                    <div className='text-white md:mt-5 mt-20 ms-auto me-20'>
                        <h1 className="text-xl text-white font-bold mt-10">Senior care best service awards </h1>
                        <div className='flex gap-3 items-center'>
                            <FaSearchLocation />
                            <p>Location: 1234 Australia</p>
                        </div>
                        <div className='flex gap-3 items-center' >
                            <FaClock />
                            <p>Time: Sep 24, 2023 | 12:00 am</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Serviceaward;