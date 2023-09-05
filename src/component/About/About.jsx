import Image from 'next/image';
import React from 'react';
import img from '../../assets/about.jpg';
const About = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-80 md:p-10 p-2
            '>
                <div className='space-y-7 md:p-10 p-4'>
                    <p className='text-xl font-bold '>ABOUT US</p>
                    <h2 className='text-4xl font-semibold'><span className='text-[#0074CC]'>We are comitted</span> to promoting the rights and  <br />priorities of people with disabilities</h2>
                    <p className='text-slate-400 font-semibold '> Tortor aliquam nulla facilisi cras fermentum odio . Enim blandit volutpat maecenas volutpar blandit aliquam etiam erat. <br /> Massa massa ultricies mi quis hendrerit . Et odio pellentesque diam volutpat commodo

                        <br />
                        Viverra nam libero justo laoreet sit . Accumsan sit amet nulla facilisi morbi tempus iaculis urna</p>
                    <p className="text-xl text-black font-bold">We are best home care service provider</p>
                    <button className='py-2 px-4 rounded-lg font-semibold bg-[#20BD40]' >Appointment</button>
                </div>
                <div data-aos="fade-left" >
                    <Image className='w-[100%] h-[100%] rounded-lg shadow-lg' src={img} alt='' />
                </div>
            </div>
        </div>
    );
};

export default About;