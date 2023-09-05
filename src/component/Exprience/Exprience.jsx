import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import care from '../../assets/caring.jpg'
import home from '../../assets/home_2626923.png';
import usergroup from '../../assets/usergroup.png';
import Image from 'next/image';
const Exprience = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-14 mt-20 '>
            <div>
                <div data-aos="fade-right" data-aos-duration="1400">

                    <Image className='lg:w-[90%] w-full rounded-lg' src={care} alt='' />
                </div>
                <div className='flex lg:flex-nowrap flex-wrap md:flex-nowrap gap-10 mt-5'>
                    <div className='border-[#002052] border-2 w-72 p-10 flex justify-center items-center'>
                        <div className='rounded-full w-20 h-20 bg-[#002052] flex justify-center items-center   border'>
                            <Image className='w-14 rounded-full bg-white p-1 h-14' alt='' src={home} />
                        </div>
                        <div className=''>
                            <p className="text-4xl font-bold">12 +</p>
                            <p className='text-xl font-semibold'>Year Experience</p>
                        </div>
                    </div>
                    <div className='border-[#002052] border-2 rounded-tr-2xl p-10 gap-5 w-72 flex  justify-center items-center'>
                        <div className='rounded-full w-20 h-20 bg-[#20BD40] flex justify-center items-center   border'>
                            <Image className='w-14 rounded-full bg-white p-1 h-14' alt='' src={usergroup} />
                        </div>
                        <div className=''>
                            <p className="text-4xl font-bold">120+</p>
                            <p className="text-xl font-semibold">Professional Team </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-6'>
                <p className='text-xl font-semibold'>EXPERIENCE</p>
                <h1 className='text-4xl font-bold'><span className='text-[#0074CC] text-4xl font-bold'>12 Years </span> of experience in this disability foundation</h1>
                <p className='text-slate-400 text-sm'>
                    Tortor aliquam nulla facilisi cras fermentum odio. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Massa massa ultricies mi quis hendrerit. Et odio pellentesque diam volutpat commodo
                    <br />
                    <br />
                    Viverra nam libero justo laoreet sit. Accumsan sit amet nulla facilisi morbi tempus iaculis urna.ibero volutpat sed cras ornare arcu dui. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.
                    <br />
                    <br />
                    Nibh tellus molestie nunc non. Tortor condimentum lacinia quis vel. Senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <button className='flex  justify-between bg-[#11A42F] px-6 py-2 rounded-lg text-white items-center gap-2 font-semibold text-xl bg-'>Read More <FaArrowRight /></button>
            </div>

        </div>
    );
};

export default Exprience;