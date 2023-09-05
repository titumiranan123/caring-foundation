import React from 'react';
import logo from '../../assets/logo.jpg'
import Image from 'next/image';
import { FaArrowRight, FaClock, FaFacebook, FaInstagram, FaLocationArrow, FaTelegram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-[#002B4D] mt-10 p-10'>
            <div className='flex justify-between'>
                <div className='flex justify-center mb-5 items-center'>
                    <Image className='h-20 rounded-full w-20' alt='' src={logo} />
                </div>
                <div className='text-white flex gap-5 mt-10 '>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTelegram />
                    <FaYoutube />
                </div>

            </div>
            <hr className='text-slate-400 w-full' />
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 md:grid-cols-2 text-white py-10'>
                <div className='space-y-2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat assumenda repellendus error?</p>
                    <h1>LOCATION</h1>
                    <div className='flex gap-5 items-center'>
                        <FaLocationArrow /> <p>
                            Dhaka 1200, Dhanmondi-15
                        </p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <FaClock />
                        <p> Monday 9.00 AM - 5.00 PM</p>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-lg font-bold'>OUR COMPANY</h1>
                    <p>About Foundation</p>
                    <p>Professional Team</p>
                    <p>Our Program</p>
                    <p>Our Facilites</p>
                    <p>Blog & News</p>

                </div>
                <div className='space-y-2'>
                    <h1 className='text-lg font-bold'>OUR PROGRAM</h1>
                    <p>Senior Citizen </p>
                    <p>Sport  Program</p>
                    <p> Disable Insurance</p>
                    <p>Web Development</p>
                    <p>Career Support</p>
                </div>
                <div className='space-y-3'>
                    <button className='flex w-full justify-between bg-[#0074CC]  px-6 py-2 rounded-lg text-white items-center gap-2 font-semibold text-xl bg-'>Donate to support <FaArrowRight /></button>
                    <button className='flex w-full justify-between bg-[rgb(32,189,64)]  px-6 py-2 rounded-lg text-white items-center gap-2 font-semibold text-xl bg-'>Volunteers <FaArrowRight /></button>
                    <button className='flex w-full justify-between bg-white px-6 py-2 rounded-lg text-black items-center gap-2 font-semibold text-xl bg-'>Join Community<FaArrowRight /></button>
                </div>
            </div>

        </div>
    );
};

export default Footer;