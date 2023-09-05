import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';

const Follow = () => {
    return (
        <div className='bg-img p-20 space-y-5  mt-10 h-42'>
            <h1 className='md:text-5xl text-3xl font-bold text-white text-center'>FOLLOW US</h1>
            <p className='text-xl text-slate-300 text-center'>Omare Quam viverra orci sagittis eu volutpat odio facilisis</p>
            <div className='flex gap-5 flex-wrap md:flex-nowrap text-center md:justify-center items-center'>
                <div className='flex justify-center gap-4 items-center'>
                    <FaFacebook className='p-1 font-bold text-3xl bg-white rounded-full' />
                    <p className='text-xl text-white font-bold '>Facebook</p>
                </div>
                <span className='text-white hidden md:block h-8 border'></span>
                <div className='flex justify-center gap-4 items-center'>
                    <FaInstagram className='p-1 font-bold text-3xl bg-white rounded-full' />
                    <p className='text-xl text-white font-bold '>Instagram</p>
                </div>
                <span className='text-white hidden md:block h-8 border'></span>
                <div className='flex justify-center gap-4 items-center'>
                    <FaTelegram className='p-1 font-bold text-3xl bg-white rounded-full' />
                    <p className='text-xl text-white font-bold '>Telegram</p>
                </div>
                <span className='text-white hidden md:block h-8 border'></span>
                <div className='flex justify-center gap-4 items-center'>
                    <FaYoutube className='p-1 font-bold text-3xl bg-white rounded-full' />
                    <p className='text-xl text-white font-bold '>Youtube</p>
                </div>
            </div>
        </div>
    );
};

export default Follow;