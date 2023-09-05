'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import img1 from '../../assets/2359094.jpg';
import img2 from '../../assets/2367428.jpg';
import img3 from '../../assets/2590433.jpg';
import img4 from '../../assets/b.jpg';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';

const Headercarousel = () => {
    return (
        <div className='lg:w-[60rem] md:w-[30rem] w-[350px]   mx-auto bg-[#002052] lg:p-10 p-3 mt-2'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <Image className='md:h-36 md:w-36 w-20 h-20 flex justify-center items-center rounded-full' src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='md:h-36 md:w-36 w-20 h-20 flex justify-center items-center rounded-full' src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='md:h-36 md:w-36 w-20 h-20 flex justify-center items-center rounded-full' src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='h-36 w-36 flex justify-center items-center rounded-full' src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='md:h-36 md:w-36 w-20 h-20 flex justify-center items-center rounded-full' src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='h-36 w-36 flex justify-center items-center rounded-full' src={img3} alt="" />
                </SwiperSlide>

            </Swiper>

        </div >
    );
};

export default Headercarousel;