import Image from 'next/image';
import React from 'react';

const Newscard = ({ img, heading }) => {
    return (
        <div className='group border-2 z-50 lg:w-96 w-full p-4 border-[#0074CC] overflow-hidden'>
            <div className='relative'>
                <div className='image-container group-hover:scale-105 transition duration-500 ease-out '>

                    <Image className='overflow-hidden ' alt='' src={img} />
                </div>
                <div className='text-white font-bold flex justify-center items-center p-4 rounded-lg absolute bg-[#0074CC] w-10 py-2 h-10 -bottom-5 right-8'>
                    27 <br />
                    Jul
                </div>
            </div>
            <div className='p-5 mt-5 space-y-3'>
                <h1 className='text-3xl font-bold'>{heading}</h1>
                <p>SINGLE BLOG Blog details Home |Single blog author 2023/07/27 Fact Disability &  Making Disability Insurance In est ante in nibh mauris cursus mattis....
                </p>
                <button className='px-6 py-4 text-white font-bold bg-[#20BD40]'>Read More</button>
            </div>

        </div>
    );
};

export default Newscard;